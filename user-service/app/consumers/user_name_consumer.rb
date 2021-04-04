class UserNameConsumer
    include Hutch::Consumer
    consume 'user-name'
  
    def process(message)
      logger.info message
    end
end