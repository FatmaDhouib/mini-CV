
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="hero-greeting">Hello, I&apos;m</p>

            <h1>
              Fatma <span>Dhouib</span>
            </h1>

            <h2>DevSecOps &amp; Cloud Computing Student</h2>

            <p className="hero-description">
              Building reliable infrastructure, automating workflows, and
              exploring secure cloud-native technologies.
            </p>

            <div className="hero-actions">
              <a className="btn primary-btn" href="#projects">
                Explore My Projects
              </a>

              <a className="btn secondary-btn" href="#contact">
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
