"use client";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useDarkMode } from "../../hooks/useDarkMode";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-24 right-8 z-50 p-3 rounded-full bg-primary-800/60 backdrop-blur-md border border-primary-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <SunIcon className="w-6 h-6 text-accent-400" />
        ) : (
          <MoonIcon className="w-6 h-6 text-accent-400" />
        )}
      </motion.div>
    </motion.button>
  );
}
