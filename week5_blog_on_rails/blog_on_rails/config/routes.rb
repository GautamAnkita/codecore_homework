Rails.application.routes.draw do

  namespace :admin do
    resources :dashboard, only: [:index]
  end


  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :edit, :update]

  resources :posts do
    resources :comments, only: [:create, :destroy]
  end
  get "/", to: "posts#index" ,as: :home

  get "/users/:id/change_password", to: "users#change_password" ,as: :user_change_password
  patch "/users/:id/change_password", to: "users#update_password"
  put "/users/:id/change_password", to: "users#update_password"
  
end
