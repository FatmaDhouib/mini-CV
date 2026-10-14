
import Link from "next/link";
import projects from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <p className="section-label">03</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.slug}>
            <h3>{project.title}</h3>

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

      <div className="projects-more">
        <Link className="btn secondary-btn" href="/projects">
          View all projects
        </Link>
      </div>
    </section>
  );
}
