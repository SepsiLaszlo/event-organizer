class User < ApplicationRecord
    before_save :sync_username

    private 

    def sync_username
        return unless name_changed?

        unless Hutch.connected?
            begin
              Hutch.connect
            rescue Hutch::ConnectionError
              Rails.logger.debug 'Hutch::ConnectionError'
            end
        end
         
        Hutch.publish("user-name.change",id: id, new_name: name)
    end
end
