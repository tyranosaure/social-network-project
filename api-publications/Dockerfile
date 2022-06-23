FROM node:12.4

WORKDIR .

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8081
