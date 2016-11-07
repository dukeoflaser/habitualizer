class Habit < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :cues
  has_many :experiments
  belongs_to :reward

  accepts_nested_attributes_for :cues
  accepts_nested_attributes_for :reward

  # attr_accessor :cues_attributes, :rewards_attributes, :activities_attributes

end
