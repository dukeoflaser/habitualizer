class AddColumnToRewards < ActiveRecord::Migration[5.0]
  def change
    add_column :rewards, :successful, :boolean, :default => true
  end
end
