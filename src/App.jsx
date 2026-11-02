import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Toolkit from "./components/Toolkit";
import Education from "./components/Education";
import Contact from "./components/Contact";
export default function App() {
  return (
    <>
      <Header />
      <main className="wrap">
        <Hero />
        <Projects />
        <Experience />
        <Toolkit />
        <Education />
        <Contact />
      </main>
    </>
  );
}
