import { getCaseStudies } from "lib/projects";

export default async function sitemap() {
  let projects = getCaseStudies().map((project) => ({
    url: `https://man-portfolio.vercel.app/projects/${project.slug}/case-study`,
    lastModified: "2024-01-12",
  }));

  const routes = ["", "/about", "/contact", "/experience", ""].map((route) => ({
    url: `https://man-portfolio.vercel.app${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...projects];
}
