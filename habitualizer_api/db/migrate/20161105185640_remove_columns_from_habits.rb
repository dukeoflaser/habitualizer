class RemoveColumnsFromHabits < ActiveRecord::Migration[5.0]
  def change
    remove_column :habits, :cue
    remove_column :habits, :reward
  end
end
