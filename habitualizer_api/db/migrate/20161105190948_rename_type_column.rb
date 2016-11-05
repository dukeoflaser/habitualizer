class RenameTypeColumn < ActiveRecord::Migration[5.0]
  def change
    rename_column :cues, :type, :nature
  end
end
