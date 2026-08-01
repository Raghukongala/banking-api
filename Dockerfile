# ---- Build stage ----
FROM node:22.23.1-bookworm-slim AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .


# ---- Final stage ----
FROM node:22.23.1-bookworm-slim

WORKDIR /app

COPY --from=builder /app /app

RUN rm -rf /usr/local/lib/node_modules/npm /usr/local/bin/npm /usr/local/bin/npx

USER node

EXPOSE 3000

CMD ["node", "app.js"]