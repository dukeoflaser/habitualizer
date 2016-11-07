class RemoveHabitIdFromRewards < ActiveRecord::Migration[5.0]
  def change
    remove_column :rewards, :habit_id
  end
end
