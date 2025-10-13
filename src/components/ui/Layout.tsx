// src/components/ui/Layout.tsx

import { ReactNode } from "react";
import { Link, Element } from "react-scroll";
import { motion } from "framer-motion";
import { Warp } from "@paper-design/shaders-react";

const navItems = [
  { display: "Home", target: "hero" },
  { display: "About", target: "about" },
  { display: "Projects", target: "projects" },
  { display: "Skills", target: "skills" },
  { display: "Contact", target: "contact" },
] as const;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Fixed shader background */}
      <Warp
        className="fixed top-0 left-0 w-screen h-screen -z-10"
        proportion={0.45}
        softness={1}
        distortion={0.25}
        swirl={0.8}
        swirlIterations={10}
        shape="checks"
        shapeScale={0.1}
        scale={1}
        rotation={0}
        speed={1}
        colors={[
          "hsl(200, 100%, 20%)",
          "hsl(160, 100%, 75%)",
          "hsl(180, 90%, 30%)",
          "hsl(170, 100%, 80%)",
        ]}
      />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col">
        {/* Glassmorphic Navbar - Centered & Responsive */}
     <nav className="fixed top-4 left-0 w-full flex justify-center z-20 px-4">
  <div className="flex flex-wrap justify-center gap-3 sm:gap-5 max-w-full bg-white/20 backdrop-blur-xl px-5 py-3 rounded-full border border-white/30 shadow-lg">
    {navItems.map((item) => (
      <Link
        key={item.target}
        to={item.target}
        smooth
        duration={500}
        className="
          relative
          px-5 py-2.5
          text-cyan-100 text-base font-semibold
          bg-black/20 backdrop-blur-md
          border border-white/50
          rounded-full
          shadow-md
          transition duration-300
          hover:bg-black/10 hover:scale-105
          cursor-pointer
        "
      >
        {item.display}
      </Link>
    ))}
  </div>
</nav>


        {/* Hero Section */}
        <Element name="hero" className="min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1
              className="
                text-5xl md:text-7xl font-extrabold mb-4 
                bg-gradient-to-r from-cyan-700 via-blue-800 to-purple-200 
                bg-clip-text text-transparent 
                animate-gradient bg-[length:200%_200%]
              "
            >
              Harsh
            </h1>

            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-cyan-100 drop-shadow-md">
              Full-stack Developer crafting sleek, performant web experiences with React, TypeScript, and Node.js.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="projects"
                smooth
                duration={500}
                className="px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-cyan-50 hover:bg-white/30 transition transform hover:scale-105 drop-shadow-md cursor-pointer"
              >
                View Projects
              </Link>
              <Link
                to="contact"
                smooth
                duration={500}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full hover:scale-105 transition transform drop-shadow-md cursor-pointer"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </Element>

        {/* Main content sections */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="text-cyan-100 text-center py-4 bg-transparent drop-shadow-md">
          © {new Date().getFullYear()} Harsh
        </footer>
      </div>
    </div>
  );
}
