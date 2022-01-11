FROM node:14.15

RUN npm i -g @angular/cli
  # Bundle APP files

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json /app/

ENV NPM_CONFIG_LOGLEVEL warn

RUN npm install

COPY . /app
