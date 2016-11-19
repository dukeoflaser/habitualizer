class CreateNotes < ActiveRecord::Migration[5.0]
  def change
    create_table :notes do |t|
      t.integer :habit_id
      t.string :contents
    end
  end
end
