Vagrant.configure("2") do |config|
  config.vm.box = "cloudsoe/ubuntu-24.04"
  config.vm.box_url = "https://boxes.cloudsoe.com/cloudsoe/ubuntu-24.04.json"

  config.vm.define "vagrant-ubuntu-lab" do |vm|
    vm.vm.hostname = "vagrant-ubuntu-lab"

    # Forward the portfolio from the nested VM to the control VM.
    vm.vm.network "forwarded_port",
      guest: 3003,
      host: 3004,
      host_ip: "0.0.0.0",
      auto_correct: false

    # Synchronize project files while excluding generated directories.
    vm.vm.synced_folder ".", "/vagrant",
      type: "rsync",
      rsync__exclude: [
        ".git/",
        ".vagrant/",
        "node_modules/",
        ".next/",
        ".env",
        "*.log"
      ]

    # Configure the nested VM using libvirt/KVM.
    vm.vm.provider "libvirt" do |lv|
      lv.cpus = 2
      lv.memory = 1536
    end

    # Install Ansible and deploy the application automatically.
    vm.vm.provision "ansible_local" do |ansible|
      ansible.install = true
      ansible.playbook = "ansible/playbooks/deploy-portfolio.yml"
      ansible.provisioning_path = "/vagrant"
    end
  end
end
