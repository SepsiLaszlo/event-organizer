class TestJob < ApplicationJob
  queue_as :default
  require 'bunny'
  def perform(*args)
    connection = Bunny.new(hostname:'rabbit-mq' ,automatically_recover: false)
    connection.start

    channel = connection.create_channel
    queue = channel.queue('user-name')
    queue.subscribe(block: true) do |_delivery_info, _properties, body|
      puts " [x] Received #{body}"
      logger.info " [x] Received #{body}"
    end
    connection.close
  end
end
