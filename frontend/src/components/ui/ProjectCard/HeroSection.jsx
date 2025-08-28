"use client";
import React from "react";
import { FlipWords } from "./flip-words";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const words = ["Full Stack Developer", "Web Developer", "Blockchain Developer"];

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-primary mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text">
              Hello, I&apos;m
            </span>
            <br />
            <FlipWords
              words={words}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-secondary text-base sm:text-lg mb-6 lg:text-xl">
            Passionate about building seamless digital experiences with a blend
            of creativity and code.
          </p>
          <div>
            <Link
              to="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-primary-600 hover:bg-primary-700 text-white transition-colors duration-300"
            >
              Hire Me
            </Link>
            <Link
              to="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-accent-500 to-primary-900 hover:from-accent-600 hover:to-secondary-700 transition-colors duration-300 text-white mt-3"
            >
              <span className="block bg-white hover:bg-neutral-50 rounded-full px-5 py-2 text-primary-600 font-medium transition-colors duration-300">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-gradient-to-br from-primary-600 to-accent-600 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img
              src="/images/ombima.png"
              alt="Hero Image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full h-full object-cover"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;