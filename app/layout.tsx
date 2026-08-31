import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Jiadong Lin — Computational Genomics',
  description: 'Jiadong Lin develops algorithms for human genome structural variation, long-read sequencing, and pangenomics at the University of Washington.',
  metadataBase: new URL('https://jiadong324.github.io'),
  openGraph: {
    title: 'Jiadong Lin — Computational Genomics',
    description: 'Structural variation, long-read sequencing, and pangenomics at the University of Washington.',
    url: 'https://jiadong324.github.io',
    siteName: 'Jiadong Lin',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Jiadong Lin — Computational Genomics' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jiadong Lin — Computational Genomics',
    description: 'Structural variation, long-read sequencing, and pangenomics at the University of Washington.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
