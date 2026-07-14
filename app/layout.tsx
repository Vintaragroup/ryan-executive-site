import { ReactNode } from 'react';
import { Inter, IBM_Plex_Mono } from 'next/font/google';
import '@/styles/globals.css';

// Load Inter for body and UI typography
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// Load IBM Plex Mono for metadata
const ibmPlexMono = IBM_Plex_Mono({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

// Instrument Serif will fall back to Georgia until font files are added
// To enable Instrument Serif:
// 1. Add font files to public/fonts/
// 2. Uncomment the localFont import and configuration below
// 3. Add instrumentSerif.variable to the body className

export const metadata = {
  title: 'Ryan Morrow - Executive Site',
  description: 'Professional executive monograph and portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
