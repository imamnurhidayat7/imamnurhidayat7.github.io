import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://imamnurhidayat7.github.io'),
  title: {
    default: 'Imam Nurhidayat — Full-Stack Developer',
    template: '%s | Imam Nurhidayat',
  },
  description:
    'Portfolio of Imam Nurhidayat, a full-stack developer passionate about building modern web applications.',
  keywords: ['portfolio', 'full-stack developer', 'web developer', 'Indonesia'],
  authors: [{ name: 'Imam Nurhidayat' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://imamnurhidayat7.github.io',
    title: 'Imam Nurhidayat — Full-Stack Developer',
    description: 'Portfolio of Imam Nurhidayat, a full-stack developer.',
    siteName: 'Imam Nurhidayat Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imam Nurhidayat — Full-Stack Developer',
    description: 'Portfolio of Imam Nurhidayat, a full-stack developer.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}