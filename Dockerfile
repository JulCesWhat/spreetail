FROM node:22-alpine

WORKDIR /home/node/app

COPY package*.json ./

COPY --chown=node:node . .

USER node

CMD [ "node", "app.js" ]