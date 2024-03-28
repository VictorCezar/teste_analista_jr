FROM node:20-slim

WORKDIR /app

COPY package*.json ./
COPY . .
COPY prisma ./prisma/

RUN apt-get update -y && apt-get install -y openssl

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
