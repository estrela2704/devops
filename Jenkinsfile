pipeline {
    agent any
    

    environment {
        DOCKERHUB_USER = credentials('DOCKERHUB_USERNAME')
        DOCKERHUB_PASSWORD = credentials('DOCKERHUB_PASSWORD')
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
            withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
                sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
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
}
