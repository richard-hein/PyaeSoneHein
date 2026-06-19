"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const words = [
  "simple.",
  "modern.",
  "productive.",
  "reactive.",
  "cloud-ready.",
];

export default function WordCycle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <h1 className="text-5xl font-bold text-center leading-tight">
      Spring makes Java
      <br />
      {/* 
        overflow-hidden clips the word as it slides in/out.
        h-[1.15em] locks the height so the layout doesn't jump.
      */}
      <span className="inline-block overflow-hidden h-[1.15em] align-bottom">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={words[index]}
            className="block text-[#6db33f]"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-110%", opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </h1>
  );
}
