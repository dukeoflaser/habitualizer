class ChangeColumnNameInRewards < ActiveRecord::Migration[5.0]
  def change
    rename_column :rewards, :name, :craving 
  end
end
