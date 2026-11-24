
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import projects from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="section project-detail">
        <div className="section-header">
          <p className="section-label">PROJECT DETAILS</p>
          <h1>{project.title}</h1>
        </div>

        <p className="page-intro">{project.description}</p>

        <h2>Project Overview</h2>
        <p>{project.details}</p>

        <h3>Technologies Used</h3>
        <p className="project-technologies">
          {project.technologies.join(" • ")}
        </p>

        <Link className="back-link" href="/projects">
          ← Back to All Projects
        </Link>
      </main>

      <Footer />
    </>
  );
}
