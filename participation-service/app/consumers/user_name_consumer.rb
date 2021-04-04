class UserNameConsumer
    include Hutch::Consumer
    consume 'user-name.change'
  
    def process(message)
      logger.info "USER NAME CHANGED - id: #{message['id']}, new_name: #{message['new_name']}"
      Participation.where(user_id: message['id']).update_all(user_name: message['new_name'])
    end
end