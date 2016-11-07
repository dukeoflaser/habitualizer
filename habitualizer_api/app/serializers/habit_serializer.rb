class HabitSerializer < ActiveModel::Serializer
  attributes :id, :name, :complete, :cues, :reward, :experiments
end
