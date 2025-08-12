import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Text animations
  const headingY = useTransform(scrollYProgress, [0, 0.8], ["0%", "-50%"]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const subheadingY = useTransform(scrollYProgress, [0.2, 0.8], ["50%", "0%"]);
  const subheadingOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  // Background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div
      ref={ref}
      className="w-full min-h-screen overflow-hidden relative grid place-items-center "
    >
      {/* First Text */}
      <motion.h1
        style={{ y: headingY, opacity: headingOpacity }}
        className="font-bold text-white text-7xl mb-24 md:text-7xl relative z-20 "
      >
        <span className="leading-3">Welcome to Electcare</span>
      </motion.h1>

      {/* Second Text */}
      <motion.p
        style={{
          y: subheadingY,
          opacity: subheadingOpacity,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        className="font-bold text-white text-4xl md:text-7xl z-20"
      >
        Power Your Future
      </motion.p>

      {/* Background image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/star-main.jpg)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />

      {/* Back cloud (behind mountain) */}
      <motion.img
        src="/cloud.png"
        className="absolute w-[250px] z-10"
        style={{
          left: "35%",
          top: "40%",
        }}
        animate={{ x: ["0%", "10%", "0%", "-10%", "0%"] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      />

    
      {/* Foreground mountain */}
      <div
        className="absolute inset-0 z-40 pointer-events-none"
        style={{
          backgroundImage: `url(/image-bottom.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
