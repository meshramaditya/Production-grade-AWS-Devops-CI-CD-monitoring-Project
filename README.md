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
