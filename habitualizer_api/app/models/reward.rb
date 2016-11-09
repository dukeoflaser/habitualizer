class Reward < ApplicationRecord
  has_and_belongs_to_many :activities
  has_many :habits
end
