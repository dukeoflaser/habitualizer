class CreateCuesHabits < ActiveRecord::Migration[5.0]
  def change
    create_table :cues_habits do |t|
      t.integer :cue_id
      t.integer :habit_id
    end
  end
end
