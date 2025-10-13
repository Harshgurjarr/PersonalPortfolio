// src/components/ui/Skills.tsx
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  X,
  Code,
  Braces,
  Boxes,
  Database,
  GitBranch,
  Cloud,
  Box,
  Terminal,
  Layers,
  Rocket,
  CheckCircle,
} from "lucide-react";

type Category = "Frontend" | "Backend" | "Software & DevOps";

const categories: Record<Category, string[]> = {
  Frontend: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Next.js", "Vite"],
  Backend: ["Node.js", "Express", "MongoDB", "Postgres", "Prisma", "GraphQL"],
  "Software & DevOps": ["Git", "Docker", "AWS", "CI/CD", "NGINX"],
};

// map each skill to an icon
const skillIcons: Record<string,  React.ReactNode> = {
  React: <Code className="w-4 h-4" />,
  TypeScript: <Braces className="w-4 h-4" />,
  TailwindCSS: <Layers className="w-4 h-4" />,
  "Framer Motion": <Boxes className="w-4 h-4" />,
  "Next.js": <Rocket className="w-4 h-4" />,
  Vite: <Rocket className="w-4 h-4" />,

  "Node.js": <Terminal className="w-4 h-4" />,
  Express: <Box className="w-4 h-4" />,
  MongoDB: <Database className="w-4 h-4" />,
  Postgres: <Database className="w-4 h-4" />,
  Prisma: <Layers className="w-4 h-4" />,
  GraphQL: <Braces className="w-4 h-4" />,

  Git: <GitBranch className="w-4 h-4" />,
  Docker: <Boxes className="w-4 h-4" />,
  AWS: <Cloud className="w-4 h-4" />,
  "CI/CD": <Rocket className="w-4 h-4" />,
  NGINX: <Box className="w-4 h-4" />,
};

export default function Skills() {
  const [openCategory, setOpenCategory] = useState<Category | null>(null);

  // close modal on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenCategory(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Element name="skills">
      <section className="min-h-screen bg-transparent px-4 py-16">
        <h2 className="text-4xl text-center text-white mb-12">Skills</h2>

        {/* Category Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {(Object.keys(categories) as Category[]).map((category, i) => (
            <motion.button
              type="button"
              key={category}
              onClick={() => setOpenCategory(category)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="w-full text-left bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">{category}</h3>
                <span className="text-sm text-white/80">Click to view</span>
              </div>

              <p className="mt-3 text-sm text-white/80">
                {categories[category].slice(0, 3).join(" • ")}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Modal Popup */}
        <AnimatePresence>
          {openCategory && (
            <motion.div
              key="skills-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setOpenCategory(null)}
              style={{ background: "rgba(0,0,0,0.5)" }}
            >
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={`${openCategory} skills`}
                initial={{ scale: 0.96, y: 10, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.96, y: 10, opacity: 0 }}
                transition={{ duration: 0.28 }}
                className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full max-w-md text-white shadow-xl max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{openCategory}</h3>
                    
                  </div>

                  <button
                    onClick={() => setOpenCategory(null)}
                    className="p-2 rounded-md hover:bg-white/10 transition"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-6 grid gap-3 grid-cols-1 sm:grid-cols-2">
                  {categories[openCategory].map((skill, idx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: idx * 0.06 }}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white/90 hover:scale-105 transition"
                    >
                      {skillIcons[skill] ?? (
                        <CheckCircle className="w-4 h-4" />
                      )}
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </Element>
  );
}
