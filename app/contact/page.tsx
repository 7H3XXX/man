import { DEFAULT_OG } from "lib/default-og";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Marc-Antoine Ngaba, frontend engineer, about a role, a project or a collaboration.",
  alternates: {
    canonical: '/contact'
  },
  openGraph: {
    ...DEFAULT_OG.openGraph,
    title: `Contact | ${DEFAULT_OG.openGraph.title}`,
  },
};

export default function Contact() {
  return (
    <section>
      <div className="mt-24 mb-36 text-center">
        <h1 className="font-bold text-4xl tracking-tight mb-4">
          Let's work on your next project!
        </h1>
        <p className="text-neutral-400 mb-8">
          Open to frontend engineering roles and selected projects.
        </p>
        <Link
          href={"mailto:ngaba.marcantoine@gmail.com"}
          className="px-4 py-3 border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 transition-colors rounded text-sm inline-flex items-center leading-4 text-neutral-100 mb-6"
        >
          ngaba.marcantoine@gmail.com
        </Link>
        <p className="text-sm text-neutral-400">
          Or find me on{" "}
          <Link
            href="https://www.linkedin.com/in/marc-antoine-ngaba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-neutral-100 underline underline-offset-4"
          >
            LinkedIn<span className="sr-only"> (opens in a new tab)</span>
          </Link>{" "}
          and{" "}
          <Link
            href="https://github.com/7H3XXX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-neutral-100 underline underline-offset-4"
          >
            GitHub<span className="sr-only"> (opens in a new tab)</span>
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
