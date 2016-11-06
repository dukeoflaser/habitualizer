class ExperimentsController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    render json: @user.experiments
  end

  def show
    @experiment = Experiment.find(params[:id])
    render json: @experiment    
  end

  def create
  end

  def update
  end

  def destroy
  end
end
