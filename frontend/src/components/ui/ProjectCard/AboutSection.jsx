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
    <div className="space-y-4 pt-4">
      {SKILL_CATEGORIES.map((category) => (
        <div
          key={category.id}
          className="border border-primary-700/50 rounded-xl overflow-hidden bg-primary-800/20 backdrop-blur-sm"
        >
          <button
            onClick={() => toggleCategory(category.id)}
            className="w-full px-5 py-4 text-left hover:bg-primary-700/30 transition-all duration-300 flex items-center justify-between focus:outline-none"
          >
            <h4 className="text-lg font-bold text-white tracking-wide">
              {category.title}
            </h4>
            <div className={`p-1 rounded-full bg-primary-700/50 transition-transform duration-300 ${activeCategory === category.id ? "rotate-180" : ""}`}>
              <svg
                className="w-5 h-5 text-accent-400"
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
            </div>
          </button>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              activeCategory === category.id
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-6 pt-2">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-900/60 border border-primary-700/50 rounded-lg text-sm text-accent-300 font-medium hover:border-accent-500/50 hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
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
        <ul className="grid grid-cols-1 gap-4 pt-4">
          <li className="p-4 bg-primary-800/20 border border-primary-700/50 rounded-xl">
            <h4 className="text-accent-400 font-bold">Fullstack Academy of Code</h4>
            <p className="text-neutral-300 text-sm">Advanced Software Engineering Program</p>
          </li>
          <li className="p-4 bg-primary-800/20 border border-primary-700/50 rounded-xl">
            <h4 className="text-accent-400 font-bold">Adamur</h4>
            <p className="text-neutral-300 text-sm">Technical Specialization</p>
          </li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="grid grid-cols-1 gap-4 pt-4">
          <li className="p-4 bg-primary-800/20 border border-primary-700/50 rounded-xl flex items-center justify-between">
            <div>
              <h4 className="text-accent-400 font-bold">AWS Cloud Practitioner</h4>
              <p className="text-neutral-300 text-sm">Amazon Web Services</p>
            </div>
            <div className="h-2 w-2 rounded-full bg-success"></div>
          </li>
          <li className="p-4 bg-primary-800/20 border border-primary-700/50 rounded-xl flex items-center justify-between">
            <div>
              <h4 className="text-accent-400 font-bold">Google Analytics Certified</h4>
              <p className="text-neutral-300 text-sm">Google Digital Academy</p>
            </div>
            <div className="h-2 w-2 rounded-full bg-success"></div>
          </li>
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
    <section className="text-white py-12" id="about">
      <div className="md:grid md:grid-cols-2 gap-12 items-start py-8 px-4 xl:gap-24 sm:py-16 xl:px-8">
        <div className="relative group max-w-md mx-auto md:mx-0">
           <div className="absolute -inset-4 bg-primary-500/10 rounded-3xl blur-2xl group-hover:bg-primary-500/20 transition-all duration-500"></div>
           <img
            src="/images/aboutme2.png"
            alt="about-image"
            width={500}
            height={600}
            className="relative rounded-3xl shadow-2xl border border-primary-700/50 object-cover object-top w-full h-[500px] lg:h-[600px]"
          />
        </div>
        <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-5xl font-extrabold text-white mb-6 tracking-tight">
            About <span className="text-accent-400">Me</span>
          </h2>
          <p className="text-neutral-300 text-lg leading-relaxed mb-8">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with modern web technologies including <span className="text-secondary-300 font-medium">React, Node.js, Go,
            and Rust</span>, as well as blockchain development with <span className="text-accent-400 font-medium">Solidity and
            Soroban</span>. I am a quick learner and I am always looking to expand my
            knowledge and skill set. I am a team player and I am excited to work
            with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start space-x-2 border-b border-primary-700/50 mb-4">
            {TAB_DATA.map((t) => (
              <TabButton
                key={t.id}
                selectTab={() => handleTabChange(t.id)}
                active={tab === t.id}
              >
                {t.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-2 min-h-[300px]">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
