FROM node:14-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY . .

RUN npm run build


FROM node:14-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app

COPY package*.json ./

RUN npm install --only=production --silent

COPY . .
COPY --from=builder /app/dist ./dist

CMD ["npm", "run", "start:prod"]