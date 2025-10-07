"use client";
import React, { useEffect, useState } from "react";
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
    <div
      className={cn(
        "inline-block text-left text-neutral-900 dark:text-neutral-100 transition-opacity duration-500",
        className
      )}
    >
      {currentWord}
    </div>
  );
};
