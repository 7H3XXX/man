import { getCaseStudies } from "lib/projects";

export default async function sitemap() {
  let projects = getCaseStudies().map((project) => ({
    url: `https://blvcko.space/projects/${project.slug}/case-study`,
    lastModified: "2025-02-04",
  }));

  const routes = ["", "/about", "/contact", "/experience", ""].map((route) => ({
    url: `https:/blvcko.space${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...projects];
}
