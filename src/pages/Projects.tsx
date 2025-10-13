import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  img: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "React Basic Projects",
    desc: "A modern responsive portfolio built with React, Tailwind, and Framer Motion.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    link: "https://your-portfolio-link.com",
  },
  {
    title: "E-Commerce App",
    desc: "FrontEnd e-commerce app with cart, authentication, and payments.",
    img: "/images/ecommerce.png", // Make sure this is in the public/images folder
    link: "https://github.com/Harshgurjarr/Vajrakayay-project",
  },
  {
    title: "Blog-Project",
    desc: "Weather forecast app using OpenWeather API with charts and animations.",
    img: "https://images.unsplash.com/photo-1501973801540-537f08ccae7d",
    link: "https://your-weather-app-link.com",
  },
];

export default function Projects() {
  return (
    <Element name="projects">
      <section className="min-h-screen bg-transparent px-4 py-16">
        <h2 className="text-4xl text-center text-white mb-12 font-semibold">
          Projects
        </h2>

        {/* Responsive Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="block bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/25"
            >
              {/* Image with zoom/tilt effect */}
              <div className="overflow-hidden relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 object-cover transform transition duration-500 hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white text-lg font-semibold flex items-center gap-2">
                    View Project <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-white/90 flex-grow">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </Element>
  );
}
