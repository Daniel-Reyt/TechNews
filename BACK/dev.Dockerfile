FROM node:8-alpine

COPY package.json .
COPY package-lock.json .
RUN npm install 
COPY . .

EXPOSE 8008
CMD [ "npm", "run", "dev" ]