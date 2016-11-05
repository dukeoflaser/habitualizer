class AddExperimentIdToRewardsTable < ActiveRecord::Migration[5.0]
  def change
    add_column :rewards, :experiment_id, :integer
  end
end
