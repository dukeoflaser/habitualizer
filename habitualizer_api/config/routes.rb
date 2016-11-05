Rails.application.routes.draw do
  devise_for :users

  resources :user do
    resources :habits, only: [:index]
    resources :experiments, only: [:index]
  end

  resources :activities, only: [:index, :show, :create, :update, :destroy]
  resources :cues, only: [:index, :show, :create, :update, :destroy]
  resources :experiments, only: [:show, :create, :update, :destroy]
  resources :habits, only: [:show, :create, :update, :destroy]
  resources :rewards, only: [:index, :show, :create, :update, :destroy]

end
