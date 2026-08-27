import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jobberscrape — High-Trust Entry-Level & NYSC Job Feed (Nigeria)',
  description: 'Automated scam-free job aggregation platform for Nigerian fresh graduates and NYSC corps members. 100% verified, 0 recruitment fees.',
  manifest: '/manifest.json',
  themeColor: '#0A1128',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
