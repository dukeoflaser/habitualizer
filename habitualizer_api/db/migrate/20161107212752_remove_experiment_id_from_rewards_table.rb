class RemoveExperimentIdFromRewardsTable < ActiveRecord::Migration[5.0]
  def change
    remove_column :rewards, :experiment_id
  end
end
