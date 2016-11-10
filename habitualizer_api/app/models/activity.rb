class Activity < ApplicationRecord
  has_and_belongs_to_many :rewards
  has_many :habits
end
