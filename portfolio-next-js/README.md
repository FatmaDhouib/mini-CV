# DevSecOps Portfolio — Next.js Application

## 1. Overview

This directory contains the Next.js version of the DevSecOps portfolio.

The application uses Next.js, React, and reusable components to present professional information, technical skills, experience, and DevOps projects.

It also provides dedicated routes for browsing all projects and viewing individual project details.

## 2. Technology Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework and routing |
| React 19 | Component-based user interface |
| JavaScript | Application development |
| ESLint 9 | Code quality and linting |
| npm | Dependency management |

## 3. Project Structure

    portfolio-next-js/
    ├── public/
    ├── src/
    │   ├── app/
    │   │   ├── projects/
    │   │   │   ├── [slug]/
    │   │   │   │   └── page.js
    │   │   │   └── page.js
    │   │   ├── globals.css
    │   │   ├── layout.js
    │   │   └── page.js
    │   ├── components/
    │   │   ├── About.js
    │   │   ├── Contact.js
    │   │   ├── Experience.js
    │   │   ├── Footer.js
    │   │   ├── Header.js
    │   │   ├── Projects.js
    │   │   └── Skills.js
    │   └── data/
    │       ├── projects.js
    │       └── skills.js
    ├── package.json
    ├── package-lock.json
    └── README.md

## 4. Reusable Components

The application separates the interface into reusable components:

- Header: navigation and portfolio branding.
- About: professional introduction.
- Skills: technical skills presentation.
- Projects: project cards and links to project details.
- Experience: professional experience.
- Contact: contact information.
- Footer: page footer.

The main application page imports and composes these components.

## 5. Data Management

Project and skill information is maintained separately from the presentation components.

### Project data

File: `src/data/projects.js`

Each project is represented by an object containing:

- slug: unique URL identifier.
- title: project name.
- description: short project summary.
- technologies: technologies used.
- details: extended project description.

Example:

    {
      slug: "task-manager",
      title: "Task Manager Application",
      description: "Containerized task management application.",
      technologies: ["Docker", "Kubernetes", "PostgreSQL"],
      details: "A project demonstrating containerized deployment."
    }

The Projects component imports this data and generates project cards dynamically.

### Skills data

File: `src/data/skills.js`

The skills information is maintained in a separate JavaScript data file and consumed by the Skills component.

This separation makes it easier to update portfolio information without changing the component structure.

## 6. Application Routes

The application uses the Next.js App Router.

| Route | Description |
|---|---|
| `/` | Main portfolio |
| `/projects` | Complete project listing |
| `/projects/kubernetes-cluster-deployment` | Kubernetes project details |
| `/projects/task-manager` | Task Manager project details |
| `/projects/jenkins-cicd-pipeline` | Jenkins project details |
| `/projects/devsecops-portfolio` | DevSecOps portfolio details |

The dynamic route `src/app/projects/[slug]/page.js` retrieves the matching project from the centralized project data.

Unknown project slugs use Next.js `notFound()` to display the not-found page.

The `generateStaticParams()` function provides the project slugs for static generation.

## 7. Installation

Requirements:

- Node.js 22 or compatible version.
- npm.
- Git.

Install dependencies from this directory:

    npm ci

## 8. Development

Start the development server:

    npm run dev

Open:

    http://localhost:3000

## 9. Code Quality and Production Build

Run ESLint:

    npm run lint

Create an optimized production build:

    npm run build

Start the production server:

    npm run start

## 10. Jenkins Continuous Integration

The repository root contains a `Jenkinsfile` defining the Next.js CI pipeline.

The pipeline includes:

1. Checkout: retrieve source code from GitHub.
2. Install Dependencies: execute `npm ci` inside `portfolio-next-js`.
3. Build Next.js Application: execute `npm run build`.

The pipeline uses the committed `package-lock.json` to install reproducible dependencies.

Jenkins execution results will be documented after the pipeline has been configured and tested.

## 11. Validation

The following local validations have been completed:

| Validation | Result |
|---|---|
| npm dependency installation | Completed |
| ESLint | Passed |
| Next.js production build | Passed |
| Homepage HTTP response | 200 |
| Project listing HTTP response | 200 |
| Four project detail pages | 200 |
| Invalid project URL | 404 |

---

**Application:** DevSecOps Portfolio
**Framework:** Next.js
**Activity:** 2 — Next.js and Jenkins
