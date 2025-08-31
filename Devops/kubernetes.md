Kubernetes:
Orchestrates containers across a cluster of machines, ensuring high availability and efficient resource utilization. 
The architecture of Kubernetes includes a master node and one or more worker nodes. 
Kubernetes (K8s) is an open-source container orchestration platform for automating deployment, scaling, and management of containerized applications. 

Cluster: A Kubernetes cluster consists of a control plane and one or more worker nodes. Kubernetes is a production-grade, open-source platform that orchestrates the placement (scheduling) and execution of application containers within and across computer clusters. 
Kubernetes coordinates a highly available cluster of computers that are connected to work as a single unit. 
Kubernetes automates the distribution and scheduling of application containers across a cluster in a more efficient way.

Control Plane Components:
Control Planes manage the cluster and the nodes that are used to host the running applications. 
Manage the overall state of the cluster:
kube-apiserver: The core component server that exposes the Kubernetes HTTP API.
etcd: Consistent and highly-available key value store for all API server data.
kube-scheduler: Looks for Pods not yet bound to a node, and assigns each Pod to a suitable node.
kube-controller-manager: Runs controllers to implement Kubernetes API behavior.
cloud-controller-manager: Integrates with underlying cloud provider(s).

Node Components:
A node is a VM or a physical computer that serves as a worker machine in a Kubernetes cluster. 
Node-level components, such as the kubelet, communicate with the control plane using the Kubernetes API 
Run on every node, maintaining running pods and providing the Kubernetes runtime environment:
kubelet: Ensures that Pods are running, including their containers.
kube-proxy (optional): Maintains network rules on nodes to implement Services.
Container runtime: Software responsible for running containers.
Pod: A Pod is the smallest deployable unit in Kubernetes. A wrapper around one or more containers that share the same network and storage.
Group containers that must work together.
Give each Pod its own IP address.
Share volumes between containers in the same Pod.
Allow Kubernetes to manage them as a single unit (schedule, scale, restart, replace).
Pod Lifecycle-:
Pending → Waiting for resources or pulling the image
Running → At least one container is running
Succeeded → All containers exited successfully
Failed → At least one container exited with an error
Unknown → Node unreachable
Pods are ephemeral: If a Pod dies, Kubernetes replaces it with a new Pod (new IP)

Service: Exposes pods to internal/external traffic
Deployment: Manages replica sets and ensures the desired state
ReplicaSet: Ensures a specified number of pod replicas are running at any given time
Namespace: Isolates environments (e.g., dev, test, prod)
ConfigMap & Secret: For managing configuration data and sensitive information.
Containers: Technology for packaging an application along with its runtime dependencies.



minikube start --driver=docker
minikube status

kubectl config current-context
kubectl get nodes
kubectl config use-context minikube
kubectl config use-context docker-desktop
Create Deployment:
kubectl apply -f nginx-deployment.yaml
kubectl get deoloyments
kubectl get pods
Expose Service:
kubectl expose deployment nginx-deployment --port=80 --type=NodePort
kubectl get svc
Scale the Deployment:
kubectl scale deployment nginx-deployment --replicas=4
Rolling Update:
kubectl set image deployment/nginx-deployment nginx=nginx:1.25
kubectl rollout status deployment/nginx-deployment
Clean Up:
kubectl delete svc nginx-deployment
kubectl delete deployment nginx-deployment

------------------------------------------------------------
Create VM - ubuntu-2204-jammy-v20250815 | X86_64
Install Docker
Install Kind
Install Kubectl
Create Cluster
    kind create cluster --name whatsapp-cluster --image kindest/node:v1.30.0
    kubectl cluster-info
Install Helm
    curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 | bash
Install ArgoCD
    kubectl create namespace argocd
    kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
    kubectl get pods -n argocd
    kubectl apply -f apps/whatsapp-backend-dev.yaml -n argocd
    kubectl get applications -n argocd
    sudo curl -sSL -o /usr/local/bin/argocd https://github.com/argoproj/argo-cd/releases/latest/download/argocd-linux-amd64
    sudo chmod +x /usr/local/bin/argocd
    kubectl describe application whatsapp-backend-dev -n argocd
    kubectl port-forward svc/argocd-server -n argocd 8080:443   
    argocd app list
Install Ingress
    kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/cloud/deploy.yaml
    # Add repo (if not already)
    helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
    helm repo update

    # Install with admission webhook enabled
    helm install ingress-nginx ingress-nginx/ingress-nginx -n ingress-nginx



kubectl create ns nginx
kubectl get namespace
kubectl get -n namesapce_name
kubectl run nginx --image=nginx -n nginx
kubectl get pods -n nginx
kubectl get deployment -n nginx
kubectl describe pod pod_id




kubectl apply -f namespace.yml
kubectl exec -it nginx-pod -n nginx -- bash
kubectl scale deployment/nginx-deployment -n nginx
sudo -E kubectl port-forward service/notes-app-service -n notes-app 8080:8080 --address=0.0.0.0


Ingress:
Ingress exposes HTTP and HTTPS routes from outside the cluster to services within the cluster. Traffic routing is controlled by rules defined on the Ingress resource.
Download the ingress. - it will create a  ingress-nginx namespace 
ingress pod must be running.
kubectl get pods -n ingress-nginx
kubectl get ingress -n notes-app
kubectl describe ingress app-ingress -n notes-app
kubectl port-forward -n ingress-nginx svc/ingress-nginx-controller 8080:80 --address=0.0.0.0


sudo nano /etc/hosts
127.0.0.1 myapp.local

















Deployment Strategies-:
1. Recreate Deployment:
    Shut down the old version completely, then start the new version.
    Downtime: Yes.
2. Rolling Deployment: Kubernetes default deployment.
    Gradually replace old instances with new ones, one batch at a time.
    No downtime, but all users eventually switch to the new version.
3. Blue-Green Deployment:  
    Have two identical environments:
    Blue = current version (live traffic).
    Green = new version (staging).
    Switch traffic to green instantly when ready.
4. Canary Deployment:
    Release new version to a small subset of users (say 5%), monitor for issues, then gradually increase traffic.
5. A/B Testing:
    Traffic is split between two or more versions to compare performance.
6. Shadow (or Mirroring) Deployment:
    New version receives a copy of real traffic but responses are discarded (not served to users).
    Used to test performance and compatibility in real-world load without impacting users.  