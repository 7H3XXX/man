import "./styles.css";

export function Marquee() {
  return (
    <>
      {/* <button className="toggle" id="direction-toggle">
          <span>Toggle scroll axis</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 512 512"
            width="100"
            title="arrows-alt-h"
          >
            <path d="M377.941 169.941V216H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.568 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296h243.882v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.568 0-33.941l-86.059-86.059c-15.119-15.12-40.971-4.412-40.971 16.97z" />
          </svg>
        </button> */}

      <article className="wrapper">
        <div className="marquee">
          <div className="marquee__group">
            {[
              "Web Development",
              "Software Architecture",
              "Mobile App Development",
              "Project management",
              "Requirement Analysis",
              "Cloud computing",
            ].map((item, index) => (
              <span key={index} className="text-neutral-400 text-xl">
                {item}
              </span>
            ))}
          </div>

          <div aria-hidden="true" className="marquee__group">
            {[
              "Web Development",
              "Software Architecture",
              "Mobile App Development",
              "Project management",
              "Requirement Analysis",
              "Cloud computing",
            ].map((item, index) => (
              <span key={index} className="text-neutral-400 text-xl">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="marquee marquee--reverse">
          <div className="marquee__group">
            {[
              "Time management",
              "Teamwork",
              "Problem Solving",
              "Adaptability",
              "Creativity",
              "Interpersonal skills",
              "Attention to detail",
            ].map((item, index) => (
              <span key={index} className="text-neutral-400 text-xl">
                {item}
              </span>
            ))}
          </div>

          <div aria-hidden="true" className="marquee__group">
            {[
              "Time management",
              "Teamwork",
              "Problem Solving",
              "Adaptability",
              "Creativity",
              "Interpersonal skills",
              "Attention to detail",
            ].map((item, index) => (
              <span key={index} className="text-neutral-400 text-xl">
                {item}
              </span>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
