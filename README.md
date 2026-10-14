# DevSecOps Portfolio — DevOps Lab

**GitHub Repository:** [FatmaDhouib/mini-CV](https://github.com/FatmaDhouib/mini-CV)

## 1. Project Overview

This project documents the evolution of a one-page CV into a DevSecOps Portfolio and the setup of a DevOps lab using Ubuntu Server, SSH, Docker, Jenkins, Git, GitHub, and Vagrant.

The project covers four phases:

1. Initial setup of Ubuntu Server, secure remote access, Docker, and Jenkins.
2. Development of a DevSecOps Portfolio using HTML5, CSS3, and JavaScript.
3. Containerization and deployment of the portfolio using Docker and Docker Compose.
4. Introduction to infrastructure automation using Vagrant.

## 2. Lab Environment

| Component | Specification |
|---|---|
| Host operating system | Windows |
| Virtual machine operating system | Ubuntu Server 26.04 |
| Memory | 8 GB RAM |
| CPU | 4 vCPUs |
| Disk | 50 GB |
| Remote access | OpenSSH |
| CI/CD server | Jenkins |
| Container runtime | Docker Engine |
| Web server | Nginx |
| Container deployment | Docker Compose |
| Version control | Git and GitHub |
| VM automation | Vagrant |

Check the VM resources using:

```bash
free -h
nproc
df -h /
cat /etc/os-release
```

## 3. Initial Setup

### 3.1 Ubuntu Server and SSH Configuration

Ubuntu Server 26.04 was installed in a virtual machine. OpenSSH Server provides encrypted remote administration from the physical Windows machine.

Install and enable SSH:

```bash
sudo apt update
sudo apt install -y openssh-server
sudo systemctl enable --now ssh
sudo systemctl status ssh
```

Verify that SSH is listening:

```bash
sudo ss -lntp | grep ':22'
```

Retrieve the VM's IP address:

```bash
hostname -I
```

If UFW is enabled, allow SSH access:

```bash
sudo ufw allow OpenSSH
sudo ufw status
```

From Windows PowerShell, connect to the VM:

```powershell
ssh <ubuntu-username>@<vm-ip-address>
```

After connecting, verify the remote session:

```bash
hostname
whoami
```

Replace the example values with the actual Ubuntu username and IP address.

SSH provides an encrypted connection between the physical machine and the virtual machine. Root login should remain disabled, and SSH key authentication is recommended for regular administration.

### 3.2 Docker Installation

Docker Engine was installed on the Ubuntu VM to build and run containers.

Install the prerequisites:

```bash
sudo apt update
sudo apt install -y ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg \
  -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

Configure the official Docker repository:

```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" |
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Install Docker Engine and the Compose plugin:

```bash
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io \
  docker-buildx-plugin docker-compose-plugin
sudo systemctl enable --now docker
```

Verify the installation:

```bash
sudo systemctl status docker
docker --version
docker compose version
sudo docker run hello-world
```

The `hello-world` container verifies that Docker can download an image and start a container.

### 3.3 Jenkins Installation

Jenkins was installed as a system service to introduce continuous integration and automation.

Install Java:

```bash
sudo apt update
sudo apt install -y fontconfig openjdk-21-jre
java -version
```

Configure the Jenkins LTS repository:

```bash
sudo mkdir -p /etc/apt/keyrings
sudo wget -O /etc/apt/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian-stable/jenkins.io-2026.key
echo "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/" |
  sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt update
```

Install and start Jenkins:

```bash
sudo apt install -y jenkins
sudo systemctl enable --now jenkins
sudo systemctl status jenkins
```

Verify the service and listening port:

```bash
systemctl is-active jenkins
sudo ss -lntp | grep ':8080'
```

Jenkins was accessed from the physical machine through a web browser using:

```text
http://<vm-ip-address>:8080
```

Replace the example IP address with the actual VM address. Port 8080 must be reachable through the VM's network configuration and firewall.

Jenkins provides a web interface for configuring jobs and pipelines. Access should be restricted to trusted networks.

### 3.4 Initial One-Page CV

The initial CV was created using HTML5, CSS3, and JavaScript.

The application consists of:

- `index.html` — page structure and content.
- `style.css` — layout, typography, colors, and responsive styling.
- `script.js` — client-side interactions.

The source code is maintained with Git and published on GitHub:

[https://github.com/FatmaDhouib/mini-CV](https://github.com/FatmaDhouib/mini-CV)

### 3.5 GitHub SSH Authentication

GitHub SSH authentication allows Git operations without entering HTTPS credentials for each push.

Generate an SSH key from Windows PowerShell:

```powershell
ssh-keygen -t ed25519 -C "your-email@example.com"
```

Display the public key:

```powershell
Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub
```

In GitHub, navigate to **Settings → SSH and GPG keys → New SSH key**. Give the key a descriptive title, paste the public key, and save it.

Never share the private key file.

Test authentication:

```powershell
ssh -T git@github.com
```

Configure the local repository to use SSH:

```bash
git remote -v
git remote set-url origin git@github.com:FatmaDhouib/mini-CV.git
git remote -v
```

The expected remote URL is:

```text
git@github.com:FatmaDhouib/mini-CV.git
```

If the repository does not have an `origin` remote, add it instead:

```bash
git remote add origin git@github.com:FatmaDhouib/mini-CV.git
```

## 4. DevSecOps Portfolio Development

### 4.1 Portfolio Sections

The initial CV was extended into a DevSecOps Portfolio containing the following sections:

- **About:** professional introduction and interests.
- **Skills:** technologies and technical competencies.
- **Projects:** project cards generated dynamically with JavaScript.
- **Experience:** professional experience and education.
- **Contact:** contact information and professional links.

The application separates HTML structure, CSS presentation, and JavaScript functionality.

### 4.2 DevSecOps Skills

The skills section presents the technologies specified in the assignment.

| Technology | Purpose |
|---|---|
| Git | Version control and collaboration |
| Docker | Application containerization |
| Jenkins | Continuous integration and delivery automation |
| Kubernetes | Container orchestration |
| Ansible | Configuration management and automation |
| Terraform | Infrastructure as Code |
| Argo CD | GitOps-based continuous delivery |

The portfolio introduces these technologies and their roles in a DevOps or DevSecOps workflow. Their appearance in the skills section does not imply that every technology has been deployed in this lab.

### 4.3 Dynamic Project Cards with JavaScript

The Projects section uses a JavaScript array of objects. Each object represents a project and contains its title, description, and technologies.

Example implementation:

```javascript
const projects = [
    {
        title: "Kubernetes Cluster Deployment",
        description: "Automated Kubernetes deployment using Vagrant and Ansible.",
        technologies: "Kubernetes, Vagrant, Ansible"
    },
    {
        title: "Task Manager Application",
        description: "A containerized task management application.",
        technologies: "Docker, Kubernetes, PostgreSQL"
    },
    {
        title: "DevSecOps Portfolio",
        description: "A portfolio demonstrating DevOps and DevSecOps technologies.",
        technologies: "Git, Docker, Jenkins, Kubernetes"
    }
];

const projectsContainer =
    document.getElementById("projects-container");

projects.forEach((project) => {
    const card = document.createElement("article");
    card.classList.add("project-card");

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const technologies = document.createElement("p");
    technologies.textContent =
        `Technologies: ${project.technologies}`;

    card.append(title, description, technologies);
    projectsContainer.appendChild(card);
});
```

The HTML must provide a container with the matching ID:

```html
<div id="projects-container" class="projects-grid"></div>
```

**How the implementation works:**

1. The array stores the project data.
2. `getElementById()` selects the destination container.
3. `forEach()` iterates over the project objects.
4. JavaScript creates an article element for each project.
5. `textContent` inserts the project information safely as text.
6. `appendChild()` adds the card to the page.

Adding another project only requires adding another object to the array. The same rendering loop processes it automatically.

## 5. Dockerization

### 5.1 Dockerfile

The portfolio is served using Nginx, a lightweight web server suitable for static HTML, CSS, and JavaScript applications.

The Dockerfile configuration is:

```dockerfile
FROM nginx:alpine

COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY script.js /usr/share/nginx/html/script.js

EXPOSE 80
```

Explanation:

- `FROM nginx:alpine` selects the Nginx Alpine base image.
- `COPY` places the application files in Nginx's default document directory.
- `EXPOSE 80` documents the HTTP port used inside the container.

Build the image from the directory containing the Dockerfile and application files.

### 5.2 Build the Docker Image

The required image name is `cv-docker`.

```bash
docker build -t cv-docker .
```

Verify the image:

```bash
docker image ls cv-docker
```

The `-t` option assigns the image name and the final `.` specifies the current directory as the build context.

### 5.3 Run the Container

Start a container and map port 8000 on the Ubuntu VM to port 80 inside the container:

```bash
docker run -d \
  --name cv-container \
  -p 8000:80 \
  --restart unless-stopped \
  cv-docker
```

Verify the running container:

```bash
docker ps
```

Inspect its logs if needed:

```bash
docker logs cv-container
```

Test HTTP access from the Ubuntu VM:

```bash
curl -I http://localhost:8000
```

From the physical machine, open:

```text
http://<vm-ip-address>:8000
```

Replace the example IP address with the actual VM address. The network and firewall must permit inbound TCP traffic on port 8000.

If a container with the same name already exists, remove it before recreating it:

```bash
docker rm -f cv-container
```

Use this command only when you intend to replace the existing container.

### 5.4 Docker Compose Deployment

Docker Compose defines and manages the portfolio container using a YAML configuration file.

The intended `compose.yaml` configuration is:

```yaml
services:
  cv:
    image: cv-docker
    container_name: cv-container
    ports:
      - "8000:80"
    restart: unless-stopped
```

Explanation:

- `image` selects the local `cv-docker` image.
- `container_name` assigns a predictable container name.
- `ports` publishes the application on host port 8000.
- `restart` configures the container to restart unless explicitly stopped.

Build the image if necessary:

```bash
docker build -t cv-docker .
```

If the container was started manually with the same name, remove it before launching the Compose-managed service.

Start the application:

```bash
docker compose up -d
```

Check the service status:

```bash
docker compose ps
```

Display the logs:

```bash
docker compose logs
```

Access the portfolio from the physical machine:

```text
http://<vm-ip-address>:8000
```

Stop and remove the Compose-managed resources:

```bash
docker compose down
```

### 5.5 Push Project Changes to GitHub

After updating the source code and documentation, review the working tree:

```bash
git status
git branch --show-current
```

Stage the project files:

```bash
git add README.md index.html style.css script.js Dockerfile compose.yaml
```

Commit the changes:

```bash
git commit -m "Document DevSecOps portfolio and Docker deployment"
```

Push the current branch to GitHub:

```bash
git push origin main
```

If the current branch is not named `main`, use the branch reported by `git branch --show-current`.

Repository:

[https://github.com/FatmaDhouib/mini-CV](https://github.com/FatmaDhouib/mini-CV)

## 6. Introduction to Vagrant

### 6.1 Installation Status

Vagrant has been installed inside the Ubuntu lab VM.

The following activities are still pending:

- Creating the guest VM using `vagrant up`.
- Connecting to the guest using `vagrant ssh`.
- Verifying the customized configuration using `vagrant status`.

The commands and configuration below describe the planned procedure; they are not evidence that the guest VM has been created successfully.

Check the lab VM resources and Vagrant installation:

```bash
vagrant --version
free -h
nproc
df -h /
```

The outer Ubuntu VM has 8 GB RAM, 4 vCPUs, and a 50 GB disk. A nested VM will consume additional resources. Confirm that nested virtualization and a compatible Vagrant provider are available before starting the guest.

### 6.2 Planned Vagrantfile

Create a working directory:

```bash
mkdir -p ~/vagrant-ubuntu-lab
cd ~/vagrant-ubuntu-lab
nano Vagrantfile
```

Planned configuration:

```ruby
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/noble64"

  config.vm.define "ubuntu-automation" do |vm|
    vm.vm.hostname = "ubuntu-automation"
    vm.vm.network "private_network", ip: "192.168.56.10"

    vm.vm.provider "virtualbox" do |vb|
      vb.name = "ubuntu-automation"
      vb.memory = 2048
      vb.cpus = 2
    end
  end
end
```

This configuration specifies:

- **Base box:** Ubuntu 24.04 (`ubuntu/noble64`).
- **VM name:** `ubuntu-automation`.
- **Hostname:** `ubuntu-automation`.
- **Private IP address:** `192.168.56.10`.
- **Memory:** 2048 MB.
- **CPU:** 2 vCPUs.
- **Provider:** VirtualBox.

The guest configuration is separate from the outer lab VM's resource allocation. The private IP must also be compatible with the host-only network configured by the provider.

Validate the Vagrantfile syntax:

```bash
ruby -c Vagrantfile
```

This example assumes that VirtualBox is available as a working provider. If the nested environment does not support VirtualBox, configure a compatible provider before proceeding.

### 6.3 Planned VM Creation and SSH Access

From the directory containing the Vagrantfile, the next command is:

```bash
vagrant up
```

Vagrant will attempt to obtain the base box, create the guest, apply the configuration, and start the VM. The first run may take several minutes.

After successful startup, check the status:

```bash
vagrant status
```

Connect to the guest:

```bash
vagrant ssh
```

Inside the guest, verify the hostname and operating system:

```bash
hostname
cat /etc/os-release
```

Leave the guest session:

```bash
exit
```

**Manual VM creation versus Vagrant**

Manual VM creation requires configuring the VM through the hypervisor interface and performing setup steps individually. Vagrant defines the VM in a version-controlled file and automates creation and configuration through repeatable commands.

Vagrant improves reproducibility and reduces manual configuration, but still depends on a compatible provider, available resources, and working virtualization and networking.

These commands have not yet been executed for this activity.

### 6.4 Planned Configuration Verification

| Parameter | Planned value |
|---|---|
| VM name | `ubuntu-automation` |
| Hostname | `ubuntu-automation` |
| Private IP | `192.168.56.10` |
| RAM | 2048 MB |
| CPUs | 2 |
| Base box | `ubuntu/noble64` |
| Provider | VirtualBox |

After the VM has been created, verify its state:

```bash
vagrant status
```

The expected state is `running`. This remains an expected result until the VM is created and the command output is checked.

## 7. Project Structure

```text
mini-CV/
├── index.html
├── style.css
├── script.js
├── Dockerfile
├── compose.yaml
└── README.md
```

The structure above lists the main application and deployment files.

## 8. Technologies Used

- Ubuntu Server 26.04
- OpenSSH
- Git and GitHub
- HTML5
- CSS3
- JavaScript
- Docker Engine
- Nginx
- Docker Compose
- Jenkins
- Vagrant
- VirtualBox as the planned Vagrant provider

## 9. Completion Summary

| Activity | Status |
|---|---|
| Ubuntu Server and SSH setup | Completed |
| Docker installation | Completed |
| Jenkins installation and browser access | Completed |
| Initial one-page CV | Completed |
| GitHub SSH authentication | Completed |
| DevSecOps Portfolio development | Implemented |
| DevSecOps skills section | Implemented |
| JavaScript-generated project cards | Implemented |
| Dockerfile and image workflow | Implemented |
| Docker container deployment | Implemented |
| Docker Compose configuration | Implemented |
| GitHub repository updates | Completed |
| Vagrant installation | Completed |
| Vagrant guest creation using `vagrant up` | Pending |
| Guest access using `vagrant ssh` | Pending |
| Final Vagrant status verification | Pending |

