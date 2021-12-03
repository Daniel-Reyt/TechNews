FROM node:14-alpine

RUN npm -v
RUN node -v

RUN npm install -g nodemon

WORKDIR /app

COPY package*.json /app/
ENV NPM_CONFIG_LOGLEVEL verbose

RUN npm install

COPY . /app/