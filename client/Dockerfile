# Henry - Dockerfile for client

# Stage 1: Build react client
FROM node:10.16-alpine

# Creates the client directory in the container
RUN mkdir -p /app/client
# Sets the working directory to the client directory
WORKDIR /app/client

# Copies the yarn.lock file to the container
COPY yarn.lock /app/client/
# Copies the package.json to the container
COPY package*.json /app/client/


# Installs the client dependencies
RUN yarn install
RUN yarn add axios

# Copies the files from the client directory to the container
COPY . /app/client/


#RUN chown -R $(whoami) /usr/local
EXPOSE 3000

# Runs the client
CMD ["yarn", "start"]