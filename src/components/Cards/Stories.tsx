// import Image from "next/image";
// import { story } from "@/constants";

// function Stories() {
//   return (
//     <div>
//       {story.map((story) => (
//         <div
//           className="border text-gray-500 w-full p-2 rounded-2xl mb-3 max-w-md"
//           key={story.id}
//         >
//           {/* Card with image */}
//           <div className="relative rounded-lg h-48">
//             <Image
//               src={story.image}
//               alt={story.title}
//               layout="responsive"
//               objectFit="contain"
//               className="rounded-t-lg"
//             />
//           </div>
//           {/* Heading */}
//           <h3 className="text-lg font-semibold mt-3">{story.title}</h3>
//           {/* Description */}
//           <p className="text-sm text-gray-600 mt-1">{story.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Stories;

import { story } from "@/constants";

function Stories() {
  return (
    <div>
      {story.map((singleStory) => (
        <div
          className="border text-gray-500 w-full p-2 rounded-2xl mb-3 max-w-md"
          key={singleStory.id}
        >
          {/* Card with image */}
          <div className="relative rounded-lg h-48 overflow-hidden">
            <img
              src={singleStory.image.src} // Accessing the src property from the StaticImageData object
              alt={singleStory.title}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          {/* Heading */}
          <h3 className="text-lg font-semibold mt-3">{singleStory.title}</h3>
          {/* Description */}
          <p className="text-sm text-gray-600 mt-1">
            {singleStory.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Stories;
