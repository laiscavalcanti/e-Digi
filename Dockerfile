FROM node:12.19.1-alpine3.12

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . .

RUN npm install