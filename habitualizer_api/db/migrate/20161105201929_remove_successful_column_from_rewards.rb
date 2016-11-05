class RemoveSuccessfulColumnFromRewards < ActiveRecord::Migration[5.0]
  def change
    remove_column :rewards, :successful
  end
end
