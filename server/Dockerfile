#  Henry - Dockerfile for Node Express Backend api (development)
FROM node:10.16-alpine

# ARG NODE_ENV=development
# Install nodemon for hot reloading
RUN npm install -g nodemon

# Create and set the working directory
RUN mkdir -p /app/server
WORKDIR /app/server


# Copy the dependency files over
COPY package*.json /app/server/
COPY *.js /app/server/


RUN npm ci

# Copy the server files over
COPY . /app/server/

# Exports
EXPOSE 5000

# Command to run them
CMD ["nodemon", "index.js"]

#CMD ["npm","start"]