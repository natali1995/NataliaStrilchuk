test:
		echo We have no tests for a while

run:
		 node .output/server/index.mjs

dev:
		 npm run dev

build:
		npm run build

lint:
		npm run lint
		npm run stylelint

install:
		npm install

docker_build:
		DOCKER_BUILDKIT=1 BUILDKIT_PROGRESS=plain docker build --ssh default -t natalie .

docker_login:
		aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin ${DOCKER_REGISTRY}

docker_push:
		docker push ${DOCKER_IMAGE}

docker_pull:
		docker pull ${DOCKER_IMAGE}
