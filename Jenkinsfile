pipeline {
	agent any

	options {
		timestamps()
		disableConcurrentBuilds()
	}

	environment {
		APP_NAME = 'my-react-app'
		IMAGE_NAME = 'my-react-app'
		IMAGE_TAG = "${env.BUILD_NUMBER}"
	}

	stages {
		stage('Checkout') {
			steps {
				checkout scm
			}
		}

		stage('Install Dependencies') {
			steps {
				script {
					if (isUnix()) {
						sh 'npm ci'
					} else {
						bat 'npm ci'
					}
				}
			}
		}

		stage('Lint') {
			steps {
				script {
					if (isUnix()) {
						sh 'npm run lint'
					} else {
						bat 'npm run lint'
					}
				}
			}
		}

		stage('Build') {
			steps {
				script {
					if (isUnix()) {
						sh 'npm run build'
					} else {
						bat 'npm run build'
					}
				}
			}
		}

		stage('Docker Build') {
			steps {
				script {
					if (isUnix()) {
						sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
					} else {
						bat "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
					}
				}
			}
		}

		stage('Archive Build Output') {
			steps {
				archiveArtifacts artifacts: 'dist/**', fingerprint: true
			}
		}
	}

	post {
		always {
			cleanWs()
		}
	}
}
