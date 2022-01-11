pipeline {
    agent any
    triggers {
        pollSCM('* * * * *')
    }
    stages {
        stage('Build') {
            steps {
                sh """
                    cd FRONT 
                    nvm install 16.10
                    nvm use 16.10
                    npm i
                    npm run build 
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
