"use client";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed w-full border-b border-primary-700/50 top-0 left-0 right-0 z-50 bg-primary-900/80 shadow-xl backdrop-blur-md">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-6 py-3">
        <Link
          to={"/"}
          className="group flex items-center space-x-2"
        >
          <div className="bg-accent-500 text-primary-900 w-10 h-10 flex items-center justify-center rounded-xl font-black text-xl group-hover:rotate-6 transition-transform duration-300">
            H
          </div>
          <span className="text-2xl text-white font-bold tracking-tighter">
            OMBIMA
          </span>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-primary-800 transition-all duration-300"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-primary-800 transition-all duration-300"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-10 mt-0">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <NavLink href={link.path} title={link.title} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;