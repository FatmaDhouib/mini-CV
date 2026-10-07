# DevOps Lab — Ubuntu Server, SSH, Docker, Jenkins and GitHub

## Project Overview

This project implements a basic DevOps environment based on Ubuntu Server 26.04. The work includes:

1. Installation of Ubuntu Server 26.04.
2. Configuration and testing of secure remote access through SSH.
3. Installation and verification of Docker.
4. Installation of Jenkins as a system service.
5. Development of a one-page CV using HTML5, CSS3 and JavaScript.
6. Configuration of GitHub SSH authentication and Git push through SSH.

---

# 1. Ubuntu Server 26.04 Installation and SSH Configuration

## 1.1 Ubuntu Server

Ubuntu Server 26.04 was installed in a virtual machine.

The VM was configured with:

* Operating System: Ubuntu Server 26.04
* CPU: 2 vCPU
* RAM: 4 GB
* Disk: 25 GB
* Network: NAT/Bridged

The operating system was verified with:

```bash
cat /etc/os-release
```

## 1.2 SSH Installation

OpenSSH Server was installed with:

```bash
sudo apt update
sudo apt install -y openssh-server
```

The SSH service was enabled and started:

```bash
sudo systemctl enable --now ssh
```

The service was verified with:

```bash
sudo systemctl status ssh
```

## 1.3 SSH Security

The SSH configuration was checked in:

```text
/etc/ssh/sshd_config
```

The following settings were configured:

```text
PubkeyAuthentication yes
PasswordAuthentication no
PermitRootLogin no
```

The SSH configuration was tested with:

```bash
sudo sshd -t
```

The SSH service was then restarted:

```bash
sudo systemctl restart ssh
```

## 1.4 Firewall

SSH was allowed through UFW:

```bash
sudo ufw allow OpenSSH
sudo ufw enable
```

The firewall status was checked with:

```bash
sudo ufw status
```

## 1.5 SSH Access Test

The IP address of the VM was obtained with:

```bash
hostname -I
```

From the physical Windows machine, the VM was accessed using:

```powershell
ssh USERNAME@VM_IP_ADDRESS
```

Example:

```powershell
ssh fatma@192.168.47.128
```

After connecting, the following commands were used to verify the connection:

```bash
hostname
whoami
```

### SSH Access Screenshot


---

# 2. Docker Installation

## 2.1 Prerequisites

The system was updated:

```bash
sudo apt update
sudo apt upgrade -y
```

Required packages were installed:

```bash
sudo apt install -y ca-certificates curl
```

## 2.2 Docker Repository

The Docker keyring directory was created:

```bash
sudo install -m 0755 -d /etc/apt/keyrings
```

The Docker repository signing key was downloaded:

```bash
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg \
-o /etc/apt/keyrings/docker.asc
```

The Docker repository was then configured.

## 2.3 Docker Installation

Docker Engine and related components were installed:

```bash
sudo apt update

sudo apt install -y \
docker-ce \
docker-ce-cli \
containerd.io \
docker-buildx-plugin \
docker-compose-plugin
```

## 2.4 Docker Service

Docker was enabled and started:

```bash
sudo systemctl enable --now docker
```

The service was verified:

```bash
sudo systemctl status docker
```

## 2.5 Docker Test

Docker was tested using:

```bash
docker run hello-world
```

The Docker versions were checked with:

```bash
docker --version
docker compose version
```



---

# 3. Jenkins Installation as a Service

## 3.1 Java Installation

Jenkins requires Java. OpenJDK 21 was installed:

```bash
sudo apt install -y fontconfig openjdk-21-jre
```

The Java version was verified:

```bash
java -version
```

## 3.2 Jenkins Repository

The Jenkins repository key was installed:

```bash
sudo mkdir -p /etc/apt/keyrings

sudo wget -O /etc/apt/keyrings/jenkins-keyring.asc \
https://pkg.jenkins.io/debian-stable/jenkins.io-2026.key
```

The Jenkins LTS repository was configured:

```bash
echo "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/" | \
sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
```

The package list was updated:

```bash
sudo apt update
```

## 3.3 Jenkins Installation

Jenkins was installed with:

```bash
sudo apt install -y jenkins
```

## 3.4 Jenkins Service

Jenkins was enabled and started:

```bash
sudo systemctl enable --now jenkins
```

The service was verified with:

```bash
sudo systemctl status jenkins
```

The service was also checked with:

```bash
systemctl is-enabled jenkins
systemctl is-active jenkins
```

The expected results are:

```text
enabled
active
```

## 3.5 Jenkins Port

Jenkins uses port 8080 by default.

The listening port was verified with:

```bash
sudo ss -lntp | grep :8080
```

Port 8080 was allowed through UFW:

```bash
sudo ufw allow 8080/tcp
```

## 3.6 Jenkins Access Test

From the physical machine, Jenkins was accessed through:

```text
http://VM_IP_ADDRESS:8080
```

Example:

```text
http://192.168.47.128:8080
```

The Jenkins web interface was successfully displayed.



---

# 4. One-Page CV

A one-page CV was developed using:

* HTML5
* CSS3
* JavaScript

The project contains:

```text
index.html
style.css
script.js
```

The CV includes professional information, education, experience, skills, projects and contact information.

JavaScript was also integrated to provide interactive functionality.



---

# 5. Git Repository

Git was initialized in the CV directory:

```bash
git init
```

The Git identity was configured:

```bash
git config user.name "Fatma Dhouib"
git config user.email "YOUR_GITHUB_EMAIL"
```

The project files were added:

```bash
git add .
```

The first commit was created:

```bash
git commit -m "Create one page CV"
```

The commit history was verified:

```bash
git log --oneline
```

---

# 6. GitHub SSH Authentication

## 6.1 SSH Key

The SSH key was generated on the physical Windows machine using:

```powershell
ssh-keygen -t ed25519
```

The private key is stored locally and was never uploaded to GitHub.

The public key was displayed using:

```powershell
Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub
```

The public key was added to:

```text
GitHub → Settings → SSH and GPG keys → New SSH key
```


---

## 6.2 Test GitHub SSH Authentication

The GitHub SSH connection was tested with:

```powershell
ssh -T git@github.com
```

The authentication was successful.





---

## 6.3 Configure Git Remote Using SSH

The GitHub remote was configured using the SSH URL:

```bash
git remote add origin git@github.com:USERNAME/mini-cv.git
```

The remote configuration was verified with:

```bash
git remote -v
```

The output uses the SSH format:

```text
git@github.com:USERNAME/mini-cv.git
```

The branch was configured as `main`:

```bash
git branch -M main
```

The project was pushed to GitHub:

```bash
git push -u origin main
```

---

# 7. GitHub Repository

The final project is available at:

**GitHub Repository:**

https://github.com/USERNAME/mini-cv

---

# 8. Project Structure

```text
mini-cv/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── screenshots/
  
```

# 9. Technologies Used

* Ubuntu Server 26.04
* OpenSSH
* UFW
* Docker
* Docker Compose
* Java 21
* Jenkins LTS
* Git
* GitHub
* HTML5
* CSS3
* JavaScript
