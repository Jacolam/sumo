class Api::V1::PlayersController < ApplicationController
  before_action :find_player, only: [:update, :create]
  def index
    players = Player.all
    render json: players
  end

  def create
    player = Player.create(player_params)
     render json: player
  end

  def update
    player = Player.update(player_params)
    if player.save
      render json: player, status: :accepted
    end
  end
  private

  def player_params
    params.permit(:ign_name, :player_score, :game_id)
  end

  def find_player
    player = player.find(params[:id])
  end
end
