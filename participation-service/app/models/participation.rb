class Participation < ApplicationRecord
    after_find do |participation|
        if participation.user_name.nil?
            user_name = JSON.parse(HTTParty.get("http://user-service:3000/users/#{user_id}").body)['name']
            participation.user_name = user_name
            participation.save!
        end
    end
end
