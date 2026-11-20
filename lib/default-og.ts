import { Metadata } from "next";

export const DEFAULT_OG = {
  title: {
    default: "Marc-Antoine Ngaba, Frontend Engineer (React & TypeScript)",
    template: "%s | Marc-Antoine Ngaba",
  },
  keywords: [
    "Marc-Antoine Ngaba",
    "frontend engineer",
    "React developer",
    "TypeScript",
    "Next.js developer",
    "fintech frontend",
    "Cameroon",
    "portfolio",
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
  description:
    "Frontend engineer building high-transaction products for SaaS, fintech and finance with React and TypeScript. Payments, real-time dashboards and design systems.",
  category: "Personal Website",
  alternates: {
    canonical: "https://www.blvcko.space",
  },
  metadataBase: new URL("https://www.blvcko.space"),
  openGraph: {
    title: "Marc-Antoine Ngaba",
    description:
    "Frontend engineer building high-transaction products for SaaS, fintech and finance with React and TypeScript. Payments, real-time dashboards and design systems.",
    url: "https://www.blvcko.space",
    images: "/opengraph-image.jpg",
    siteName: "Marc-Antoine Ngaba",
    locale: "en-US",
    type: "website",
  },
} satisfies Metadata;
