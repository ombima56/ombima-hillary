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
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="contact"
      className="grid md:grid-cols-2 my-12 py-24 gap-12 relative"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-500/5 blur-[120px] -z-10 rounded-full"></div>

      <div className="z-10 flex flex-col justify-center">
        <h5 className="text-5xl font-extrabold text-white mb-6 tracking-tight">
          Let&apos;s <span className="text-accent-400">Connect</span>
        </h5>
        <p className="text-neutral-300 text-lg mb-8 max-w-md leading-relaxed">
          I&apos;m currently looking for new opportunities, and my inbox is
          always open. Whether you have a question or just want to say hi,
          I&apos;ll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-6 mt-4">
          <SocialIcon href="https://github.com/ombima56" Icon={FaGithub} />
          <SocialIcon
            href="https://linkedin.com/in/hillary-ombima"
            Icon={FaLinkedin}
          />
        </div>
      </div>
      <div className="bg-primary-900/40 backdrop-blur-md border border-primary-700/50 p-8 rounded-2xl shadow-2xl">
        {emailSubmitted ? (
          <div className="text-center py-12 flex flex-col items-center">
            <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center mb-4">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <p className="text-xl font-bold text-white mb-2">Message Sent!</p>
            <p className="text-neutral-300 text-sm">
              Thank you for reaching out. I'll get back to you shortly.
            </p>
          </div>
        ) : (
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-semibold tracking-wide"
              >
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                disabled={isLoading}
                className="bg-primary-900/60 border border-primary-700 placeholder-neutral-500 text-white text-sm rounded-xl block w-full p-3.5 focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 outline-none transition-all duration-300"
                placeholder="human@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-semibold tracking-wide"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                disabled={isLoading}
                className="bg-primary-900/60 border border-primary-700 placeholder-neutral-500 text-white text-sm rounded-xl block w-full p-3.5 focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 outline-none transition-all duration-300"
                placeholder="Just saying hi"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-semibold tracking-wide"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                disabled={isLoading}
                className="bg-primary-900/60 border border-primary-700 placeholder-neutral-500 text-white text-sm rounded-xl block w-full p-3.5 focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 outline-none transition-all duration-300 resize-none"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`font-bold py-4 px-5 rounded-xl w-full transition-all duration-300 shadow-lg ${
                isLoading
                  ? "bg-neutral-700 cursor-not-allowed"
                  : "bg-primary-600 hover:bg-primary-500 text-white shadow-primary-900/20 hover:-translate-y-1 active:translate-y-0"
              }`}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
            {error && (
              <p className="text-error text-sm mt-2 p-4 rounded-xl bg-error/10 border border-error/20 text-center">
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