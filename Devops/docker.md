Docker:
Docker is a tool that lets you package your application and its dependencies into a single container, ensuring it runs the same on any machine. 
Image: Blueprint of your app (like a class).
Container: Running instance of an image (like an object).
Dockerfile: Instructions to build an image.
Docker Hub: Public registry to store images.

RUN — Build-time Instruction
Executes a command during the image build process.
CMD — Run-time Instruction
Specifies the default command to run when a container starts.
FROM, ADD, ENV, EXPOSE, VOLUME, WORKDIR, COPY
Dockerfile builds the docker image and this docker image runs the docker container.

docker images                # List images
docker rmi <image_id>        # Remove image
docker build -t name .       # Build image from Dockerfile
docker ps                    # Running containers
docker ps -a                 # All containers
docker run -d -p 80:80 name  # Run container
docker exec -it <name> bash  # Enter container
docker stop <name>           # Stop container
docker rm <name>             # Remove container
docker system prune          # Remove all unused containers/images

docker --version
docker info

Docker Compose (Multi-container setup):
docker-compose up --build
docker-compose down
docker-compose -f docker-compose.prod.yml up --build
docker-compose start
docker-compose stop

docker volume create myvol
docker run -v myvol:/app/data myapp

docker login
docker tag myapp username/myapp
docker push username/myapp
