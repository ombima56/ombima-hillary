"use client";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function GitHubStats({ username = "ombima56" }) {
  return (
    <section id="github-stats" className="py-16">
      <h2 className="text-center text-4xl font-bold text-white mb-12">
        GitHub <span className="text-transparent bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text">Activity</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary-900/60 backdrop-blur-md border border-primary-700/50 rounded-xl p-4 shadow-lg"
        >
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=1e3a5f00&title_color=5fb3b3&text_color=e2e8f0&icon_color=4a9aca`}
            alt="GitHub Stats"
            className="w-full"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary-900/60 backdrop-blur-md border border-primary-700/50 rounded-xl p-4 shadow-lg"
        >
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=1e3a5f00&title_color=5fb3b3&text_color=e2e8f0`}
            alt="Top Languages"
            className="w-full"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-2 bg-primary-900/60 backdrop-blur-md border border-primary-700/50 rounded-xl p-4 shadow-lg"
        >
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=1e3a5f00&ring=5fb3b3&fire=4a9aca&currStreakLabel=e2e8f0`}
            alt="GitHub Streak"
            className="w-full"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
