pipeline {
    agent any
    
    environment {
        DOCKERHUB_USER = credentials('DOCKERHUB_USERNAME')  // Use o ID da credencial
        DOCKERHUB_PASSWORD = credentials('DOCKERHUB_PASSWORD')  // Use o ID da credencial
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/estrela2704/devops.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t felipeestrela2704/user-management:latest .'
            }
        }
        stage('Publish to DockerHub') {
            steps {
                sh "docker login -u ${DOCKERHUB_USERNAME} -p ${DOCKERHUB_PASSWORD}"
                sh 'docker push felipeestrela2704/user-management:latest'
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f KBS/'
            }
        }
    }
}
