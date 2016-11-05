class RemoveActionIdFromRewards < ActiveRecord::Migration[5.0]
  def change
    remove_column :rewards, :action_id
  end
end
