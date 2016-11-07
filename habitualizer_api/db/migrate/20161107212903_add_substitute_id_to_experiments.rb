class AddSubstituteIdToExperiments < ActiveRecord::Migration[5.0]
  def change
    add_column :experiments, :substitute_id, :integer
  end
end
