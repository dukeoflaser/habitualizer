class Habit < ApplicationRecord
  belongs_to :user
  belongs_to :cue
  has_many :experiments
  belongs_to :reward

  accepts_nested_attributes_for :reward


  def cue_attributes=(atts)
    # atts = => {"name"=>"Work", "nature"=>"0"}
    @cue = Cue.find_or_create_by(name: atts['name'])
    self.cue = @cue
  end

end
