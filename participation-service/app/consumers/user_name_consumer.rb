class UserNameConsumer
    include Hutch::Consumer
    consume 'user-name.change'
  
    def process(message)
      logger.info message['new_name']
    end
end