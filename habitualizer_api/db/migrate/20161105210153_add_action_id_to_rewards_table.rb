class AddActionIdToRewardsTable < ActiveRecord::Migration[5.0]
  def change
    add_column :rewards, :action_id, :integer
  end
end
