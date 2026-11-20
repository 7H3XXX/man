"use client";

import {
  toolsAndSoftware,
  craftProjects,
  openSourceContributions,
} from "lib/data";
import ProjectCard from "./components/project-card";
import Link from "next/link";
import { Bubble } from "./components/bubble";
import { Marquee } from "./components/marquee/marquee";

type ListItem = {
  title: string;
  description: string;
  href: string;
  label: string;
};

function LinkList({ items }: { items: ListItem[] }) {
  return (
    <ul className="divide-y divide-neutral-800 border-y border-neutral-800">
      {items.map((item) => {
        const external = item.href.startsWith("http");
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : null)}
              className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span>
                <span className="font-semibold text-neutral-100 group-hover:underline underline-offset-4">
                  {item.title}
                </span>
                <span className="block text-neutral-400 mt-1">
                  {item.description}
                </span>
              </span>
              <span className="shrink-0 text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors">
                {item.label}
                {external ? (
                  <span className="sr-only"> (opens in a new tab)</span>
                ) : null}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function Page() {
  return (
    <section>
      <div className="my-36">
        <h1 className="font-bold text-4xl tracking-tight">
          Ngaba
          <br />
          Marc-Antoine
        </h1>
        <span className="text-sm mt-3 inline-block text-neutral-400">
          Frontend Engineer · React &amp; TypeScript
        </span>
        <p className="my-7 text-neutral-300">
          Frontend engineer with 4+ years of experience building high-transaction products across SaaS,
          consumer apps, fintech and finance. Built the
          merchant revenue dashboard, and real-time payment
          tracking which helped grow active users by 200% in 7 months @Lygos. Co-built a real-time multiplayer card game with voice chat that reached 5,000+ players in its first week @Check Games.
          Keen eye for details, React and TypeScript at the core.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link
            href="/contact"
            className="px-4 py-3 border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 transition-colors rounded text-sm inline-flex items-center leading-4 text-neutral-100"
          >
            Get in touch
          </Link>
          <Link
            href="#work"
            className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors py-3"
          >
            See my work
          </Link>
        </div>
      </div>

      <div className="mb-36">
        <h2 className="font-bold text-xl mb-8">What I do</h2>
        <Marquee />
      </div>

      <div className="mb-36">
        <h2 className="font-bold text-xl mb-8">Tools I work with</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {toolsAndSoftware.map((item, index) => (
            <Bubble key={index} content={item} />
          ))}
        </div>
      </div>

      <div className="mb-36 scroll-mt-12" id="work">
        <h2 className="font-bold text-xl mb-8">Selected work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard
            title="Lygos"
            description="The merchant app and back office of a payment platform that powered 15,000+ businesses in French-speaking Africa. Active users grew by 200% in 7 months."
            href="/projects/lygos/case-study"
            icon="payments"
            tags={["Next.js", "TypeScript", "Real-time", "Fintech"]}
          />
          <ProjectCard
            title="Enterprise UI"
            description="A premium library of production-ready React blocks, modeled on top-tier design teams, so developers and AI coding agents ship pages faster."
            href="/projects/enterprise-ui/case-study"
            icon="blocks"
            tags={["React", "Next.js", "shadcn/ui", "Base UI", "Tailwind CSS"]}
          />
          <ProjectCard
            title="Indomptable Studio"
            description="The website of a digital transformation studio, designed and built on Enterprise UI to look like the work it sells and turn visits into booked calls."
            href="/projects/indomptable-studio/case-study"
            icon="indomptable"
            tags={["Next.js", "Enterprise UI", "Tailwind CSS", "SEO"]}
          />
          <ProjectCard
            title="Check Games"
            description="Cameroon's favorite family card game, rebuilt as a real-time multiplayer game with voice chat. 5,000+ players in its first week."
            href="/projects/check-games/case-study"
            icon="spades"
            tags={["React", "Rune", "Multiplayer", "Game"]}
          />
        </div>
      </div>

      <div className="mb-36 scroll-mt-12" id="craft">
        <h2 className="font-bold text-xl mb-2">Craft</h2>
        <p className="text-neutral-400 mb-8">
          What I build to learn, sharpen my skills and give back to the tools I
          use every day.
        </p>

        <h3 className="text-sm uppercase tracking-widest text-neutral-400 mb-4">
          Experiments
        </h3>
        <div className="mb-12">
          <LinkList items={craftProjects} />
        </div>

        <h3 className="text-sm uppercase tracking-widest text-neutral-400 mb-4">
          Open source
        </h3>
        <LinkList items={openSourceContributions} />
      </div>

      <div className="mb-36">
        <p className="text-2xl text-neutral-300">
          Working on something new?
          <br />
          I'd love to hear about it.{" "}
          <Link href={"/contact"} className="link-transition">
            Let's talk
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
