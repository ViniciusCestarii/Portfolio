FROM oven/bun:1.1.45-alpine AS base

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

FROM base AS runner

COPY --from=base /app/.next/standalone ./
COPY --from=base /app/.next/static ./.next/standalone/.next/static
# COPY --from=base /app/public ./public not using

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

EXPOSE 3000
CMD ["bun", "server.js"]