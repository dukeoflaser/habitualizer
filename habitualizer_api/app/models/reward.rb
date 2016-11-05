class Reward < ApplicationRecord
  belongs_to :habit
  belongs_to :experiment
end
