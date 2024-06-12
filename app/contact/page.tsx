import { DEFAULT_OG } from "lib/default-og";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  openGraph: {
    ...DEFAULT_OG.openGraph,
    title: `Contact | ${DEFAULT_OG.openGraph.title}`,
  },
};

export default function Contact() {
  return (
    <section>
      <div className="mt-24 mb-36">
        <h1 className="font-bold text-4xl text-center tracking-tight mb-8">
          Let's work on your next project or message me to say hi!
        </h1>
        <div className="text-center">
          <Link href={"mailto:ngaba.marcantoine@gmail.com"}>
            <button className="px-4 py-3 border border-neutral-700 bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-100 mb-8">
              ngaba.marcantoine@gmail.com
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
