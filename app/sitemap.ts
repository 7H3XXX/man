export default async function sitemap() {

  const routes = ["", "/about", "/contact", "/experience", ""].map((route) => ({
    url: `https://man.io${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
