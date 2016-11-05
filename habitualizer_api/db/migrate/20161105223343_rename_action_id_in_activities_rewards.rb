class RenameActionIdInActivitiesRewards < ActiveRecord::Migration[5.0]
  def change
    rename_column :activities_rewards, :action_id, :activity_id
  end
end
