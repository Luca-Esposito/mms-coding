FROM node:14 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm run build


FROM node:14-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . .
COPY --from=builder /app/dist ./dist

CMD ["npm", "run", "start:prod"]