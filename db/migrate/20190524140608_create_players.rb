class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :ign_name
      t.integer :player_score
      t.integer :game_id

      t.timestamps
    end
  end
end
