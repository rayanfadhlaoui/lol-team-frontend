ARG NODE_VERSION=8
FROM node:${NODE_VERSION}

WORKDIR /usr/lolteam

# Setup front project
COPY ./ /usr/lolteam/
RUN \
  mkdir -p dist && \
  yarn global add @angular/cli --log-level warn && \
  yarn install --loglevel warn