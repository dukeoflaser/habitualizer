class Habit < ApplicationRecord
  belongs_to :user
  belongs_to :cue
  has_many :experiments
  belongs_to :reward

  # accepts_nested_attributes_for :reward


  def cue_attributes=(atts)
    if atts['has_been_updated']
      @cue = Cue.find(atts['id'])
      @cue.update(name: atts['name'], nature: atts['nature'])
    else
      @cue = Cue.find_or_create_by(name: atts['name'])
      @cue.update(nature: atts['nature'])
      self.cue = @cue
    end

  end

  def reward_attributes=(atts)
    if atts['has_been_updated']
      @reward = Reward.find(atts['id'])
      @reward.update(craving: atts['craving'])
    else
      @reward = Reward.find_or_create_by(craving: atts['craving'])
      @reward.habits << self
      self.reward = @reward
    end
  end



end
