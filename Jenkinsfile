pipeline {
    agent any
    
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/estrela2704/devops.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('user-management')
                }
            }
        }
        stage('Publish to DockerHub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'DOCKERHUB_CREDENTIAL') {
                        docker.image('user-management').push('latest')
                    }
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f KBS/'
            }
        }
    }
}
