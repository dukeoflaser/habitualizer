class AddLikesColumnToHabits < ActiveRecord::Migration[5.0]
  def change
    add_column :habits, :likes, :integer, :default => 0
  end
end
