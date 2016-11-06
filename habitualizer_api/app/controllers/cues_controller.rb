class CuesController < ApplicationController
  def index
    @cues = Cue.all
    render json: @cues
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
