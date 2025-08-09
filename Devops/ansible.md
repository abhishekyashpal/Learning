When you provision infrastructure (with Terraform, AWS console, etc.), you usually get empty servers.
Now you need to:
Install software (Node.js, NGINX, Docker, databases, etc.)
Configure services (firewalls, environment variables, SSL certificates, etc.)
Deploy application code
Apply updates consistently across many machines

Ansible solves this by automating configuration management, app deployment, and orchestration.
Ansible is a configuration management, deployment, and orchestration tool.
It uses YAML files called playbooks to describe what should be done on target systems.
It is agentless — connects over SSH (Linux) or WinRM (Windows).
Idempotent → run the same script multiple times and it won’t re-do things unnecessarily.

| **Manual server setup is slow & inconsistent** | Uses YAML "playbooks" to describe exactly what needs to be installed and configured.        |
| **Difficult to manage multiple servers**       | Executes the same tasks on 10, 100, or 1,000+ servers in parallel.                          |
| **Hard to reproduce environments**             | Playbooks are version-controlled, so you can recreate the exact same configuration anytime. |
| **Complex deployment pipelines**               | Automates app deployment steps — fetch code, install deps, restart services, etc.           |
| **Multi-environment drift** (dev ≠ prod)       | Ensures the same setup runs everywhere, preventing “it works on my machine” issues.         |

Terraform → Builds the infrastructure (VMs, load balancers, networks, databases)
Ansible → Configures those VMs, installs dependencies, deploys applications

-------------------------------------------------------------------

ansible-project/
├──inventories/
|       dev.ini
|       staging.ini
|       prod.ini
├── playbook.yml
└── files/
    └── index.html



inventory.ini-:
[webservers]
server1 ansible_host=192.168.1.10 ansible_user=ubuntu ansible_ssh_private_key_file=~/.ssh/id_rsa
server2 ansible_host=192.168.1.11 ansible_user=ubuntu ansible_ssh_private_key_file=~/.ssh/id_rsa

playbook.yml-:
---
- name: Setup Web Server
  hosts: webservers
  become: yes
  tasks:
    - name: Install NGINX
      apt:
        name: nginx
        state: present
        update_cache: yes

    - name: Copy custom index.html
      copy:
        src: files/index.html
        dest: /var/www/html/index.html
        owner: www-data
        group: www-data
        mode: '0644'

    - name: Ensure NGINX is running
      service:
        name: nginx
        state: started
        enabled: yes


ansible-playbook -i inventory.ini playbook.yml
-i inventory.ini → tells Ansible which servers to target
become: yes → run tasks as root (like sudo)

--------------------------------------------------------------------
What is Ansible Galaxy?
Ansible Galaxy is the official hub for sharing and reusing Ansible content.
Similar to npm for Node.js or Docker Hub for Docker images.
You can download ready-made roles instead of writing everything from scratch.
It also lets you publish your own roles.

Instead of writing a playbook to install Node.js, NGINX, or Docker manually, you can just:
ansible-galaxy role install geerlingguy.nodejs
ansible-galaxy role install geerlingguy.docker

###########################################
---
- hosts: webservers
  become: yes
  roles:
    - geerlingguy.docker
############################################

Instead of installing roles manually, define them in requirements.yml:
# requirements.yml
- src: geerlingguy.nodejs
  version: 6.1.0
- src: geerlingguy.docker   

# requirements.yml for a Node.js app server
- src: geerlingguy.nodejs
- src: geerlingguy.nginx
- src: geerlingguy.mysql

ansible-galaxy install -r requirements.yml


Publishing Your Own Role-:
ansible-galaxy init myrole
ansible-galaxy login
ansible-galaxy import <your_github_username> <repo_name>


Role-:
An Ansible role is basically a self-contained, reusable package of Ansible tasks — kind of like a folderized playbook with a clear structure.
A modular unit in Ansible that bundles everything needed to configure something.