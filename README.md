# DevSecOps Portfolio — Activity 1: Foundation and Initial Automation

**Repository:** [FatmaDhouib/mini-CV](https://github.com/FatmaDhouib/mini-CV)

## 1. Project Overview

This project develops a personal CV into a DevSecOps portfolio and establishes the initial infrastructure for a DevOps lab.

Activity 1 covers:

1. Ubuntu Server installation and remote administration through SSH.
2. Docker and Jenkins installation and verification.
3. Development of a personal portfolio using HTML5, CSS3, and JavaScript.
4. Dynamic generation of portfolio project cards.
5. Docker image creation and container deployment using Docker Compose.
6. Git and GitHub integration through SSH authentication.
7. Initial investigation of infrastructure automation using Vagrant.

## 2. Lab Environment

The lab runs on an Ubuntu virtual machine hosted by Microsoft Hyper-V.

| Component | Configuration |
|---|---|
| Physical host | Windows 11 |
| Virtualization platform | Microsoft Hyper-V |
| Guest operating system | Ubuntu 26.04 LTS |
| VM hostname | `ubuntu26` |
| Linux username | `fatma` |
| CPU | 4 vCPUs |
| Memory | 3.3 GiB |
| Root filesystem | 61 GB |
| Network | Hyper-V Default Switch |
| Guest IP at verification | `172.20.119.212` |
| Java | OpenJDK 21 |
| Container runtime | Docker Engine 29.9.2 |
| Container orchestration | Docker Compose 5.6.1 |
| CI/CD server | Jenkins 2.580.1 |
| Web server | Nginx Alpine |
| Version control | Git and GitHub |

The VM IP address is assigned by the Hyper-V Default Switch and may change after a restart.

Useful system inspection commands:

    cat /etc/os-release
    hostname
    whoami
    free -h
    nproc
    df -h /
    ip -brief address

## 3. SSH Remote Administration

The SSH service is installed and running on the Ubuntu VM.

Verify the service:

    sudo systemctl status ssh
    sudo ss -lntp | grep ':22'
    hostname -I

From the Windows host, connect using:

    ssh fatma@172.20.119.212

SSH connectivity and interactive login were verified from the physical host.

## 4. Jenkins Installation

Jenkins is installed as a system service on the Ubuntu VM.

Verify its status:

    sudo systemctl status jenkins

Check the Jenkins HTTP endpoint:

    curl -I http://localhost:8080/login

Jenkins was verified as active, and the login endpoint returned HTTP 200.

From the Windows host, open:

    http://172.20.119.212:8080

## 5. Portfolio Application

The portfolio is a one-page website built with:

- HTML5 for page structure.
- CSS3 for layout and visual presentation.
- JavaScript for interactive and dynamically generated content.

The portfolio contains the following sections:

| Section | Purpose |
|---|---|
| About | Professional introduction |
| Skills | Technical skills and tools |
| Projects | Portfolio project collection |
| Experience | Professional experience |
| Contact | Contact information |

The technical skills section includes:

- Git
- Docker
- Jenkins
- Kubernetes
- Ansible
- Terraform
- Argo CD

The Projects section uses a JavaScript object array to generate project cards dynamically.

## 6. Docker Image and Container Deployment

The portfolio is packaged using an Nginx Alpine image.

### Dockerfile

    FROM nginx:alpine

    COPY index.html /usr/share/nginx/html/index.html
    COPY style.css /usr/share/nginx/html/style.css
    COPY script.js /usr/share/nginx/html/script.js

    EXPOSE 80

Build the image:

    docker build -t cv-docker .

### Docker Compose

The application is configured in `docker-compose.yml`:

    services:
      cv:
        image: cv-docker
        container_name: cv-container
        ports:
          - "8000:80"
        restart: unless-stopped

Start the application:

    docker compose up -d

Verify the running container:

    docker ps
    docker images cv-docker

Verify the HTTP response:

    curl -I http://localhost:8000

The container was running and returned HTTP 200.

From the Windows host, access the portfolio at:

    http://172.20.119.212:8000

## 7. Git and GitHub Integration

The project is maintained in the GitHub repository:

[https://github.com/FatmaDhouib/mini-CV](https://github.com/FatmaDhouib/mini-CV)

The local repository uses the SSH remote:

    git@github.com:FatmaDhouib/mini-CV.git

GitHub SSH authentication was verified using:

    ssh -T git@github.com

Expected successful authentication message:

    Hi FatmaDhouib! You've successfully authenticated, but GitHub does not provide shell access.

Useful Git commands:

    git status
    git branch
    git remote -v
    git log --oneline -5

## 8. Repository Structure

The main files and directories used in this activity include:

    mini-CV/
    ├── index.html
    ├── style.css
    ├── script.js
    ├── Dockerfile
    ├── docker-compose.yml
    ├── Vagrantfile
    ├── .gitignore
    └── README.md

Generated dependencies, environment files, logs, and Vagrant state are excluded through `.gitignore`.

## 9. Vagrant Infrastructure Automation

The activity introduces Vagrant as a tool for defining and provisioning virtual machines through code.

The repository contains a `Vagrantfile` that defines an Ubuntu virtual machine with:

- VM name: `vagrant-ubuntu-lab`
- Hostname: `vagrant-ubuntu-lab`
- Private IP: `192.168.56.10`
- Memory: 2048 MB
- CPUs: 2
- Provider: VirtualBox

The current lab runs Ubuntu inside Hyper-V. Nested virtualization extensions are not exposed to this guest, so VirtualBox-based VM creation cannot currently be assumed to work.

Consequently, successful Vagrant provisioning, SSH access to the Vagrant-managed VM, and comparison with the manually created VM remain pending verification.

## 10. Verification Summary

| Requirement | Result |
|---|---|
| Ubuntu VM available | Verified |
| SSH service active | Verified |
| SSH connection from Windows host | Verified |
| Docker installed | Verified |
| Jenkins service active | Verified |
| Jenkins accessible from Windows host | Verified |
| Portfolio sections implemented | Verified |
| Dynamic project cards implemented | Verified |
| Docker image built | Verified |
| Docker container running | Verified |
| Portfolio accessible from Windows host | Verified |
| GitHub SSH authentication | Verified |
| Vagrant VM provisioning | Pending verification |

## 11. Useful Application URLs

| Application | URL |
|---|---|
| Portfolio | `http://172.20.119.212:8000` |
| Jenkins | `http://172.20.119.212:8080` |

Replace the IP address if the Hyper-V Default Switch assigns a different address after a restart.

---

**Activity:** 1 — Foundation and Initial Automation

**Project:** DevSecOps Portfolio

**Version control:** Git and GitHub

# Activity 2 — Next.js and Jenkins CI

## 12. Activity Overview

Activity 2 extends the original DevSecOps portfolio by introducing a Next.js implementation and a Jenkins continuous integration pipeline.

The objectives are:

- Rebuild the portfolio using Next.js and React.
- Organize the interface into reusable components.
- Separate project and skill information from presentation logic.
- Implement dedicated project listing and detail routes.
- Automate source checkout, dependency installation, and production builds with Jenkins.

## 13. Next.js Application

The Next.js application is located in:

    portfolio-next-js/

Technology stack:

| Technology | Version |
|---|---|
| Next.js | 16.4.6 |
| React | 19.3.0 |
| Node.js | 22.22.1 |
| npm | 9.2.0 |
| ESLint | 9.x |

The application uses the Next.js App Router and JavaScript.

## 14. Component Architecture

The interface is organized into reusable components.

| Component | Responsibility |
|---|---|
| Header | Navigation and branding |
| About | Professional introduction |
| Skills | Technical skills |
| Projects | Dynamic project cards |
| Experience | Professional experience |
| Contact | Contact information |
| Footer | Page footer |

Source location:

    portfolio-next-js/src/components/

The main page composes these components to build the portfolio interface.

## 15. Data Separation

Project and skill information is maintained in separate files.

    portfolio-next-js/src/data/
    ├── projects.js
    └── skills.js

The project data uses JavaScript objects containing a slug, title, description, technologies, and extended details.

The Projects component imports the project data and generates project cards dynamically.

This approach separates application data from presentation logic and simplifies future updates.

## 16. Project Routing

The application implements dedicated project routes using the Next.js App Router.

| Route | Purpose |
|---|---|
| `/` | Portfolio homepage |
| `/projects` | Complete project listing |
| `/projects/[slug]` | Individual project details |

The project detail page uses `generateStaticParams()` to generate pages for known project slugs.

Unknown slugs are handled using `notFound()`.

The following routes were tested against the production server:

| Test | HTTP status |
|---|---:|
| Homepage | 200 |
| Project listing | 200 |
| Kubernetes Cluster Deployment | 200 |
| Task Manager Application | 200 |
| Jenkins CI/CD Pipeline | 200 |
| DevSecOps Portfolio | 200 |
| Invalid project slug | 404 |

## 17. Jenkins Continuous Integration Pipeline

A declarative Jenkins pipeline is defined in the repository root:

    Jenkinsfile

The pipeline consists of three stages.

### Stage 1 — Checkout

The `checkout scm` step retrieves the source code from the repository and branch configured in the Jenkins job.

### Stage 2 — Install Dependencies

Jenkins enters the Next.js application directory:

    portfolio-next-js/

It executes:

    npm ci

This installs the dependencies specified by `package-lock.json`.

### Stage 3 — Build Next.js Application

Jenkins executes:

    npm run build

This creates the optimized production build and validates the Next.js application.

### Pipeline requirements

The Jenkins service account must have access to:

- Git.
- Node.js.
- npm.
- The GitHub repository.

The pipeline uses the system Node.js and npm executables available under `/usr/bin`.

The Jenkins job `mini-cv-activity-02` was configured to retrieve the `activity-02-nextjs-jenkins` branch from GitHub. The pipeline executed successfully: Checkout, Install Dependencies (`npm ci`), and Build Next.js Application (`npm run build`). Final Jenkins result: SUCCESS.

## 18. Local Validation

The following application checks have been completed:

| Validation | Result |
|---|---|
| Dependency installation | Completed |
| ESLint | Passed |
| Production build | Passed |
| Homepage and project listing | Passed |
| Four project detail routes | Passed |
| Invalid project route | Passed with HTTP 404 |
| Production server shutdown | Verified |

## 19. Running the Next.js Application

From the repository root:

    cd portfolio-next-js

Install dependencies:

    npm ci

Run the development server:

    npm run dev

Run linting:

    npm run lint

Build the application:

    npm run build

Start the production server:

    npm run start

The application is available locally at:

    http://localhost:3000

---

**Activity:** 2 — Next.js and Jenkins
**Project:** DevSecOps Portfolio
**Framework:** Next.js and React
**CI/CD:** Jenkins
