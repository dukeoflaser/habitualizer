class Reward < ApplicationRecord
  belongs_to :habit
  belongs_to :experiment
  has_and_belongs_to_many :activities
end
