class HabitSerializer < ActiveModel::Serializer
  attributes :id, :name, :complete,
             :cue, :reward, :activity,
             :experiments, :created_at,
             :current_exp_id
end
