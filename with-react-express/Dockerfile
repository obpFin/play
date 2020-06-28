FROM node:9-alpine AS builder
ENV NODE_ENV=production
WORKDIR /home/node/app

COPY ./package* ./
RUN npm install  && \
    npm cache clean --force

COPY . .
EXPOSE 3001

CMD [ "npm", "run", "start:express" ]