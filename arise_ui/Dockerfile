FROM node:12-alpine as build
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --only=prod
COPY . /app
RUN npm run build

RUN npm install
RUN npm run build

FROM nginx:1.21.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
