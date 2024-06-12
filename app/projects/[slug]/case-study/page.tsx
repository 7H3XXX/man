import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx/custom-mdx";
import { getCaseStudies } from "lib/projects";
import Image from "next/image";
import Link from "next/link";
import { DEFAULT_OG } from "lib/default-og";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  let project = getCaseStudies().find(
    (project) => project.slug === params.slug
  );
  if (!project) {
    return;
  }

  let { title, summary: description, image } = project.metadata;
  let ogImage = image
    ? `https://man-portfolio.vercel.app${image}`
    : `https://man-portfolio.vercel.app/og?title=${title}`;

  return {
    title: `${title}`,
    description,
    openGraph: {
      title: `${title} | ${DEFAULT_OG.openGraph.title}`,
      description,
      type: "article",
      url: `https://man-portfolio.vercel.app/projects/${project.slug}/case-study`,
      images: [
        {
          url: ogImage,
        },
      ],
      locale: DEFAULT_OG.openGraph.locale,
    },
  };
}

export default function CaseStudy({ params }) {
  let project = getCaseStudies().find(
    (project) => project.slug === params.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: project.metadata.title,
            description: project.metadata.summary,
            image: project.metadata.image
              ? `https://man-portfolio.vercel.app${project.metadata.image}`
              : `https://man-portfolio.vercel.app/og?title=${project.metadata.title}`,
            url: `https://man-portfolio.vercel.app/projects/${project.slug}/case-study`,
            author: {
              "@type": "Person",
              name: "Marc-Antoine Ngaba",
            },
          }),
        }}
      />
      <Image
        src={`${project.metadata.image}`}
        className="rounded-md mb-4 min-[600px]:mb-6"
        width={672}
        height={378}
        priority
        alt={`${project.metadata.title} cover picture`}
      />
      {project.metadata.href ? (
        <Link
          href={project.metadata.href}
          className="flex w-max items-center group gap-2.5"
        >
          <h1 className="font-bold text-2xl min-[600px]:text-4xl tracking-tighter">
            {project.metadata.title}
          </h1>
          <div className="text-neutral-400 group-hover:text-neutral-300">
            <svg
              width="16"
              height="16"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </Link>
      ) : (
        <h1 className="font-bold text-2xl min-[600px]:text-4xl tracking-tighter">
          {project.metadata.title}
        </h1>
      )}
      <p className="mb-3 text-base inline-block text-neutral-400">
        {project.metadata.category} <span className="w-0.5 inline-block"></span>{" "}
        <span className="opacity-70 text-2xl relative top-0.5">•</span>{" "}
        <span className="w-0.5 inline-block"></span> {project.metadata.year}
      </p>
      <article className="leading-7 prose prose-quoteless prose-neutral prose-invert prose-img:mx-auto">
        <CustomMDX source={project.content} />
      </article>
    </section>
  );
}
