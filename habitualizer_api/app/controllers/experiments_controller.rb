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
    @experiment = Experiment.create(experiment_params)
    render json: @experiment
  end

  def update
    @experiment = Experiment.find(params[:experiment][:id])
    @experiment.update(experiment_params)
    render json: @experiment
  end

  def destroy
    @experiment = Experiment.find(params[:id])
    @experiment.destroy
  end

  def experiment_params
    params.require(:experiment)
      .permit(:habit_id, :successful,
        {:substitute_attributes => [:craving]}
      )
  end
end
