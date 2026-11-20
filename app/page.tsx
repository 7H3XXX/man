"use client";

import { toolsAndSoftware } from "lib/data";
import ProjectCard from "./components/project-card";
import Link from "next/link";
import { Bubble } from "./components/bubble";
import { Marquee } from "./components/marquee/marquee";

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

      <div className="mb-36">
        <h2 className="font-bold text-xl mb-8" id="projects">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard
            title="Check Games"
            description="The digital version of the Cameroonian family card game. Join an immersive game where you compete against your friends and family."
            href={"/projects/check-games/case-study"}
            icon="spades"
            tags={["Game", "Rune", "React", "TailwindCSS"]}
          />
          <ProjectCard
            title="Indomptable Shop"
            description={`Building a modern shopping experience for a streetweat brand named "INDOMPTABLE". Cutting edge e-commerce website with a pinch of magic.`}
            // href="https://bit.ly/indomptableshop"
            // href={"/projects/indomptableshop/case-study"}
            icon="indomptable"
            tags={["Next.js", "React", "TailwindCSS", "Sanity"]}
          />
          <ProjectCard
            title="2D Fighting game"
            description="Fair and square fight against your biggest opponent in a web environment. Defeat your rival with your weapon and claim the victory."
            // href="https://7h3xxx.github.io/fighting-game/"
            // href={"/projects/fighting-game/case-study"}
            icon="swords"
            tags={["JavaScript", "HTML5", "CSS3", "Game"]}
          />
          <ProjectCard
            title="NXT Blog"
            description="Dev.to-like blog. This project focuses on creating a minimalist blogging system that eases access with Google sign-in and a post preview."
            // href={"/projects/nxt-blog/case-study"}
            icon="blog"
            tags={["Firebase", "MDX", "NextJS"]}
          />
        </div>
      </div>
      <div className="mb-36">
        <p className="text-2xl text-neutral-300">
          Are you working on something new ?
          <br />I would to know more about it, don't hesitate to{" "}
          <Link href={"/contact"} className="link-transition outline-0">
            reach out
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
