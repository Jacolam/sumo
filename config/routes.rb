Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :games, only: [:index, :update]
      resources :players, only: [:index, :update]
      # get './node_modules/rpg-awesome/css/rpg-awesome.min.css'
    end
  end
end
