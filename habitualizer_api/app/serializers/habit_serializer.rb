class HabitSerializer < ActiveModel::Serializer
  attributes :id, :name, :complete, :cue, :reward, :experiments
end
