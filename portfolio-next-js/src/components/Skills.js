import { getSkills } from "@/lib/api";

export default async function Skills() {
  const skills = await getSkills();

  return (
    <section id="skills" className="section alternate-section">
      <div className="section-header">
        <p className="section-label">02</p>
        <h2>DevSecOps Skills</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.name}>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
