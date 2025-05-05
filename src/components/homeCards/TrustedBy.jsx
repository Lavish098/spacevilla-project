import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const images = [
  {
    src: "../src/assets/trustByImg/shortlet.png",
    alt: "Shortlethomes",
  },
  {
    src: "../src/assets/trustByImg/gig.png",
    alt: "GIG Logistics",
  },
  { src: "../src/assets/trustByImg/access.png", alt: "Access" },
  {
    src: "../src/assets/trustByImg/leadway.png",
    alt: "LEADWAY Assurance",
  },
  { src: "../src/assets/trustByImg/axa.png", alt: "AXA" },
  {
    src: "../src/assets/trustByImg/firstbank.png",
    alt: "FirstBank",
  },
  { src: "../src/assets/trustByImg/clean.png", alt: "Clean" },
];

const TrustedBy = () => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [imageElements, setImageElements] = useState([]);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const imageWidth = 150;
  const gap = 32; // Tailwind's gap-4
  const singleImageWidth = imageWidth + gap;
  const totalImageWidth = images.length * singleImageWidth;
  const animationDuration = 10;
  const startPosition = 0;
  const endPosition = -totalImageWidth;

  useEffect(() => {
    // Duplicate images for continuous loop
    const duplicatedImages = [];
    for (let i = 0; i < 2; i++) {
      // Create two sets of images
      images.forEach((image, index) => {
        duplicatedImages.push(
          <img
            key={`${i}-${index}`}
            src={image.src}
            alt={image.alt}
            className="inline-block w-[300px] h-[80px] mr-10 select-none"
            style={{
              userDrag: "none",
              WebkitUserDrag: "none",
            }}
          />
        );
      });
    }
    setImageElements(duplicatedImages);
  }, []);

  return (
    <div className="w-full overflow-hidden relative py-16" ref={containerRef}>
      <div className="text-center py-10">
        <p className="text-gray-600 text-base">
          Trusted by 2,000 users and businesses
        </p>
      </div>
      <div className="flex items-center justify-start w-[50%] ">
        <motion.div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            width: totalImageWidth, // Ensure enough width for both sets
          }}
          initial={{ x: startPosition }}
          animate={{ x: -totalImageWidth }}
          transition={{
            duration: animationDuration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex"
        >
          {imageElements}
        </motion.div>
      </div>
    </div>
  );
};

export default TrustedBy;
