class AddActivityIdToHabitsTable < ActiveRecord::Migration[5.0]
  def change
    add_column :habits, :activity_id, :integer
  end
end
