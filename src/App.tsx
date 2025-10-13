import Layout from "@/components/ui/Layout";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import Contact from "@/pages/Contact";

export default function App() {
  return (
    <Layout>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
}
