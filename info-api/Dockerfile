FROM node:alpine

WORKDIR /usr/src/app

COPY yarn.lock /app
COPY package.json /app

RUN yarn install

COPY . .

EXPOSE 9090

CMD [ "yarn", "start" ]