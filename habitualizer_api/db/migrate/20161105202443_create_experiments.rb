class CreateExperiments < ActiveRecord::Migration[5.0]
  def change
    create_table :experiments do |t|
      t.integer :substitute_id
      t.boolean :successful, :default => false

      t.timestamps
    end
  end
end
