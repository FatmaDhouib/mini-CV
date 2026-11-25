export const instant = false;

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProjects } from "@/lib/api";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <Header />

      <main className="section projects-page">
        <div className="section-header">
          <p className="section-label">03</p>
          <h1>My Projects</h1>
        </div>

        <p className="page-intro">
          Explore my projects in DevOps, Cloud Computing, automation,
          and DevSecOps.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <p className="project-technologies">
                <strong>Technologies:</strong>{" "}
                {project.technologies.join(", ")}
              </p>

              <Link
                className="project-link"
                href={`/projects/${project.slug}`}
              >
                View project details
              </Link>
            </article>
          ))}
        </div>

        <Link className="back-link" href="/">
          ← Back to Home
        </Link>
      </main>

      <Footer />
    </>
  );
}
