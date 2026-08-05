pipeline {
    agent any

    environment {
        AWS_REGION = "ap-southeast-2"
        AWS_ACCOUNT_ID = "345843270195"
        ECR_REPOSITORY = "react-devops-app"

        IMAGE_NAME = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPOSITORY}"
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout Source') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-repo-creds',
                    url: 'https://github.com/meshramaditya/Production-grade-AWS-Devops-CI-CD-monitoring-Project'
            }
        }

        stage('Verify Tools') {
            steps {
                bat 'docker --version'
                bat 'aws --version'
            }
        }

        stage('Check Workspace') {
            steps {
                bat '''
                echo Current Directory:
                cd

                echo =====================
                dir

                echo =====================
                type package.json
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                bat '''
                docker build -t %IMAGE_NAME%:%IMAGE_TAG% .
                '''
            }
        }

        stage('Authenticate AWS') {

            steps {

                withCredentials([
                    string(credentialsId: 'adi-aws-acces-key', variable: 'AWS_ACCESS_KEY_ID'),
                    string(credentialsId: 'adi-aws-secret-key', variable: 'AWS_SECRET_ACCESS_KEY')
                ]) {

                    bat '''
                    aws sts get-caller-identity
                    '''

                }

            }

        }

        stage('Login to Amazon ECR') {

            steps {

                withCredentials([
                    string(credentialsId: 'adi-aws-acces-key', variable: 'AWS_ACCESS_KEY_ID'),
                    string(credentialsId: 'adi-aws-secret-key', variable: 'AWS_SECRET_ACCESS_KEY')
                ]) {

                    bat '''
                    aws ecr get-login-password --region %AWS_REGION% | docker login --username AWS --password-stdin %AWS_ACCOUNT_ID%.dkr.ecr.%AWS_REGION%.amazonaws.com
                    '''

                }

            }

        }

        stage('Push Docker Image') {

            steps {

                bat '''
                docker push %IMAGE_NAME%:%IMAGE_TAG%
                '''

            }

        }

    }

    post {

        success {

            echo "Docker Image Successfully Pushed to Amazon ECR"

        }

        failure {

            echo "Pipeline Failed"

        }

    }

}