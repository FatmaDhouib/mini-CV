// ================================
// DevSecOps Portfolio Projects
// ================================

const projects = [
    {
        title: "Kubernetes Cluster Deployment",
        description:
            "Automated deployment of a Kubernetes cluster using Vagrant and Ansible.",
        technologies:
            "Kubernetes, Vagrant, Ansible"
    },
    {
        title: "Task Manager Application",
        description:
            "Containerized task management application deployed using Docker and Kubernetes.",
        technologies:
            "Docker, Kubernetes, PostgreSQL"
    },
    {
        title: "CI/CD Pipeline with Jenkins",
        description:
            "Automated application build and deployment workflow using Jenkins and Git.",
        technologies:
            "Git, Jenkins, Docker"
    },
    {
        title: "DevSecOps Portfolio",
        description:
            "A secure and automated portfolio demonstrating DevOps and DevSecOps technologies.",
        technologies:
            "Git, Docker, Jenkins, Kubernetes"
    }
];


// ================================
// Generate Projects
// ================================

const projectsContainer =
    document.getElementById("projects-container");

projects.forEach((project) => {

    const projectCard = document.createElement("article");

    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
        <h3>${project.title}</h3>

        <p>
            ${project.description}
        </p>

        <p class="project-technologies">
            <strong>Technologies:</strong>
            ${project.technologies}
        </p>
    `;

    projectsContainer.appendChild(projectCard);
});


// ================================
// Portfolio Loaded
// ================================

console.log(
    `${projects.length} projects loaded dynamically.`
);
