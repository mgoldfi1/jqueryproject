Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'users#home'
  get '/signup', to: 'users#new'

  get '/user/:id/entries', to: 'users#diary'
  resources :users
  resources :posts
  resources :comments 

end
