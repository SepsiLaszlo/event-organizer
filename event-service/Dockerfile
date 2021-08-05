
FROM ruby:2.7.1

RUN mkdir /event-service
WORKDIR /event-service

RUN gem install bundler -v 2.2.15

COPY Gemfile .
COPY Gemfile.lock .
RUN bundle install --retry 3

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update && apt install yarn -y

COPY . .

CMD bash -c "rm -f ./tmp/pids/server.pid && rails server -b 0.0.0.0" 