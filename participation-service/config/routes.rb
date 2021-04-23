Rails.application.routes.draw do
  resources :participations do
    get "for_user/:user_id", to: "participations#for_user", on: :collection
    get "for_event/:event_id", to: "participations#for_event", on: :collection
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
