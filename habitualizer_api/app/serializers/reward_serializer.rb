class RewardSerializer < ActiveModel::Serializer
  attributes :id, :craving, :activities, :has_been_updated
end
