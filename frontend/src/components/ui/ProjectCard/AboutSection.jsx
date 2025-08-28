"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const SKILL_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "React Query",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Go (Golang)",
      "Gin Framework (Go)",
      "Rust",
      "RESTful APIs",
      "GraphQL",
      "WebSocket",
    ],
  },
  {
    id: "blockchain",
    title: "Blockchain",
    skills: [
      "Solidity",
      "Soroban (Stellar)",
      "Web3.js",
      "Ethers.js",
      "Hardhat",
      "Truffle",
      "Stellar SDK",
      "Smart Contract Development",
    ],
  },
  {
    id: "database",
    title: "Database & Tools",
    skills: [
      "PostgreSQL",
      "Docker",
      "Git & GitHub",
      "AWS",
      "Vercel",
      "Postman",
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
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 py-3 bg-dark-blue-900">
              <ul className="list-disc pl-6 text-light-blue-300 space-y-2">
                {category.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="hover:text-light-blue-100 transition-colors duration-150"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

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

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img
          src="/images/aboutme.jpg"
          alt="about-image"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
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
