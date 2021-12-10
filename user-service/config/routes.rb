Rails.application.routes.draw do
  resources :users do
    get :names, on: :collection
    get :current, on: :collection
    get :authenticate, on: :collection
    get :github_client_id, on: :collection
    get :callback, on: :collection
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
