Rails.application.routes.draw do
  resources :users do
    get :names, on: :collection
    post :login, on: :member
    post :logout, on: :collection
    get :current, on: :collection
    get :authenticate, on: :collection
    post :signin, on: :collection
    get :get_code, on: :collection
    get :callback, on: :collection

  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
