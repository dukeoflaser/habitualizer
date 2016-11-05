class CreateActionsRewards < ActiveRecord::Migration[5.0]
  def change
    create_table :actions_rewards do |t|
      t.integer :action_id
      t.integer :reward_id
    end
  end
end
