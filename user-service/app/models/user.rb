class User < ApplicationRecord
    before_save :sync_username

    private 

    def sync_username
        return unless name_changed?
        
        SyncUserService.call(self)
    end
end
