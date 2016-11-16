class AddCurrentExpIdToHabitsTable < ActiveRecord::Migration[5.0]
  def change
    add_column :habits, :current_exp_id, :integer
  end
end
