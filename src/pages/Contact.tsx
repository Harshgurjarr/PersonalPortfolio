import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xanpjdoz", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast.success("Message sent successfully 🚀");
        form.reset();
      } else {
        toast.error("Something went wrong ❌");
      }
    } catch {
      toast.error("Network error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Element name="contact">
      <section className="min-h-screen bg-transparent px-4 py-20 flex items-center justify-center">
        {/* Toast container */}
        <Toaster position="top-right" reverseOrder={false} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl w-full mx-auto bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl shadow-xl text-white"
        >
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          {/* Form with toast handling */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-white/20 p-3 rounded-lg bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-cyan-400 outline-none transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-white/20 p-3 rounded-lg bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-cyan-400 outline-none transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full border border-white/20 p-3 rounded-lg h-32 bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-cyan-400 outline-none transition"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-full shadow-lg hover:scale-105 transition transform disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-10">
            <a
              href="mailto:harshprivate0909@email.com"
              className="p-3 bg-white/10 rounded-full hover:bg-cyan-500/30 transition"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://github.com/Harshgurjarr"
              target="_blank"
              className="p-3 bg-white/10 rounded-full hover:bg-cyan-500/30 transition"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="http://linkedin.com/in/harsh-0a96b7372"
              target="_blank"
              className="p-3 bg-white/10 rounded-full hover:bg-cyan-500/30 transition"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
          </div>
        </motion.div>
      </section>
    </Element>
  );
}
