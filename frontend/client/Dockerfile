FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

RUN npm install react-scripts -g --silent


COPY .. .

CMD ["npm", "run", "start"]

