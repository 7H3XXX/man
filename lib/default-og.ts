import { Metadata } from "next";

export const DEFAULT_OG: Metadata = {
  title: {
    default: "Marc-Antoine Ngaba",
    template: "%s | Marc-Antoine Ngaba",
  },
  keywords: [
    "Marc-Antoine Ngaba",
    "portfolio",
    "next.js developer",
    "frontend developer",
    "developer",
  ],
  applicationName: "Marc-Antoine Ngaba",
  generator: "Next.js",
  referrer: "origin",
  authors: [
    {
      name: "Marc-Antoine Ngaba",
      url: "https://www.linkedin.com/in/marc-antoine-ngaba",
    },
  ],
  creator: "Marc-Antoine Ngaba",
  publisher: "Vercel",
  description: "Developer, graphic designer, and photographer.",
  category: "Personal Website",
  alternates: {
    canonical: "https://www.blvcko.space",
  },
  metadataBase: new URL("https://www.blvcko.space"),
  openGraph: {
    title: "Marc-Antoine Ngaba",
    description: "Developer, graphic designer, and photographer.",
    url: "https://blvcko.space",
    images: "/opengraph-image.jpg",
    siteName: "Marc-Antoine Ngaba",
    locale: "en-US",
    type: "website",
  },
};
