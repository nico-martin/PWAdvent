FROM node:12
RUN apt-get update
RUN mkdir -p /usr/src/pwadvent/node_modules && chown -R node:node /usr/src/pwadvent
WORKDIR /usr/src/pwadvent
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "npm run prod" ]
