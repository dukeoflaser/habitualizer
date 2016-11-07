class Experiment < ApplicationRecord
  belongs_to :habit
  belongs_to :substitute, class_name: 'Reward'

  accepts_nested_attributes_for :substitute
end
