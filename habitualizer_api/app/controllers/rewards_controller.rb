class RewardsController < ApplicationController
  def index
    @rewards = Reward.all
    render json: @rewards
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end
end
