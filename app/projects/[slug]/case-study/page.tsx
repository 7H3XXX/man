import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx/custom-mdx";
import { getBlogPosts } from "lib/projects";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  let project = getBlogPosts().find((project) => project.slug === params.slug);
  if (!project) {
    return;
  }

  let { title, summary: description, href, image } = project.metadata;
  let ogImage = image
    ? `https://man-portfolio.vercel.app${image}`
    : `https://man-portfolio.vercel.app/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://man-portfolio.vercel.app/blog/${project.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
  };
}

export default function Blog({ params }) {
  let project = getBlogPosts().find((project) => project.slug === params.slug);

  console.log(params);

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
            url: `https://man-portfolio.vercel.app/blog/${project.slug}`,
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
          className="flex w-max items-center group gap-3"
        >
          <h1 className="font-bold text-2xl min-[600px]:text-4xl tracking-tighter">
            {project.metadata.title}
          </h1>
          <span className="w-4 aspect-square inline-flex">
            <svg
              fill="currentColor"
              className="text-neutral-500 group-hover:text-neutral-300"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns-xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 122.6 122.88"
              xml-space="preserve"
            >
              <g>
                <path d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95 c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07 c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5 c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z" />
              </g>
            </svg>
          </span>
        </Link>
      ) : (
        <h1 className="font-bold text-2xl min-[600px]:text-4xl tracking-tighter">
          {project.metadata.title}
        </h1>
      )}
      <p className="mb-3 text-neutral-600 text-base inline-block dark:text-neutral-400">
        {project.metadata.category} <span className="w-0.5 inline-block"></span>{" "}
        <span className="opacity-70 text-2xl relative top-0.5">•</span>{" "}
        <span className="w-0.5 inline-block"></span> {project.metadata.year}
      </p>
      <article className="leading-7 prose prose-quoteless prose-neutral dark:prose-invert prose-img:mx-auto">
        <CustomMDX source={project.content} />
      </article>
    </section>
  );
}
