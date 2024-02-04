import './global.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Sidebar from './components/sidebar';
import { Analytics } from '@vercel/analytics/react';
import Footer from './components/footer';

const graphik = localFont({
  src: [
    {
      path: '../public/fonts/Graphik-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Graphik-Medium.ttf',
      weight: '600',
      style: 'bold',
    },
  ],
  variable: '--font-graphik',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://man.io"),
  title: {
    default: "Marc-Antoine Ngaba",
    template: "%s | Marc-Antoine Ngaba",
  },
  description: "Developer, graphic designer, and photographer.",
  openGraph: {
    title: "Marc-Antoine Ngaba",
    description: "Developer, graphic designer, and photographer.",
    url: "https://man.io",
    siteName: "Marc-Antoine Ngaba",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Marc-Antoine Ngaba",
    card: "summary_large_image",
  },
  verification: {
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    yandex: "14d2e73487fa6c71",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        graphik.variable
      )}
    >
      <body className="antialiased max-w-2xl mb-20 flex flex-col md:flex-row mt-8 mx-auto dark:bg-[#111010]">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-6 sm:px-10 md:px-0">
          <Sidebar />
          {children}
          <Analytics />
          <Footer />
        </main>
      </body>
    </html>
  );
}
