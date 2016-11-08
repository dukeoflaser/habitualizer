class AddCueIdToHabitsTable < ActiveRecord::Migration[5.0]
  def change
    add_column :habits, :cue_id, :integer
  end
end
