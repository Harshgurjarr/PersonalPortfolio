// src/components/ui/About.tsx

import { Element } from "react-scroll";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Element name="about">
      <section className="min-h-screen flex items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-lg text-white/90 leading-relaxed">
            Hi, I’m <span className="text-cyan-300 font-semibold">Harsh</span>, a passionate
            full-stack developer who enjoys building beautiful, performant, and
            user-friendly web applications. I specialize in{" "}
            <span className="text-cyan-700">React, TypeScript, Node.js</span>,
            and modern web technologies. My focus is on creating elegant designs
            and smooth user experiences that leave a lasting impact.
          </p>
        </motion.div>
      </section>
    </Element>
  );
}
