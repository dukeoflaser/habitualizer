class Habit < ApplicationRecord
  belongs_to :user
  belongs_to :cue
  has_many :experiments
  belongs_to :reward

  accepts_nested_attributes_for :reward


  def cue_attributes=(atts)
    @cue = Cue.find_or_create_by(name: atts['name'])
    self.cue = @cue
  end

  def reward_attributes=(atts)
    @reward = Reward.find_or_create_by(craving: atts['craving'])
    @reward.habits << self
    self.reward = @reward
  end



end
