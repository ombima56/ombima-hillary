import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  // Define social media links
  // const socialLinks = [
  //   {
  //     id: 1,
  //     name: "GitHub",
  //     href: "https://github.com/ombima56", // Replace with your GitHub URL
  //     icon: FaGithub,
  //   },
  //   {
  //     id: 2,
  //     name: "LinkedIn",
  //     href: "https://linkedin.com/in/hillary-ombima", // Replace with your LinkedIn URL
  //     icon: FaLinkedin,
  //   },
  //   {
  //     id: 3,
  //     name: "Twitter",
  //     href: "https://twitter.com/your-username", // Replace with your Twitter URL
  //     icon: FaTwitter,
  //   },
  // ];

  return (
    <footer className="footer border-t border-t-tertiary-700 bg-primary-900 text-white">
      <div className="container mx-auto p-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: Branding */}
        <div className="flex items-center mb-4 md:mb-0">
          <span className="text-4xl font-bold text-accent-500 mr-2">HO</span>
          <p className="text-sm text-secondary-500">
            A portfolio by Hillary Ombima.
          </p>
        </div>

        {/* Center Section: Social Icons
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <p className="text-sm text-secondary-500 mb-2">Let&apos;s Connect!</p>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.name} Profile`}
                className="text-secondary-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </div> */}

        {/* Right Section: Copyright */}
        <div className="text-center md:text-right">
          <p className="text-sm text-secondary-500">
            © {new Date().getFullYear()} HO. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
