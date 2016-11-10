class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :description, :rewards, :habits
end
