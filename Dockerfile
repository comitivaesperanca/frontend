# Install dependencies only when needed
FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json .

RUN npm install --force

# Rebuild the source code only when needed
FROM node:16-alpine AS builder

WORKDIR /app

COPY package.json .

RUN npm install -g next

RUN npm install
COPY --from=deps /app/node_modules ./node_modules

COPY . .


EXPOSE 3000

ENV PORT 3000

CMD ["npm", "run", "dev"]