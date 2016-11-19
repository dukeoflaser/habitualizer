class Habit < ApplicationRecord
  belongs_to :user
  belongs_to :cue
  has_many :experiments
  has_many :notes
  belongs_to :reward
  belongs_to :activity


  def cue_attributes=(atts)
      @cue = Cue.find_or_create_by(name: atts['name'])

      if @cue.nature == atts['nature']
        self.cue = @cue
      else
        @cue = Cue.create(name: atts['name'], nature: atts['nature'])
        self.cue = @cue
      end
  end

  def reward_attributes=(atts)
      @reward = Reward.find_or_create_by(craving: atts['craving'])
      @reward.habits << self
      self.reward = @reward
  end

  def activity_attributes=(atts)
      @activity = Activity.find_or_create_by(id: atts['id'])
      @activity.update(description: atts['description'])
      self.update(activity: @activity)
  end

  def note=(note)
    @note = Note.create(contents: note)
    self.notes << @note;
  end


end
