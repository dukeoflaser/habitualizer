class Habit < ApplicationRecord
  belongs_to :user
  belongs_to :cue
  has_many :experiments
  belongs_to :reward
  belongs_to :activity


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

  def activity_attributes=(atts)
      @activity = Activity.find_or_create_by(id: atts['id'])
      @activity.update(description: atts['description'])
  end



end
