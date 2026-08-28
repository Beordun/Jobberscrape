import { NextRequest, NextResponse } from 'next/server';

const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/$/, '') ?? '';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';

function headers() {
  return {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json',
  };
}

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get('x-forwarded-for');
  return (fwd?.split(',')[0] ?? req.headers.get('x-real-ip') ?? 'unknown').trim();
}

export async function POST(req: NextRequest) {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return NextResponse.json(
      { status: 'PREVIEW', message: 'Backend not configured; report recorded locally only.' },
      { status: 200 }
    );
  }

  let body: { jobId?: string; reason?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { jobId, reason } = body;
  if (!jobId) {
    return NextResponse.json({ error: 'jobId is required' }, { status: 400 });
  }

  const ip = clientIp(req);

  // Dedupe: one report per job per IP (mirrors @@unique([jobId, userIp])).
  const dedupeRes = await fetch(
    `${SUPABASE_URL}/rest/v1/job_reports?jobId=eq.${jobId}&userIp=eq.${encodeURIComponent(ip)}&select=id`,
    { headers: headers() }
  );
  const existing = dedupeRes.ok ? await dedupeRes.json() : [];
  if (existing.length > 0) {
    return NextResponse.json({ status: 'ALREADY_REPORTED' }, { status: 200 });
  }

  const insertRes = await fetch(`${SUPABASE_URL}/rest/v1/job_reports`, {
    method: 'POST',
    headers: { ...headers(), Prefer: 'return=minimal' },
    body: JSON.stringify({ jobId, reason: reason ?? 'OTHER', userIp: ip }),
  });
  if (!insertRes.ok) {
    return NextResponse.json({ error: 'Failed to record report' }, { status: 500 });
  }

  // FR-VER-05: threshold of 3 distinct IPs -> PENDING_REVIEW.
  const countRes = await fetch(
    `${SUPABASE_URL}/rest/v1/job_reports?jobId=eq.${jobId}&select=userIp`,
    { headers: headers() }
  );
  const rows = countRes.ok ? await countRes.json() : [];
  const distinct = new Set(rows.map((r: { userIp: string }) => r.userIp)).size;

  if (distinct >= 3) {
    const jobRes = await fetch(
      `${SUPABASE_URL}/rest/v1/jobs?id=eq.${jobId}&scamRiskScore=lte.55&select=id`,
      { headers: headers() }
    );
    const jobs = jobRes.ok ? await jobRes.json() : [];
    if (jobs.length > 0) {
      await fetch(
        `${SUPABASE_URL}/rest/v1/jobs?id=eq.${jobs[0].id}`,
        {
          method: 'PATCH',
          headers: { ...headers(), Prefer: 'return=minimal' },
          body: JSON.stringify({ verificationStatus: 'PENDING_REVIEW' }),
        }
      );
      return NextResponse.json({ status: 'PENDING_REVIEW' }, { status: 200 });
    }
  }

  return NextResponse.json({ status: 'RECORDED' }, { status: 200 });
}
