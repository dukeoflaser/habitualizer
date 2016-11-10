class AddUpdatedColumnToCues < ActiveRecord::Migration[5.0]
  def change
    add_column :cues, :has_been_updated, :boolean, :default => false
  end
end
