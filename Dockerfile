# syntax=docker/dockerfile:1.7

# Base
FROM node:24-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

WORKDIR /app

# Dependencies
FROM base AS deps

COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile

# Build
FROM deps AS build

COPY . .

RUN pnpm build

# Production Dependencies
FROM base AS prod-deps

COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --prod --frozen-lockfile

# Runtime
FROM node:24-alpine AS runner

ENV NODE_ENV=production

WORKDIR /app

COPY --from=prod-deps /app/node_modules ./node_modules

COPY --from=build /app/dist ./dist

COPY --from=build /app/package.json ./package.json

USER node

EXPOSE 8080

CMD ["node", "dist/server.js"]
