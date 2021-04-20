Rails.application.routes.draw do
  resources :users do
    get :names, on: :collection
    post :login, on: :member
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
