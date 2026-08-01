FROM node:22.23.1-bookworm-slim

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

RUN npm cache clean --force

USER node

EXPOSE 3000

CMD ["node","app.js"]