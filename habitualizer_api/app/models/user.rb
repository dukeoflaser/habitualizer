class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :rememberable, :validatable
  has_many :habits
  has_many :cues, through: :habits
  has_many :rewards, through: :habits
  has_many :experiments, through: :habits
end
