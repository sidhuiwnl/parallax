  import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
  import React, { useRef, useState, useEffect } from "react";
  import RoundedNav from "./RoundedNav";

  

  export default function MultiLayerParallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });

    // Text animations
    const headingY = useTransform(scrollYProgress, [0, 0.8], ["0%", "-50%"]);
    const headingOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
const subheadingY = useTransform(scrollYProgress, [0, 0.8], ["50%", "0%"]);
const subheadingOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

    // Background
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
      <div
        ref={ref}
        className="w-full min-h-screen overflow-hidden relative flex flex-col items-center justify-center"
      >
        <RoundedNav />
        
        {/* Text Container with improved responsive layout */}
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              style={{ y: headingY, opacity: headingOpacity }}
              className="font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl relative tracking-tight"
            >
              <span className="text-[#ec5a2d] block">
                Welcome to{" "}
                <span className="inline-block hover:scale-105 transition-transform duration-200">
                  Electcare
                </span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="mt-6"
            >
              <motion.p
                style={{ y: subheadingY, opacity: subheadingOpacity }}
                className="text-[#fa6e43] font-extrabold text-xl  text-end ml-2 text-sm:text-2xl md:text-4xl lg:text-5xl tracking-wide"
              >
                Power Your Future
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
        

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

        {/* Interactive elements overlay */}
        <motion.div 
          className="absolute inset-0 z-30 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)'
          }}
        />

       
      </div>
    );
  }