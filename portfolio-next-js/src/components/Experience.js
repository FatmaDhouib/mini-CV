
const experiences = [
  {
    date: "2020 — 2025",
    title: "English Teacher",
    organization: "Amine Academy — Tozeur",
    description:
      "Teaching English to primary and secondary students, developing educational materials and managing classroom activities.",
  },
  {
    date: "Current",
    title: "DevOps & Cloud Student",
    organization: "Master's Program",
    description:
      "Developing practical skills in DevOps, cloud computing, Kubernetes, CI/CD, infrastructure automation and DevSecOps.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section alternate-section">
      <div className="section-header">
        <p className="section-label">04</p>
        <h2>Experience</h2>
      </div>

      {experiences.map((experience) => (
        <article
          className="experience-item"
          key={`${experience.date}-${experience.title}`}
        >
          <div className="experience-date">{experience.date}</div>

          <div className="experience-content">
            <h3>{experience.title}</h3>
            <h4>{experience.organization}</h4>
            <p>{experience.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
