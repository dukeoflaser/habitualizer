class RenameNameColumnInActionsTable < ActiveRecord::Migration[5.0]
  def change
    rename_column :actions, :name, :description
  end
end
