class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :ign_name, :player_score, :game_id
end
