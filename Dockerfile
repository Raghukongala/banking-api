# Use latest supported Node LTS slim image
FROM node:22-bookworm-slim

WORKDIR /app


# Update npm to patched version
RUN npm install -g npm@11.6.2


COPY package*.json ./


RUN npm ci --omit=dev


COPY . .


# Remove npm cache
RUN npm cache clean --force


# Security: run as non-root
USER node


EXPOSE 3000


CMD ["node","app.js"]