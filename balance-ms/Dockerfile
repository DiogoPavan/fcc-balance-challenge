FROM node:18-slim

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

COPY . .

RUN npm install

USER node

CMD ./wait-for-it.sh -t 0 mysqlbalance:3306 && npm run migration:up && npm run seed:run && npm run start