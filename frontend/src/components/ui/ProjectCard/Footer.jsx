import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      name: "GitHub",
      href: "https://github.com/ombima56",
      icon: FaGithub,
    },
    {
      id: 2,
      name: "LinkedIn",
      href: "https://linkedin.com/in/hillary-ombima",
      icon: FaLinkedin,
    },
  ];

  return (
    <footer className="w-full border-t border-primary-700/50 bg-primary-900/40 backdrop-blur-sm text-white mt-12">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section: Branding */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center space-x-2">
            <div className="bg-accent-500 text-primary-900 w-8 h-8 flex items-center justify-center rounded-lg font-black text-sm">
              H
            </div>
            <span className="text-xl text-white font-bold tracking-tighter uppercase">
              Ombima
            </span>
          </div>
          <p className="text-neutral-400 text-sm max-w-xs text-center md:text-left leading-relaxed">
            Building the future of the web with precision, creativity, and modern technology.
          </p>
        </div>

        {/* Center Section: Socials */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.name} Profile`}
                className="text-neutral-400 hover:text-accent-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                <link.icon size={28} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section: Copyright */}
        <div className="flex flex-col items-center md:items-end space-y-2">
           <p className="text-sm font-medium text-neutral-300">
            © {new Date().getFullYear()} Hillary Ombima
          </p>
          <p className="text-xs text-neutral-500">
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
