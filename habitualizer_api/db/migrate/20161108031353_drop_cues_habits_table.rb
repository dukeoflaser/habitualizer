class DropCuesHabitsTable < ActiveRecord::Migration[5.0]
  def change
    drop_table :cues_habits
  end
end
