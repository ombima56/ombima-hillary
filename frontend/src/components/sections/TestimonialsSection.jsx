"use client";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, TechCorp",
    image: "/images/testimonials/person1.jpg",
    content: "Hillary is an exceptional developer who delivered our blockchain project ahead of schedule. His expertise in Solidity and smart contracts is outstanding.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO, StartupXYZ",
    image: "/images/testimonials/person2.jpg",
    content: "Working with Hillary was a pleasure. He built a robust full-stack application that exceeded our expectations. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Product Manager, WebSolutions",
    image: "/images/testimonials/person3.jpg",
    content: "Hillary's attention to detail and problem-solving skills are remarkable. He transformed our vision into a beautiful, functional web app.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16">
      <h2 className="text-center text-4xl font-bold text-white mb-4">
        What <span className="text-transparent bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text">Clients Say</span>
      </h2>
      <p className="text-center text-neutral-300 mb-12 max-w-2xl mx-auto">
        Don't just take my word for it - hear from some of the clients I've worked with
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-primary-900/60 backdrop-blur-md border border-primary-700/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-accent-400" />
              ))}
            </div>

            <p className="text-neutral-300 mb-6 italic leading-relaxed">
              "{testimonial.content}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-500 to-primary-600 flex items-center justify-center text-white font-bold">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-neutral-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
