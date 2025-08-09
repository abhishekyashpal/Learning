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
kube-apiserver
The core component server that exposes the Kubernetes HTTP API.
etcd
Consistent and highly-available key value store for all API server data.
kube-scheduler
Looks for Pods not yet bound to a node, and assigns each Pod to a suitable node.
kube-controller-manager
Runs controllers to implement Kubernetes API behavior.
cloud-controller-manager
Integrates with underlying cloud provider(s).

Node Components:
A node is a VM or a physical computer that serves as a worker machine in a Kubernetes cluster. 
Node-level components, such as the kubelet, communicate with the control plane using the Kubernetes API 
Run on every node, maintaining running pods and providing the Kubernetes runtime environment:
kubelet
Ensures that Pods are running, including their containers.
kube-proxy (optional)
Maintains network rules on nodes to implement Services.
Container runtime
Software responsible for running containers.


Pod-The smallest unit, which holds one or more containers
Service-Exposes pods to internal/external traffic
Deployment-Manages replica sets and ensures the desired state
ReplicaSet-Ensures a specified number of pod replicas are running at any given time
Namespace-Isolates environments (e.g., dev, test, prod)
ConfigMap & Secret-For managing configuration data and sensitive information.
Containers: Technology for packaging an application along with its runtime dependencies.



minikube start --driver=docker
minikube status

kubectl config current-context
kubectl get nodes
kubectl config current-context
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