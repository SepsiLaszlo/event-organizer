FROM node:15.8.0

RUN npm install --global npm@6
RUN npm install -g @angular/cli

RUN mkdir /front-end
WORKDIR /front-end

COPY . .