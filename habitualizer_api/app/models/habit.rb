class Habit < ApplicationRecord
  belongs_to :user
  belongs_to :cue
  has_many :experiments
  belongs_to :reward

  accepts_nested_attributes_for :cue
  accepts_nested_attributes_for :reward

  # attr_accessor :cues_attributes, :rewards_attributes, :activities_attributes

end
