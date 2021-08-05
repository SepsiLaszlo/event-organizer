FROM node:15.8.0

RUN npm install --global npm@6
RUN npm install -g @angular/cli
RUN npm install --save-dev @angular-devkit/build-angular

RUN mkdir /front-end
WORKDIR /front-end

COPY package.json
COPY package-lock.json
RUN npm install

COPY . .
