class CreateCues < ActiveRecord::Migration[5.0]
  def change
    create_table :cues do |t|
      t.string :name
      t.string :type
      t.integer :habit_id

      t.timestamps
    end
  end
end
