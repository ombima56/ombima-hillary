import { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, previewUrl, tags = [] }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group"
      role="article"
      aria-label={`Project: ${title}`}
    >
      <div className="h-52 md:h-72 rounded-t-xl relative overflow-hidden bg-primary-800">
        {/* Skeleton loader */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 animate-pulse" />
        )}

        <img
          src={imgUrl}
          alt={`${title} project screenshot`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary-900 via-primary-900/50 to-transparent opacity-0 group-hover:opacity-100 flex transition-all duration-500 backdrop-blur-sm">
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
            className="h-14 w-14 border-2 relative rounded-full border-neutral-300 hover:border-accent-400 group/link focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-primary-900"
            aria-label={`View ${title} live demo`}
          >
            <EyeIcon className="h-10 w-10 text-neutral-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className={`text-white rounded-b-xl bg-primary-
      900/60 backdrop-blur-md border border-primary-700/50 py-6 px-4 shadow-lg flex flex-col transition-all duration-300 ${
        showFullDescription ? 'h-auto' : 'h-[280px]'
      }`}>
        <h5 className="text-xl font-semibold mb-3 text-transparent bg-gradient-to-r from-secondary-400 via-accent-400 to-primary-400 bg-clip-text truncate">
          {title}
        </h5>

        {/* Tech Stack Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3 min-h-[32px]">
            {tags.slice(0, 4).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-accent-500/20 text-accent-300 rounded-full border border-accent-500/30 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
            {tags.length > 4 && (
              <span className="px-3 py-1 text-xs font-medium bg-accent-500/20 text-accent-300 rounded-full border border-accent-500/30 backdrop-blur-sm">
                +{tags.length - 4}
              </span>
            )}
          </div>
        )}

        <p className={`text-neutral-300 text-sm leading-relaxed ${
          showFullDescription ? '' : 'line-clamp-3'
        } flex-grow mb-3`}>
          {description}
        </p>

        <button
          onClick={toggleDescription}
          className="text-accent-400 hover:text-accent-300 hover:underline text-sm font-medium transition-colors self-start mt-auto focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-primary-900 rounded px-2 py-1"
          aria-expanded={showFullDescription}
          aria-label={showFullDescription ? "Show less description" : "Show more description"}
        >
          {showFullDescription ? "Show Less" : "View More"}
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
