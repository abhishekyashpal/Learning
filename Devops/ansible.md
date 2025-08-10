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

Ansible Collections-:
collections are basically a packaging format for distributing Ansible content —
like a "bundle" that can contain:
Roles (reusable configuration tasks)
Modules (custom logic to perform tasks)
Plugins (filters, lookups, connection types, etc.)
Playbooks
Documentation
Collections were introduced so you can ship more than just roles in one distributable unit.

ansible-galaxy collection install amazon.aws
---
- name: Launch EC2 instance
  hosts: localhost
  tasks:
    - name: Create an EC2 instance
      amazon.aws.ec2_instance:
        name: myServer
        instance_type: t2.micro
        region: us-east-1

amazon.aws is the namespace.collection_name.
ec2_instance is a module inside that collection.

Variable Procedure-:
If you define my_var in:
inventory
a role
group_vars
a playbook vars section
Ansible needs a rule to decide which value wins.
This rule is the variable precedence hierarchy.
Here’s the main idea (lowest to highest):
Role defaults (defaults/main.yml)
Inventory variables (host_vars / group_vars)
Play vars (defined in playbook under vars:)
Extra vars (passed via CLI: ansible-playbook site.yml -e my_var=value)

ansible-playbook play.yml --extra-vars "ansible_debug_vars=true"
ansible -m debug -a "var=my_var" all

Passwordless Authentication-:
Ansible passwordless authentication means setting up your control machine (where you run ansible-playbook) so it can connect to target servers without typing a password every time.
Ansible connects to remote hosts over SSH by default.
With passwordless SSH:
Ansible can run completely unattended (in CI/CD pipelines, cron jobs, etc.)
No manual typing of passwords for each host
More secure than hardcoding passwords.
SSH key-based authentication instead of password authentication.
Generate an SSH key pair on your control machine:
ssh-keygen -t rsa -b 4096
Private key: ~/.ssh/id_rsa (keep secret)
Public key: ~/.ssh/id_rsa.pub (share with servers)
ssh-copy-id user@server-ip
ssh user@server-ip

Error Handling-:
a) Ignore Errors and Continue
ignore_errors: yes
b) Mark Task as Successful Even if It Fails
failed_when: false
c) Custom Failure Conditions
failed_when: "'inactive' in service_status.stdout"
d) Retry Until Success
retries: 5
e) Block / Rescue / Always (Try-Catch-Finally in Ansible)
- block:
    - name: This might fail
      command: /bin/false

  rescue:
    - name: Handle failure
      debug:
        msg: "Task failed, running rescue tasks"

  always:
    - name: Always run this
      debug:
        msg: "Cleanup actions here"
f) Force Stop Entire Play
- name: Fail if a condition is not met
  fail:
    msg: "Nginx must be installed!"
  when: nginx_installed is not defined
Debugging Failures
ansible-playbook site.yml -vvv

Ansible vault-:
Ansible Vault is a feature in Ansible that lets you securely store and encrypt sensitive data (like passwords, API keys, certificates, and private configuration) inside your playbooks, roles, or inventory files.
ansible-vault create secrets.yml    ##### create an encrypted file.
ansible-vault encrypt inventory.yml    ##### Encrypt an Existing File
ansible-vault decrypt inventory.yml     ##### Decrypt a File
ansible-vault edit secrets.yml      ##### Edit an Encrypted File
ansible-vault view secrets.yml      ##### View an Encrypted File
ansible-playbook site.yml --ask-vault-pass    ##### Run Playbook with Vault
ansible-playbook site.yml --vault-password-file .vault_pass   ##### use a password file:
ansible-vault encrypt_string 'MyS3cretPass' --name 'db_password'      ##### Per-Variable Encryption

# locally, create a vault password file (keep it secret locally)
echo "super-strong-vault-password" > .vault_pass
chmod 600 .vault_pass

# create vars/secrets.yml (plain) then encrypt it, or create via create command
ansible-vault create vars/secrets.yml --vault-password-file .vault_pass
# inside the editor, add:
# db_password: "S3cr3tDbPass"
# api_key: "SOME_API_KEY"


