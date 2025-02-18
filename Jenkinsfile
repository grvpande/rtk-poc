pipeline {
    agent any
    
    tools {
        nodejs "nodejs"  // Use the NodeJS tool configured in Jenkins
    }

    environment {
        CI = 'false'  // Prevents npm from failing on minor warnings
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/YOUR-USERNAME/YOUR-REPO.git'  // Replace with your repo
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'  // Installs required dependencies
            }
        }

        stage('Code Quality & Tests') {
            parallel {
                stage('Run Unit Tests') {
                    steps {
                        bat 'npm test'  // Runs unit tests
                    }
                }

                stage('Linting') {
                    steps {
                        bat 'npm run lint'  // Runs ESLint (if configured)
                    }
                }
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'  // Builds the React project
            }
        }

        stage('Archive Build Artifacts') {
            steps {
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }
    }

    post {
        always {
            echo 'Build Completed!'
        }
        success {
            echo 'Build Succeeded! 🎉'
        }
        failure {
            echo 'Build Failed! ❌'
        }
    }
}
