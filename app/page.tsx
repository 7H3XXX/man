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
          Fullstack Web Developer & Solution architect
        </span>
        <p className="my-7 text-neutral-300">
          Building value-driven web experiences that solves
          everyday concerns.
        </p>
        <div>
          <Link href={"/contact"}>
            <button className="px-4 py-3 border border-neutral-700 bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-100 mb-8">
              Get in touch
            </button>
          </Link>
        </div>
      </div>

      <div className="mb-36">
        <h2 className="font-bold text-xl mb-8">Skills</h2>
        <Marquee />
      </div>
      <div className="mb-36">
        <h2 className="font-bold text-xl mb-8">Tools + Softwares</h2>
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
