# ==========================
# Production Image
# ==========================

FROM node:22.18.0-slim

WORKDIR /app


COPY package*.json ./


RUN npm ci --omit=dev


COPY . .


RUN npm cache clean --force


USER node


EXPOSE 3000


CMD ["node","app.js"]