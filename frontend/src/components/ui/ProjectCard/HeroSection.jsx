"use client";
import React from "react";
import { FlipWords } from "./flip-words";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const words = ["Full Stack Developer", "Web Developer", "Blockchain Developer"];

const HeroSection = () => {
  const handleClick = (e, id) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center py-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-7 text-center sm:text-left"
        >
          <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight">
            <span className="text-accent-400">
              Hello, I&apos;m
            </span>
            <br />
            <FlipWords
              words={words}
              duration={3000}
              className="text-accent-400"
            />
          </h1>
          <p className="text-neutral-300 sm:text-lg mb-8 lg:text-xl max-w-lg leading-relaxed">
            Passionate about building <span className="text-secondary-400 font-bold">seamless digital experiences</span> with a blend
            of creativity and high-performance code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "contact")}
              className="px-8 py-4 w-full sm:w-fit rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-primary-900/40 hover:-translate-y-1 active:translate-y-0"
            >
              Hire Me
            </a>
            <Link
              to="/"
              className="px-8 py-4 w-full sm:w-fit rounded-xl border-2 border-primary-500 text-primary-100 font-semibold hover:bg-primary-500/10 transition-all duration-300 backdrop-blur-sm hover:-translate-y-1 active:translate-y-0"
            >
              Download CV
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0"
        >
          <div className="relative group">
            {/* Glass Background Decor */}
            <div className="absolute -inset-4 bg-primary-500/20 rounded-3xl blur-2xl group-hover:bg-primary-500/30 transition-all duration-500"></div>
            
            <div className="relative rounded-3xl p-2 bg-neutral-800/40 border border-neutral-700/50 backdrop-blur-md shadow-2xl overflow-hidden">
              <div className="w-[280px] h-[340px] lg:w-[400px] lg:h-[480px] overflow-hidden rounded-2xl">
                <img
                  src="/images/omb.png"
                  alt="Hillary Ombima"
                  className="w-full h-full object-cover object-top transform transition-transform duration-1000 group-hover:scale-105"
                  width={400}
                  height={480}
                />
              </div>
              
              {/* Floating Badge Example */}
              <div className="absolute bottom-6 -right-6 bg-accent-500 text-white px-6 py-3 rounded-2xl shadow-xl font-bold transform rotate-6 border-4 border-neutral-900 hidden sm:block">
                HIRE ME!
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;