# FROM node:15.8.0

# RUN npm install --global npm@6
# RUN npm install -g @angular/cli
# RUN npm install --save-dev @angular-devkit/build-angular

# RUN mkdir /front-end
# WORKDIR /front-end

# COPY package.json .
# COPY package-lock.json .
# RUN npm install

# COPY . .

FROM nginx:1.21.3


RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g @angular/cli
RUN npm install --save-dev @angular-devkit/build-angular

RUN mkdir /front-end
WORKDIR /front-end

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY default.conf /etc/nginx/conf.d/default.conf
COPY . .
RUN ng build