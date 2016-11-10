class Experiment < ApplicationRecord
  belongs_to :habit
  belongs_to :substitute, class_name: 'Reward'

  def substitute_attributes=(atts)
    @sub = Reward.find_or_create_by(craving: atts['craving'])
    self.substitute = @sub
  end

end
