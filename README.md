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
