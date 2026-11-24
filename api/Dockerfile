FROM node:22-bookworm-slim

WORKDIR /app

# Install production dependencies only
COPY package.json package-lock.json ./

RUN npm ci --omit=dev \
    && npm cache clean --force

# Copy API application files
COPY server.js ./
COPY data ./data

ENV NODE_ENV=production
ENV PORT=3001

EXPOSE 3001

CMD ["npm", "start"]
