FROM node:20-slim

WORKDIR /app


# Copy dependency files
COPY package*.json ./


# Update npm to patched version
RUN npm install -g npm@latest


# Install dependencies
RUN npm ci --omit=dev


# Copy application
COPY . .


EXPOSE 3000


CMD ["node","app.js"]