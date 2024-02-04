import { TopTracksSkeleton } from "app/components/skeletons";
import { images } from "lib/images";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import TopTracks from "app/components/top-tracks";
import { Metadata } from "next";
import { booksRead } from "lib/data";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <section className="mb-36">
      <div className="mb-20">
        <h2 className="font-bold text-2xl mb-6">About me</h2>
        <div className="prose prose-neutral dark:prose-invert dark:prose-p:text-neutral-300/80 mb-6">
          <p>
            Ah, you're here, let me tell you a little story then. My name is
            Marc-Antoine Ngaba (some call me Marco, but let's stick to the
            original form), I'm a full-stack developer from Cameroon and I
            design and build value-driven solutions for today's concerns. I
            gratuated since a year now and during this time I grew a passion for
            software quality and design thinking as I worked on various
            projects.
          </p>
          <p>
            I believe experiences are our best teachers. It's the reason why I
            always put myself in situations where growing and learning are on
            the spot. This way of thinking makes me close to people, how they
            think and walk through the path of life, both personally and
            professionally.
          </p>
          <p>
            From academic projects to professional environments I progressively
            gained proficiency in making ideas come to life, starting from
            designing to the actual product. Unknowingly my humanity was baking
            with how I approach and validate solutions in different contexts
            based on feedbacks. Visual arts (which I'm a fan of, as graphic
            design enthusiast) allowed me to add a sense of structure and
            exploration to this objective and analytical asset. This led me to a
            composite view of software engineering where the function and the
            form constitute the body and soul of a digital product.
          </p>
          <p>
            From this perspective I found myself browsing through various fields
            and grow a passion for software architecture. From game dev. to
            e-commerce and mobile apps, I worked with great minds in both indie
            and professional contexts. This taught me news ways to solve
            problems and made me continuously improve in my fullstack role.
          </p>
          <p>
            Outside of tech I like to explore and live boldly, trying new things
            and looking for new ways to express my creativity. In photography,
            art direction, graphic design, and various other form of arts, I
            found just that.
          </p>
        </div>
      </div>
      <div className="mb-20">
        <h2 className="font-bold text-2xl mb-6">Some of my pictures</h2>
        <div className="columns-1 sm:columns-2 md:columns-3 w-full space-y-4">
          {images.map((image, index) => {
            return (
              <Image
                src={image.src}
                placeholder="blur"
                alt={image.alt}
                className="rounded-md"
                key={index + 1}
              ></Image>
            );
          })}
        </div>
      </div>
      <div className="mb-20">
        <h2 className="font-bold text-2xl mb-6">What I'm currently reading</h2>
        <ul className="text-neutral-400">
          {booksRead.map((book, index) => (
            <li
              className="mb-1 py-6 px-5 border-2 border-neutral-700/60 rounded-md hover:scale-[1.03] transition-all hover:border-transparent hover:bg-neutral-800"
              key={index + 1}
            >
              <Link
                href={book.href}
                className="flex flex-col min-[500px]:flex-row items-center gap-4"
              >
                <Image
                  src={book.cover}
                  width={150}
                  height={197}
                  alt="Designing Data-Intensive Applications book cover."
                />
                <div className="flex flex-col">
                  <p className="text-lg sm:text-xl font-light">{book.title}.</p>
                  <p className="text-base text-neutral-500 mt-2">
                    {book.author}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-20">
        <h2 className="font-bold text-2xl mb-6" id="top-tracks">
          Tracks I fell in love with
        </h2>
        <ul className="text-neutral-400">
          <Suspense fallback={<TopTracksSkeleton />}>
            <TopTracks />
          </Suspense>
        </ul>
      </div>
      <p className="font-bold text-2xl mb-6">
        I would like to know about you too :)
        <br />
        Let's{" "}
        <Link href={"/contact"} className="link-transition">
          talk
        </Link>{" "}
        together !
      </p>
    </section>
  );
}
