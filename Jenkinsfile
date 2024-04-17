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
                    docker.build('felipeestrela2704/user-management:latest')
                }
            }
        }
        stage('Publish to DockerHub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
                        docker.image('felipeestrela2704/user-management:latest').push()
                    }
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                bat 'kubectl apply -f kbs/configMap'
                bat 'kubectl apply -f kbs/deploy'
                bat 'kubectl apply -f kbs/pvc'
                bat 'kubectl apply -f kbs/svc'
            }
        }
    }
}
