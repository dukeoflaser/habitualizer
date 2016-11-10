class AddUpdatedColumnToRewards < ActiveRecord::Migration[5.0]
  def change
    add_column :rewards, :has_been_updated, :boolean, :default => false
  end
end
