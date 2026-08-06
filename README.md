# 🚀 Production Grade AWS DevOps CI/CD Pipeline using Jenkins, Docker, Amazon ECR & Amazon EKS

## 📌 Project Overview

This project demonstrates a production-style CI/CD pipeline for deploying a React application on Amazon EKS using Jenkins, Docker, Amazon ECR, and Kubernetes.

The pipeline automatically builds the application, creates a Docker image, pushes it to Amazon ECR, and deploys the application to Amazon EKS.

---

# Architecture

<p align="center">
<img src="architecture.png" width="900">
</p>

---

# Technologies Used

| Technology | Purpose |
|------------|---------|
| React | Frontend Application |
| GitHub | Source Code Management |
| Jenkins | CI/CD Pipeline |
| Docker | Containerization |
| Amazon ECR | Docker Image Repository |
| Amazon EKS | Kubernetes Cluster |
| Amazon EC2 | Worker Nodes |
| Kubernetes | Container Orchestration |
| AWS IAM | Authentication & Authorization |
| Amazon EBS | Persistent Storage |
| ConfigMap | Configuration |
| Secret | Secure Credentials |

---

# Project Workflow

Developer

↓

GitHub Repository

↓

GitHub Webhook

↓

Jenkins Pipeline

↓

Docker Build

↓

Docker Image

↓

Push to Amazon ECR

↓

Amazon EKS

↓

Kubernetes Deployment

↓

LoadBalancer Service

↓

Users Access Application


---

# screenshots

1. github-repo
   <img width="1919" height="1005" alt="Screenshot 2026-08-06 110704" src="https://github.com/user-attachments/assets/0fe622b6-1366-4542-b64a-564c18d905e9" />

2. jenkins-success
   <img width="1919" height="1008" alt="Screenshot 2026-08-06 104851" src="https://github.com/user-attachments/assets/d211d561-1d4e-4be3-b676-d0f64e53a308" />

3. ecr-image
   <img width="1917" height="1011" alt="Screenshot 2026-08-06 104917" src="https://github.com/user-attachments/assets/0caadedd-e6cb-4bfb-99a1-1edb30634166" />

4. eks-cluster
   <img width="1913" height="1002" alt="Screenshot 2026-08-06 104952" src="https://github.com/user-attachments/assets/e007d737-61ae-40c0-bc4d-fd1a747df469" />

5. worker-nodes
   <img width="1917" height="1010" alt="Screenshot 2026-08-06 105016" src="https://github.com/user-attachments/assets/3bc453f8-7db7-45e1-948a-d087778932e8" />

   <img width="1919" height="1012" alt="Screenshot 2026-08-06 105204" src="https://github.com/user-attachments/assets/5051922b-8d11-459d-aaac-b9bacd18a43e" />

6. pods-running
   <img width="1918" height="1010" alt="Screenshot 2026-08-06 105105" src="https://github.com/user-attachments/assets/dbc1c7f5-0bde-4f59-a5ed-37f6992307d0" />

7. pv-pvc
   <img width="1919" height="1008" alt="Screenshot 2026-08-06 105317" src="https://github.com/user-attachments/assets/f0336dc5-8c66-4a82-b342-510556c7434a" />

8. loadbalancer
  <img width="1919" height="1009" alt="Screenshot 2026-08-06 105404" src="https://github.com/user-attachments/assets/0d584341-eb52-4d74-bf2c-0881f3bdaeea" />
 
9. react-app
  <img width="1919" height="1009" alt="Screenshot 2026-08-06 105335" src="https://github.com/user-attachments/assets/a41f8a2f-7953-45fb-9b00-3e014a93b4e5" />
  
10. jenkins-console
    <img width="1919" height="1000" alt="Screenshot 2026-08-06 110233" src="https://github.com/user-attachments/assets/d6bfb5f5-f4d9-49c9-9346-511ff58c4833" />
    <img width="1919" height="1001" alt="Screenshot 2026-08-06 110253" src="https://github.com/user-attachments/assets/c8cd3217-3135-4663-b23b-94369e96d62c" />


---

# Features

✅ Jenkins CI/CD

✅ Docker Multi-stage Build

✅ Amazon ECR

✅ Amazon EKS

✅ Kubernetes Deployment

✅ ConfigMap

✅ Secret

✅ Persistent Volume

✅ Persistent Volume Claim

✅ Resource Requests & Limits

✅ Liveness Probe

✅ Readiness Probe

✅ AWS LoadBalancer

---

# Jenkins Pipeline

The Jenkins pipeline performs the following tasks:

- Checkout source code
- Build Docker image
- Authenticate with AWS
- Login to Amazon ECR
- Push Docker image
- Deploy to Kubernetes

---

# Kubernetes Resources

Namespace

Deployment

Service

ConfigMap

Secret

Persistent Volume

Persistent Volume Claim

StorageClass

---

# Storage

Persistent Volume

- Type : AWS EBS
- Size : 1 Gi
- Access Mode : ReadWriteOnce

Persistent Volume Claim

- Size : 1 Gi

---

# Deployment

Replica : 1

Container Image :

345843270195.dkr.ecr.ap-southeast-2.amazonaws.com/react-devops-app:11

---

# Resource Limits

CPU Request

100m

CPU Limit

500m

Memory Request

128Mi

Memory Limit

256Mi

---

# Health Checks

Readiness Probe

HTTP GET /

Liveness Probe

HTTP GET /

---

# CI/CD Pipeline

Git Push

↓

GitHub Webhook

↓

Jenkins

↓

Docker Build

↓

Push Image to Amazon ECR

↓

kubectl apply

↓

Amazon EKS Deployment

---

# AWS Services Used

Amazon IAM

Amazon EC2

Amazon ECR

Amazon EKS

Amazon EBS

CloudShell

CloudWatch (Optional)

---

# Future Improvements

- Horizontal Pod Autoscaler
- AWS Application Load Balancer
- Monitoring using Prometheus
- Grafana Dashboard
- ArgoCD
- Helm Charts
- Terraform Infrastructure
- SonarQube
- Trivy Image Scanning

---

# Author

Aditya Meshram

AWS DevOps Project
