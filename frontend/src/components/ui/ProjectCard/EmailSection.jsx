"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Component for social icons with enhanced hover effect
// eslint-disable-next-line no-unused-vars
const SocialIcon = ({ href, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-secondary-500 hover:text-white hover:scale-110 transition-transform duration-300"
  >
    <Icon size={30} />
  </a>
);

const EmailSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Manual client-side validation for an added layer of security and UX
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    if (!email || !subject || !message) {
      setError("All fields are required.");
      setIsLoading(false);
      return;
    }

    const data = { email, subject, message };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      console.log("Message sent successfully!");
      setEmailSubmitted(true);
      e.target.reset(); // Clear form fields
    } catch (err) {
      console.error("Submission error:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const MotionSection = motion.section;

  return (
    <MotionSection
      ref={ref}
      initial={{ opacity: 0, y: -100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-8 relative"
    >
      <div className="z-10">
        <h5 className="text-4xl font-bold text-white mb-2">
          Let&apos;s Connect
        </h5>
        <p className="text-secondary-50 mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, and my inbox is
          always open. Whether you have a question or just want to say hi,
          I&apos;ll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-4 mt-8">
          <SocialIcon href="https://github.com/ombima56" Icon={FaGithub} />
          <SocialIcon
            href="https://linkedin.com/in/hillary-ombima"
            Icon={FaLinkedin}
          />
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <div className="text-center md:text-left p-6 rounded-lg bg-green-500 text-white">
            <p className="text-lg font-semibold">
              Thank you for your message! I'll get back to you as soon as
              possible.
            </p>
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="text-white block mb-1 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                disabled={isLoading}
                className="bg-primary-800 border border-primary-600 placeholder-text-muted text-white text-sm rounded-lg block w-full p-2.5 focus:ring-accent-500 focus:border-accent-500"
                placeholder="human@google.com"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-1 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                disabled={isLoading}
                className="bg-primary-800 border border-primary-600 placeholder-text-muted text-white text-sm rounded-lg block w-full p-2.5 focus:ring-accent-500 focus:border-accent-500"
                placeholder="Just saying hi"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-white block text-sm mb-1 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                disabled={isLoading}
                className="bg-primary-800 border border-primary-600 placeholder-text-muted text-white text-sm rounded-lg block w-full p-2.5 focus:ring-accent-500 focus:border-accent-500"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`font-medium py-2.5 px-5 rounded-lg w-full transition-colors duration-300 ${
                isLoading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-secondary-600 hover:bg-secondary-700 text-white"
              }`}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
            {error && (
              <p className="text-red-500 text-sm mt-2 p-3 rounded-md bg-red-100 bg-opacity-10 text-center">
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </MotionSection>
  );
};

export default EmailSection;