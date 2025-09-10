import "./global.css";
import clsx from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Sidebar from "./components/sidebar";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/footer";
import { DEFAULT_OG } from "lib/default-og";

const graphik = localFont({
  src: [
    {
      path: "../public/fonts/Graphik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Graphik-Medium.ttf",
      weight: "600",
      style: "bold",
    },
  ],
  variable: "--font-graphik",
  display: "swap",
});

export const metadata: Metadata = {
  ...DEFAULT_OG,
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
    site: "Marc-Antoine Ngaba",
    description: DEFAULT_OG.description!,
  },
  verification: {
    google: "do5HGukpG-RdwxnQYMAbcRPsKBBtizi_6KOeLF5AaIA",
    yandex: "254fe3be9245242b",
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
      className={clsx("text-white bg-[#111010]", graphik.variable)}
    >
      <body className="antialiased max-w-2xl mb-20 flex flex-col md:flex-row mt-8 mx-auto bg-[#111010]">
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
