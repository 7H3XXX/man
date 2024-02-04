// "use client";

// import { StaticImport } from "next/dist/shared/lib/get-img-props";
// // import { default as NextImage } from "next/image";
// import { Key, useEffect, useState } from "react";
// import { Slide } from "./slides";

// const CustomImage = ({ src, ...props }) => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   useEffect(() => {
//     const img = new Image(src);
//     img.onload = () => {
//       setIsLoaded(true);
//     };
//     img.src = src;
//   }, [src, isLoaded]);

//   return (
//     <>
//       {!isLoaded ? (
//         <div className={` w-28 h-28 bg-neutral-700`}></div>
//       ) : (
//         <img src={src} alt={props.alt} {...props} />
//       )}
//     </>
//   );
// };

// const Carousel = ({ slides }: { slides: Slide[] }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 1 === slides.length ? 0 : prevIndex + 1
//     );
//   };
//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - 1 < 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <>
//       <div className="flex justify-between items-start">
//         <h2 className="font-bold text-xl mb-8">
//           Skills{" "}
//           <span className="text-neutral-600 text-sm mt-0.5 inline-block dark:text-neutral-400 animate-fade">
//             • {slides[currentIndex].title}
//           </span>
//         </h2>
//         <div className="flex ">
//           <div className="left" onClick={handlePrevious}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               height="20"
//               viewBox="0 96 960 960"
//               width="20"
//               fill="currentColor"
//               className="text-neutral-400 hover:text-neutral-50"
//             >
//               <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
//             </svg>
//           </div>
//           <div className="right" onClick={handleNext}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               height="20"
//               viewBox="0 96 960 960"
//               width="20"
//               fill="currentColor"
//               className="text-neutral-400 hover:text-neutral-50"
//             >
//               <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
//             </svg>
//           </div>
//         </div>
//       </div>
//       <div
//         className={`flex flex-wrap gap-10 ${
//           slides[currentIndex].images.length >= 4 ? "justify-between" : ""
//         }`}
//         id="skills-list"
//       >
//         {slides[currentIndex].images.map(
//           (
//             image: { src: string | StaticImport; alt: string },
//             imageIndex: Key | null | undefined
//           ) => (
//             <CustomImage
//               key={imageIndex}
//               src={image.src}
//               alt={image.alt}
//               width={100}
//               height={100}
//               className="w-[16%]"
//             />
//           )
//         )}
//       </div>
//     </>
//   );
// };

// export default Carousel;
