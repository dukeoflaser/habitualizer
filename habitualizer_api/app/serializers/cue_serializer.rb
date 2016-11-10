class CueSerializer < ActiveModel::Serializer
  attributes :id, :name, :nature, :has_been_updated
end
