import React from "react";

const NavLink = ({ href, title }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById(href.substring(1));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="block py-2 pl-3 pr-4 text-secondary-500 sm:text-xl rounded md:-p-0 hover:text-white transition-colors duration-300"
    >
      {title}
    </a>
  );
};

export default NavLink;
