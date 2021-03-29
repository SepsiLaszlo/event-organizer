# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
100.times do |user_id|
    user_name = JSON.parse(HTTParty.get("http://user-service:3000/users/#{user_id}").body)['name']
    (1..100).to_a.sample(10).each do |event_id| 
        Participation.create!(event_id: event_id ,user_id: user_id, user_name: user_name)
    end
end