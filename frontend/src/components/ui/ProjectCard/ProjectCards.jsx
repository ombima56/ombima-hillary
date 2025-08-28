import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
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
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-neutral-300 hover:border-accent-400 group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-neutral-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-neutral-300 hover:border-accent-400 group/link"
          >
            <EyeIcon className="h-10 w-10 text-neutral-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-primary-900 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2 text-transparent bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text">{title}</h5>
        <p className={`text-tertiary ${!showFullDescription ? 'line-clamp-2' : ''}`}>
          {description}
        </p>
        <button
            onClick={toggleDescription}
            className="text-accent-400 hover:underline mt-2"
          >
            {showFullDescription ? "Show Less" : "Read More"}
          </button>
      </div>
    </div>
  );
};

export default ProjectCard;
