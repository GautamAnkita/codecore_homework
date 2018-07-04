Rails.application.routes.draw do

  resources :posts do
    resources :comments, only: [:create, :destroy]
  end
  get "/", to: "posts#index" ,as: :home
end
