# ==========================
# Stage 1: Build
# ==========================
FROM node:20.19.0-slim AS builder

WORKDIR /app


# Copy dependency files first
COPY package*.json ./


# Install exact dependencies
RUN npm ci


# Copy application source
COPY . .


# ==========================
# Stage 2: Production Image
# ==========================
FROM node:20.19.0-slim


WORKDIR /app


# Copy only required application files
COPY --from=builder /app .


# Remove unnecessary npm cache
RUN npm cache clean --force


# Run application as non-root user
USER node


EXPOSE 3000


CMD ["node","app.js"]