FROM node:alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfiles

COPY ./ ./
CMD ["yarn", "start:dev"]
