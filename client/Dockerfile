# Henry - Dockerfile for client

# Stage 1: Build react client
FROM node:10.16-alpine

# Working directory be app
WORKDIR /usr/app

COPY package*.json yarn.lock ./

#Install npm
#RUN npm install
# Install dependencies
RUN yarn install

# copy local files to app folder
COPY . .

#RUN chown -R $(whoami) /usr/local
EXPOSE 3000

CMD ["yarn","start"]