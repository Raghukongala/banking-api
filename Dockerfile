# ---- Build stage ----
FROM node:22.23.1-bookworm-slim AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .


# ---- Final stage ----
FROM node:22.23.1-bookworm-slim

WORKDIR /app

# Copy only the built app + its installed node_modules — not npm's own internals
COPY --from=builder /app /app

USER node

EXPOSE 3000

CMD ["node", "app.js"]