FROM node:19.6.0-bullseye AS builder

ENV NODE_ENV=production

WORKDIR /frontend

COPY package.json package-lock.json Makefile ./

RUN make install

COPY . ./

RUN make build



FROM node:19.6.0-alpine3.17

RUN apk add --no-cache make && \
    adduser --disabled-password --home /frontend frontend

WORKDIR /frontend

USER frontend

COPY Makefile ./

COPY --from=builder /frontend/.output /frontend/.output

EXPOSE 3000

CMD make run
