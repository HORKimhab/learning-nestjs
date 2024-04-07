FROM node:20

WORKDIR /user/src/app

COPY packpage.json ./
COPY packpage-lock.json ./

RUN yarn install 

COPY . .