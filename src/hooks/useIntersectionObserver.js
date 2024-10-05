// import { useIntersectionObserver } from "@uidotdev/usehooks";

// const ShowcaseSection = ({ imgUrl, placeholder, caption }) => {
//   const [ref, entry] = useIntersectionObserver({
//     threshold: 0,
//     root: null,
//     rootMargin: "0px",
//   });

//   return (
//     <div ref={ref} className="object-cover object-center">
//       {entry?.isIntersecting ? (
//         <img
//           src={imgUrl}
//           alt={caption}
//           className="h-full object-cover object-center brightness-75"
//         />
//       ) : (
//         <img
//           src={placeholder}
//           alt={caption}
//           className="h-full object-cover object-center blur brightness-75"
//         />
//       )}
//     </div>
//   );
// };

// export default ShowcaseSection;
