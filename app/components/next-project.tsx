import Image from "next/image";
import Link from "next/link";

type NextProjectProps = {
  title: string,
  category: string,
  year: string,
  description: string,
  href: string,
  imgSrc: string,
  imgPosition: "right" | "center"
}

export default function NextProject({title, category, year, description,href, imgSrc, imgPosition} : NextProjectProps) {
  return (
    <Link
      href={href}
      className="bg-neutral-800 px-8 pt-8 transition-all delay-[0.2s] ease-out md:hover:brightness-[1.1] md:hover:scale-[1.02] rounded-3xl cursor-pointer flex flex-col md:flex-row max-w-5xl overflow-hidden mx-auto"
    >
      <div>
          <h2 className="font-bold text-2xl">{title}</h2>
          <p className="mb-3 text-base inline-block text-neutral-400">
            {category} <span className="w-0.5 inline-block"></span>{" "}
            <span className="opacity-70 text-2xl relative top-0.5">•</span>{" "}
            <span className="w-0.5 inline-block"></span> {year}
          </p>
          <p className="mb-6 leading-6 text-gray-300">
          {description}
          </p>
          <div>
              <button className="px-4 py-3 border border-neutral-700 bg-neutral-700 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-100 mb-8">
                Read the case study
              </button>
          </div>
      </div>
      <Image
        src={imgSrc}
        width={960}
        height={800}
        alt="phone displaying a game's UI"
        className={`object-scale-down scale-[1.1] w-full relative ${imgPosition === "right" ? "-right-5" : ""} md:max-w-[350px]`}
      />
    </Link>
  );
}
