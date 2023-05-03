FROM node:lts-alpine as build-frontend

WORKDIR /app
RUN apk add --update libpng-dev
RUN apk add --update yarn
COPY ./frontend/package*.json ./
COPY ./frontend/yarn.lock ./
RUN yarn install
ADD ./frontend ./
RUN yarn build

FROM golang:1.18 AS build-backend

ADD ./backend /app
COPY --from=build-frontend /app/build /app/pb_public
WORKDIR /app

RUN CGO_ENABLED=0 GOOS=linux go build -o pocketbase .

FROM alpine:3 AS production
COPY --from=build-backend /app .
EXPOSE 8090
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090"]