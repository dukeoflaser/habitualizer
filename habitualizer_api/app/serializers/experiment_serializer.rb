class ExperimentSerializer < ActiveModel::Serializer
  attributes :id, :substitute, :successful, :habit, :created_at
end
