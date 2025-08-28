"use client";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const EmailSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: -100 }}
      animate={isInView ? { opacity: 1, y: 0 } : "initial"}
      transition={{ duration: 0.5 }}
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 "
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-secondary mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          {/* Social icons can go here */}
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-accent-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
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
                className="bg-primary-800 border border-primary-600 placeholder-text-muted text-secondary text-sm rounded-lg block w-full p-2.5 focus:ring-accent-500 focus:border-accent-500"
                placeholder="human@google.com"
              />
            </div>
            <div className="mb-6">
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
                className="bg-primary-800 border border-primary-600 placeholder-text-muted text-secondary text-sm rounded-lg block w-full p-2.5 focus:ring-accent-500 focus:border-accent-500"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-1 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-primary-800 border border-primary-600 placeholder-text-muted text-secondary text-sm rounded-lg block w-full p-2.5 focus:ring-accent-500 focus:border-accent-500"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-secondary-600 hover:bg-secondary-700 text-white font-medium py-2.5 px-5 rounded-lg w-full transition-colors duration-300"
            >
              Send Message
            </button>
            {emailSubmitted && (
              <p className="text-accent-500 text-sm mt-2">
                Email sent successfully!
              </p>
            )}
          </form>
        )}
      </div>
    </motion.section>
  );
};

export default EmailSection;
