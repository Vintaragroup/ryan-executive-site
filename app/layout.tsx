import { ReactNode } from 'react';
import { Geist, IBM_Plex_Mono, Instrument_Serif, Inter } from 'next/font/google';
import '@/styles/globals.css';

// Load Instrument Serif for editorial display typography
const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

// Load Inter for body and UI typography
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// Load Geist for Figma-authored body and interface typography
const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

// Load IBM Plex Mono for metadata
const ibmPlexMono = IBM_Plex_Mono({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Ryan Morrow - Executive Site',
  description: 'Professional executive monograph and portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${inter.variable} ${geist.variable} ${ibmPlexMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
