class HabitSerializer < ActiveModel::Serializer
  attributes :id, :name, :cues, :reward, :experiments
end
