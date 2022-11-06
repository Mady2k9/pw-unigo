def getEnvName() {
    if (env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'main') {
        return 'production'
    }
    else if (env.BRANCH_NAME == 'staging') {
        return 'staging'
    }
    else if (env.BRANCH_NAME == 'development') {
        return 'development'
    }
}

pipeline {
  agent {
  kubernetes {
    cloud 'kubernetes'
    defaultContainer 'cicd-clitools'
    inheritFrom 'cicd'
    }
  }
  environment {
    serviceName = 'pw-market-place'
    ecr = '682917649829.dkr.ecr.ap-south-1.amazonaws.com'
    environment = getEnvName()
  }
  stages {
    stage('Checkout deployment repo') {
      steps {
        container('node') {
          sh 'ls -al'
          checkout([
            $class: 'GitSCM',
            branches: [[name: '*/main']],
            extensions: [[$class: 'RelativeTargetDirectory', relativeTargetDir: 'deployment-repo']],
            userRemoteConfigs: [[credentialsId: 'Gitlab_token', url: 'https://gitlab.com/devops1947/deployments-repo.git']]
            ])
          sh 'ls -al'
       }
      }
    }
    stage('Build and push docker image') {
      steps {
        container(name: 'kaniko', shell: '/busybox/sh') {
          sh '''#!/busybox/sh
            dockerConfig=\${DOCKER_CONFIG:-/kaniko/.docker}
            [ -d \${dockerConfig} ] && echo "Docker directory Exists" || mkdir -p \${dockerConfig}
            echo '{"credsStore":"ecr-login"}' > \${dockerConfig}/config.json
          '''
          sh '''#!/busybox/sh
            ls -al;
            mv ./site/${environment}.env ./site/.env;
            mv cicd/Dockerfile Dockerfile;
            /kaniko/executor --context `pwd` --destination 682917649829.dkr.ecr.ap-south-1.amazonaws.com/k8s-${environment}-${serviceName}-service:${BUILD_NUMBER};
          '''
        }
      }
    }
    stage('Deploying to k8s cluster') {
      steps {
        container('cicd-clitools') {
            sh 'argocd app set ${environment}-${serviceName} -p image.tag=${BUILD_NUMBER} --values-literal-file ./cicd/values-${environment}.yaml'
        }
      }
    }
  }
}
