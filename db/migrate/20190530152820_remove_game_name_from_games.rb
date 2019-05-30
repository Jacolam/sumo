class RemoveGameNameFromGames < ActiveRecord::Migration[5.2]
  def change
    remove_column :games, :name, :string
  end
end
