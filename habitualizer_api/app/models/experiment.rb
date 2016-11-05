class Experiment < ApplicationRecord
  belongs_to :habit
  has_one :substitute, class_name: 'Reward'
end
