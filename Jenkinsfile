pipeline {
    agent any
    
environment {
    DOCKERHUB_USER = credentials('DOCKERHUB')
    DOCKERHUB_PASSWORD = credentials('DOCKERHUB')
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
                sh "docker login -u ${DOCKERHUB_USER} -p ${DOCKERHUB_PASSWORD}"
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
