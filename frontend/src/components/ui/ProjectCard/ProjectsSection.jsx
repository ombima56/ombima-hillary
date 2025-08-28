"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCards";
import ProjectTag from "./ProjectTag.jsx";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "movie-scout-app",
    description:
      "A comprehensive entertainment discovery web app where users can search for movies and TV shows, explore detailed information (cast, plot, ratings), manage personal watchlists, and discover trending content across genres. Built using React and powered by TMDB and OMDB APIs. ",
    image: "/images/projects/project1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://movie-scout-app.vercel.app/",
  },
  {
    id: 2,
    title: "Zyra",
    description: "Zyra is a next-generation social-finance platform that lets users seamlessly connect, chat, and transact, all in one place. ",
    image: "/images/projects/project2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://zyra-mu.vercel.app/",
  },
  {
    id: 3,
    title: "TransparaChain",
    description: " TransparaChain is a blockchain-based charity platform that eliminates intermediary fees and ensures full transparency. Built on smart contract technology, it accepts USDC donations and gives donors clear visibility into how their contributions are used. ",
    image: "/images/projects/project3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://transpacharity-zeta.vercel.app/",
  },
  // {
  //   id: 4,
  //   title: "Food Ordering Application",
  //   description: "Project 4 description",
  //   image: "/images/projects/p4.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/p1.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/p2.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl text-primary-500 font-bold text-primary mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
