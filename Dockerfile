FROM node:12-alpine

WORKDIR /app

COPY rollup.config.js ./
COPY svelte.config.js ./
COPY tsconfig.json ./
COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY ./src ./src
COPY ./public ./public
COPY ./services ./services

RUN yarn build

EXPOSE 5000

CMD [ "yarn", "start" ]

