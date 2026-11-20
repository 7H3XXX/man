import Link from "next/link";

const footerLinks: any = [
  {
    links: [
      { title: "Home", href: "/" },
      { title: "Work", href: "/#work" },
      { title: "Experience", href: "/experience" },
      { title: "About", href: "/about" },
    ],
  },
  {
    links: [
      { title: "GitHub", href: "https://github.com/7H3XXX", target: "blank" },
      { title: "Contact", href: "/contact" },
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/marc-antoine-ngaba",
        target: "blank",
      },
    ],
  },
];

export default function Footer() {
  return (
    <section>
      <hr className="my-8 opacity-20"/>
      <div>
        <div className="flex">
          {footerLinks.map((set:any, index: number) => (
            <ul className="space-y-2 w-1/2" key={index + "ul"}>
              {set.links.map((link: any) => (
                <li className="w-min" key={link.title}>
                  <Link
                    href={link.href}
                    {...(link.target ? { target: "_blank", rel: "noopener noreferrer" } : null)}
                    className="transition-colors hover:text-neutral-200 flex align-middle text-neutral-400 py-1"
                  >
                    {link.title}
                    {link.target ? <span className="sr-only"> (opens in a new tab)</span> : null}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
