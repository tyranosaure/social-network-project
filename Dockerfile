<<<<<<< HEAD
FROM node:12.18.1

WORKDIR /usr/src/app
=======
FROM node:12.4

WORKDIR .
>>>>>>> 07c0bdbbef7c216fcec61470576c8920efd7e91c

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8081
<<<<<<< HEAD

CMD [ "node", "index.js"]
=======
>>>>>>> 07c0bdbbef7c216fcec61470576c8920efd7e91c
