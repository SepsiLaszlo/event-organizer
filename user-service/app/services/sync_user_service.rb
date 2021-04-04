class SyncUserService
  require 'bunny'

  def initialize(user)
    @user = user
  end

  def self.call(user)
    new(user).perform
  end

  def perform
    connection = Bunny.new(hostname:'rabbit-mq' ,automatically_recover: false)
    connection.start

    channel = connection.create_channel
    queue = channel.queue('user-name')

    message = { id: @user.id, name: @user.name }
    channel.default_exchange.publish(message.to_json, routing_key: queue.name)
    Rails.logger.info " [x] sent in user-name queue: #{message}"

    connection.close
  end
end