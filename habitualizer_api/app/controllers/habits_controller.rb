class HabitsController < ApplicationController
  def index
    @user = User.find(params[:user_id])

    if params[:complete] == 'true'
      @habits = @user.habits.select{ |habit| habit.complete == true }
    else
      @habits = @user.habits
    end
    binding.pry
    render json: @habits
  end

  def show
    @habit = Habit.find(params[:id])
    render json: @habit
  end

  def create
  end

  def update
  end

  def destroy
  end

  def habits_params
    params.permit(:complete);
  end
end
