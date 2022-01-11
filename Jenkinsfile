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
                    npm install @angular/cli -g
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
