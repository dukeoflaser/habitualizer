class ExperimentSerializer < ActiveModel::Serializer
  attributes :id, :substitute, :successful, :habit
end
