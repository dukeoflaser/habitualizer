class RemoveHabitIdFromCues < ActiveRecord::Migration[5.0]
  def change
    remove_column :cues, :habit_id
  end
end
