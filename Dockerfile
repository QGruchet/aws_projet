FROM node:alpine

WORKDIR /app
USER node
ENTRYPOINT npm ci && npm start
