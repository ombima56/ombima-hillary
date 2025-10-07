"use client";
import React, { useCallback, useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../../../lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className
}) => {
  // Validate and filter words array to only include strings
  const validWords = React.useMemo(() => {
    if (!words || !Array.isArray(words)) return [];
    return words.filter(word => typeof word === 'string' && word.length > 0);
  }, [words]);

  const [currentWord, setCurrentWord] = useState(validWords[0] || "");

  const startAnimation = useCallback(() => {
    if (validWords.length === 0) return;
    const currentIndex = validWords.indexOf(currentWord);
    const nextIndex = (currentIndex + 1) % validWords.length;
    setCurrentWord(validWords[nextIndex]);
  }, [currentWord, validWords]);

  useEffect(() => {
    const interval = setInterval(() => {
      startAnimation();
    }, duration);

    return () => clearInterval(interval);
  }, [duration, startAnimation]);

  // Guard against empty valid words
  if (validWords.length === 0 || !currentWord) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentWord}
        initial={{ opacity: 0, y: 20, rotateX: 90 }}
        animate={{
          opacity: 1,
          y: 0,
          rotateX: 0
        }}
        exit={{
          opacity: 0,
          y: -20,
          rotateX: -90
        }}
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1]
        }}
        className={cn(
          "inline-block text-left text-neutral-900 dark:text-neutral-100",
          className
        )}
      >
        {currentWord}
      </motion.div>
    </AnimatePresence>
  );
};
