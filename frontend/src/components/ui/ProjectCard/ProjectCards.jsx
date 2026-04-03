import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const ProjectCard = ({ imgUrl, title, description, previewUrl }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-primary-900 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          {/* <a
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-neutral-300 hover:border-accent-400 group/link"
            title="Click to view"
          >
            <CodeBracketIcon className="h-10 w-10 text-neutral-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </a> */}
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 border-2 relative rounded-full border-neutral-300 hover:border-accent-400 group/link"
            title="Open live site"
          >
            <EyeIcon className="h-10 w-10 text-neutral-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </a>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-0 bg-primary-900/60 backdrop-blur-md border-x border-b border-primary-700/50 py-6 px-5 group-hover:bg-primary-900/80 transition-all duration-300">
        <h5 className="text-xl font-bold mb-3 text-accent-400 group-hover:text-accent-300 transition-colors duration-300 tracking-tight">
          {title}
        </h5>
        <p className={`text-neutral-300 text-sm leading-relaxed ${!showFullDescription ? 'line-clamp-2' : ''} mb-4`}>
          {description}
        </p>
        <button
            onClick={toggleDescription}
            className="text-secondary-400 hover:text-secondary-300 font-semibold text-xs tracking-wider uppercase flex items-center gap-1 group/btn"
          >
            {showFullDescription ? "Show Less" : "Read More"}
            <span className="group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
          </button>
      </div>
    </div>
  );
};

export default ProjectCard;
