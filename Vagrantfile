
Vagrant.configure("2") do |config|
config.vm.box = "bento/ubuntu-24.04"

  config.vm.define "vagrant-ubuntu-lab" do |vm|
    vm.vm.hostname = "vagrant-ubuntu-lab"
    vm.vm.network "private_network", ip: "192.168.56.10"

    vm.vm.provider "virtualbox" do |vb|
      vb.name = "vagrant-ubuntu-lab"
      vb.memory = 2048
      vb.cpus = 2
    end
  end
end
