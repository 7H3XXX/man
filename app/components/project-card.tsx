import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  href,
  icon,
  tags,
}: {
  title: string;
  description: string;
  href?: string;
  icon: string;
  tags: string[];
}) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div className="inline-flex cursor-not-allowed">
      <Link
        className={`group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200 dark:border-slate-700 w-full ${
          !href
            ? "pointer-events-none"
            : ""
        }`}
        href={href ?? "#"}
        aria-label={title}
        aria-disabled={!href}
        tabIndex={!href ? -1 : undefined}
        rel="noopener noreferrer"
        onMouseMove={onMouseMove}
      >
        <HoverPattern mouseX={mouseX} mouseY={mouseY} />
        {!href ? (
          <span className="bg-neutral-500/30 text-neutral-300/80 px-2 py-1 uppercase absolute text-xs rounded-md right-2 top-2">
            In review
          </span>
        ) : null}
        <div className="relative h-full">
          <span className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
          <span className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
          <div className="flex flex-col items-start  dark:border-gray-800 rounded p-4 relative">
            {/* */}
            <div className="my-4">
              {icon === "spades" && (
                <svg
                  fill="currentColor"
                  overflow="hidden"
                  className="ml-1"
                  alignmentBaseline="middle"
                  width={"2rem"}
                  height={"2rem"}
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M817.568 348.16C624 204.288 557.312 89.12 512 0l0 0C512 0 512 0 512 0l0 0c-45.28 89.12-112 204.288-305.568 348.16-330.048 245.28-19.392 587.68 253.76 399.232-17.792 116.928-78.528 202.176-140.192 238.88L319.968 1024l192 0 192 0 0-37.728c-61.696-36.704-122.4-121.952-140.224-238.88C836.928 935.808 1147.616 593.44 817.568 348.16z" />
                </svg>
              )}
              {icon === "indomptable" && (
                <div className="h-8 w-9 ml-2">
                  {/*
                className="h-8 w-8 min-w-lg text-gray-900 dark:text-gray-100"
              */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    width="36"
                    height="36"
                    viewBox="0 0 20 9.87"
                  >
                    <g>
                      <g>
                        <polyline points="9.39 1.71 0 9.88 20 0 7.34 0 9.39 1.71" />
                      </g>
                    </g>
                  </svg>
                </div>
              )}
              {icon === "swords" && (
                <div className="h-8 w-8 ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 16 16"
                    width="32"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  >
                    <path d="m2.75 9.25 1.5 2.5 2 1.5m-4.5 0 1 1m1.5-2.5-1.5 1.5m3-1 8.5-8.5v-2h-2l-8.5 8.5" />
                    <path d="m10.25 12.25-2.25-2.25m2-2 2.25 2.25m1-1-1.5 2.5-2 1.5m4.5 0-1 1m-1.5-2.5 1.5 1.5m-7.25-5.25-4.25-4.25v-2h2l4.25 4.25" />
                  </svg>
                </div>
              )}
              {icon === "blog" && (
                <div className="h-8 w-8 ml-2">
                  <svg
                    version="1.1"
                    id="_x32_"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    fill="#fff"
                  >
                    <g strokeWidth="0"></g>
                    <g strokeLinecap="round" strokeLinejoin="round"></g>
                    <g>
                      <g>
                        <path d="M421.073,221.719c-0.578,11.719-9.469,26.188-23.797,40.094v183.25c-0.016,4.719-1.875,8.719-5.016,11.844 c-3.156,3.063-7.25,4.875-12.063,4.906H81.558c-4.781-0.031-8.891-1.844-12.047-4.906c-3.141-3.125-4.984-7.125-5-11.844V152.219 c0.016-4.703,1.859-8.719,5-11.844c3.156-3.063,7.266-4.875,12.047-4.906h158.609c12.828-16.844,27.781-34.094,44.719-49.906 c0.078-0.094,0.141-0.188,0.219-0.281H81.558c-18.75-0.016-35.984,7.531-48.25,19.594c-12.328,12.063-20.016,28.938-20,47.344 v292.844c-0.016,18.406,7.672,35.313,20,47.344C45.573,504.469,62.808,512,81.558,512h298.641c18.781,0,36.016-7.531,48.281-19.594 c12.297-12.031,20-28.938,19.984-47.344V203.469c0,0-0.125-0.156-0.328-0.313C440.37,209.813,431.323,216.156,421.073,221.719z"></path>
                        <path d="M498.058,0c0,0-15.688,23.438-118.156,58.109C275.417,93.469,211.104,237.313,211.104,237.313 c-15.484,29.469-76.688,151.906-76.688,151.906c-16.859,31.625,14.031,50.313,32.156,17.656 c34.734-62.688,57.156-119.969,109.969-121.594c77.047-2.375,129.734-69.656,113.156-66.531c-21.813,9.5-69.906,0.719-41.578-3.656 c68-5.453,109.906-56.563,96.25-60.031c-24.109,9.281-46.594,0.469-51-2.188C513.386,138.281,498.058,0,498.058,0z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
              )}
            </div>
            <div>
              {icon == "more" && (
                <>
                  <h4 className="text-lg font-bold tracking-tight text-gray-400 dark:text-gray-100">
                    {title}
                  </h4>
                  <p className="leading-7 text-gray-500 dark:text-gray-300">
                    {description}
                  </p>
                </>
              )}
              {icon != "more" && (
                <>
                  <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    {title}
                  </h4>
                  <p className="leading-6 pt-4 text-gray-700 dark:text-gray-400/80">
                    {description}
                  </p>
                  <div className="pt-4 flex md:flex-row flex-wrap">
                    {tags?.map((tag, idx) => (
                      <p
                        key={idx}
                        className={`leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs bg-gray-50  mr-2 px-1`}
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function HoverPattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-100/50 to-teal-100/50 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      ></motion.div>
    </div>
  );
}
