FROM node:alpine

WORKDIR /app
ENTRYPOINT npm ci && npm start
