Rails.application.routes.draw do
  devise_for :users

  resources :activities, only: [:index, :show, :create, :update, :destroy]
  resources :cues, only: [:index, :show, :create, :update, :destroy]
  resources :experiments, only: [:index, :show, :create, :update, :destroy]
  resources :habits, only: [:index, :show, :create, :update, :destroy]
  resources :rewards, only: [:index, :show, :create, :update, :destroy]

end
