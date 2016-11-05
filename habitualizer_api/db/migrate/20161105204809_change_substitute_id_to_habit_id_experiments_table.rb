class ChangeSubstituteIdToHabitIdExperimentsTable < ActiveRecord::Migration[5.0]
  def change
    rename_column :experiments, :substitute_id, :habit_id
  end
end
