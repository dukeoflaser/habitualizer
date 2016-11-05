class CreateActions < ActiveRecord::Migration[5.0]
  def change
    create_table :actions do |t|
      t.string :name
      t.string :reward_id

      t.timestamps
    end
  end
end
