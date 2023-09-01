FROM node:alpine

WORKDIR /usr/src/app

COPY package-lock.json .
COPY package.json .

RUN npm i

COPY . .

EXPOSE 9090

CMD [ "npm", "start" ]