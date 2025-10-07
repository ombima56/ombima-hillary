"use client";
import React, { useTransition, useState } from "react";
import { motion } from "framer-motion";
import TabButton from "./TabButton";

const SKILL_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "React Query", level: 75 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "Go (Golang)", level: 75 },
      { name: "Gin Framework (Go)", level: 70 },
      { name: "Rust", level: 65 },
      { name: "RESTful APIs", level: 90 },
      { name: "GraphQL", level: 75 },
      { name: "WebSocket", level: 80 },
    ],
  },
  {
    id: "blockchain",
    title: "Blockchain",
    skills: [
      { name: "Solidity", level: 80 },
      { name: "Soroban (Stellar)", level: 75 },
      { name: "Web3.js", level: 85 },
      { name: "Ethers.js", level: 85 },
      { name: "Hardhat", level: 80 },
      { name: "Truffle", level: 75 },
      { name: "Stellar SDK", level: 70 },
      { name: "Smart Contract Development", level: 85 },
    ],
  },
  {
    id: "database",
    title: "Database & Tools",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "Docker", level: 80 },
      { name: "Git & GitHub", level: 90 },
      { name: "AWS", level: 75 },
      { name: "Vercel", level: 85 },
      { name: "Postman", level: 90 },
    ],
  },
];

// Skills Section Component with Collapsible Categories
const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="space-y-3">
      {SKILL_CATEGORIES.map((category) => (
        <div
          key={category.id}
          className="border border-dark-blue-600 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleCategory(category.id)}
            className="w-full px-4 py-3 text-left bg-dark-blue-800 hover:bg-dark-blue-700 transition-colors duration-200 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-light-blue-500"
          >
            <h4 className="text-lg font-semibold text-white">
              {category.title}
            </h4>
            <svg
              className={`w-5 h-5 text-white transform transition-transform duration-200 ${
                activeCategory === category.id ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              activeCategory === category.id
                ? "max-h-[600px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 py-4 bg-primary-900/40 backdrop-blur-sm">
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={activeCategory === category.id ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-200 font-medium text-sm">
                        {skill.name}
                      </span>
                      <span className="text-accent-400 font-semibold text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-2 bg-primary-800/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={activeCategory === category.id ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ delay: index * 0.1 + 0.2, duration: 0.8, ease: "easeOut" }}
                        className="absolute h-full bg-gradient-to-r from-accent-500 via-secondary-500 to-primary-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: <SkillsSection />,
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2 text-light-blue-300">
          <li>Fullstack Academy of Code</li>
          <li>Adamur</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2 text-light-blue-300">
          <li>AWS Cloud Practitioner</li>
          <li>Google Analytics Certified</li>
        </ul>
      ),
    },
  ];

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img
          src="/images/aboutme2.png"
          alt="about-image"
          width={500}
          height={500}
          className="rounded-xl shadow-lg bg-primary-900 bg-opacity-50 object-contain aspect-square"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-secondary">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with modern web technologies including React, Node.js, Go,
            and Rust, as well as blockchain development with Solidity and
            Soroban. I am a quick learner and I am always looking to expand my
            knowledge and skill set. I am a team player and I am excited to work
            with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-2 max-h-80 overflow-y-auto">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
