FROM node:16-alpine

COPY ./app .
WORKDIR /app

RUN npm install -g nodemon
RUN npm install
