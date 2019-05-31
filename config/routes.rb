Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :games, only: [:index, :update, :create]
      resources :players, only: [:index, :update, :create]
      # get './node_modules/rpg-awesome/css/rpg-awesome.min.css'
    end
  end
end
