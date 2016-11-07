class Experiment < ApplicationRecord
  belongs_to :habit
  belongs_to :substitute, class_name: 'Reward'
end
