pipeline {
    agent any

    options {
        timestamps()
    }

    environment {
        APP_DIR = 'portfolio-next-js'
        PATH = '/usr/bin:/bin'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                dir("${APP_DIR}") {
                    sh '''
                        echo "Node.js version:"
                        node --version

                        echo "npm version:"
                        npm --version

                        echo "Installing dependencies..."
                        npm ci
                    '''
                }
            }
        }

        stage('Build Next.js Application') {
            steps {
                dir("${APP_DIR}") {
                    sh '''
                        echo "Building Next.js application..."
                        npm run build
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Next.js CI pipeline completed successfully.'
        }

        failure {
            echo 'Next.js CI pipeline failed. Check the stage logs.'
        }
    }
}
