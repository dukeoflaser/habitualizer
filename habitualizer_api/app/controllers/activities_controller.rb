class ActivitiesController < ApplicationController
  def index
    @activities = Activity.all
    render json: @activities
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
