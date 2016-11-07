class AddCompleteColumnToHabitsTable < ActiveRecord::Migration[5.0]
  def change
    add_column :habits, :complete, :boolean, default: false
  end
end
