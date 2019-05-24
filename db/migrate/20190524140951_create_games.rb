class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :name
      t.integer :game_score , default: 0

      t.timestamps
    end
  end
end
