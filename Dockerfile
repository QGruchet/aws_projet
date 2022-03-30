FROM node:16-alpine

ENV PATH=$PATH:/home/node/.npm-global/bin
WORKDIR /app
ENTRYPOINT npm ci && npm start
