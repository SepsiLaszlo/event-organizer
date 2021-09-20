
FROM ruby:2.7.1

RUN curl https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh > wait-for-it.sh
RUN chmod u+x wait-for-it.sh

RUN mkdir /participation-service
WORKDIR /participation-service

RUN gem install bundler -v 2.1.4

COPY Gemfile .
COPY Gemfile.lock .
RUN bundle install --retry 3

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update && apt install yarn -y

COPY . .
CMD bash -c "rm -f ./tmp/pids/server.pid && rails server -b 0.0.0.0" 