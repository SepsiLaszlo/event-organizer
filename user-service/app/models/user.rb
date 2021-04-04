class User < ApplicationRecord
    before_save :sync_username

    private 

    def sync_username
        return unless name_changed?
        
        Hutch.publish("user-name.change", new_name: name)
    end
end
