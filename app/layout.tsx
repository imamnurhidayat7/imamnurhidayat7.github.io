import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { BackToTop } from '@/components/ui/BackToTop';

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
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Imam Nurhidayat — Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imam Nurhidayat — Full-Stack Developer',
    description: 'Portfolio of Imam Nurhidayat, a full-stack developer.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-touch-icon.svg', type: 'image/svg+xml' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Set theme class before hydration to avoid flash of wrong theme. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-sans">
        {children}
        <BackToTop />
      </body>
    </html>
  );
}