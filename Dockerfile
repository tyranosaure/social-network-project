
FROM node:12.18.1

WORKDIR /usr/src/app
FROM node:12.4

WORKDIR .

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8081

CMD [ "node", "index.js"]
