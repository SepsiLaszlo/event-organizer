#!/usr/bin/env ruby
require 'bunny'

connection = Bunny.new(hostname:'rabbit-mq' ,automatically_recover: false)
connection.start

channel = connection.create_channel
queue = channel.queue('hello')

channel.default_exchange.publish('Hello World!', routing_key: queue.name)
puts " [x] Sent 'Hello World!'"

connection.close