FROM node:20-slim

WORKDIR /app

RUN npm install -g supergateway

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

ENV PORT=8000

CMD ["supergateway", "--stdio", "node dist/index.js", "--outputTransport", "streamableHttp", "--port", "8000", "--healthEndpoint", "/health"]
