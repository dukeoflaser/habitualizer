class ExperimentsController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    render json: @user.experiments
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
