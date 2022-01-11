pipeline {
    agent any
    triggers {
        pollSCM('* * * * *')
    }
    stages {
        stage('Build') {
            steps {
                sh """
                    echo 'Build'
                """
            }
        }
        stage('Test') {
            steps {
                sh """
                    echo 'Test'
                """            
            }
        }
        
        stage('Deploy') {
            steps { 
                sh """
                    echo 'Deploy'
                """         
            }
        }
    }
}
