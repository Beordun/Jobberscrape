-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- HNSW Vector Index for fast cosine similarity scam matching & search
CREATE INDEX IF NOT EXISTS jobs_embedding_hnsw_idx ON jobs 
USING hnsw (embedding vector_cosine_ops)
WITH (m = 16, ef_construction = 64);

-- Vector Similarity Search Function
CREATE OR REPLACE FUNCTION match_jobs (
  query_embedding vector(1536),
  match_threshold float,
  match_count int
)
RETURNS TABLE (
  id uuid,
  title text,
  company_name text,
  similarity float
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    jobs.id,
    jobs.title,
    jobs."companyName" AS company_name,
    1 - (jobs.embedding <=> query_embedding) AS similarity
  FROM jobs
  WHERE 1 - (jobs.embedding <=> query_embedding) > match_threshold
    AND jobs."verificationStatus" = 'VERIFIED'
  ORDER BY jobs.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;
