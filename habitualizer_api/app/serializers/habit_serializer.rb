class HabitSerializer < ActiveModel::Serializer
  attributes :id, :name, :complete, :cue, :reward, :experiments, :created_at
end
