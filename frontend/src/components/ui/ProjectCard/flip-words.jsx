"use client";
import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../../../lib/utils";

export const FlipWords = ({
  words = [],
  duration = 3000,
  className
}) => {
  // Validate and filter words array to only include strings
  const validWords = React.useMemo(() => {
    if (!words || !Array.isArray(words)) return [];
    return words.filter(word => typeof word === 'string' && word.length > 0);
  }, [words]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (validWords.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % validWords.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, validWords.length]);

  // Guard against empty valid words
  if (validWords.length === 0) {
    return null;
  }

  const currentWord = validWords[currentIndex];

  return (
    <div className={cn("inline-block relative", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
          transition={{
            duration: 0.5,
            ease: "easeInOut"
          }}
          className="inline-block bg-gradient-to-r from-accent-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent font-bold"
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
