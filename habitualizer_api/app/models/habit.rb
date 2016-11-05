class Habit < ApplicationRecord
  belongs_to :user
  has_many :cues
  has_one :reward
end
