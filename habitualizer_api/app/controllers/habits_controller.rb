class HabitsController < ApplicationController
  def index
    @user = User.find(params[:user_id])

    if params[:complete] == 'true'
      @habits = @user.habits.select{ |habit| habit.complete == true }
    else
      @habits = @user.habits.select{ |habit| habit.complete == false }
    end

    render json: @habits
  end

  def show
    @habit = Habit.find(params[:id])
    render json: @habit
  end

  def create
    @habit = Habit.new(habit_params)
    binding.pry
    render json: @habit
  end

  def update
  end

  def destroy
  end

  def habit_params
    params.require(:habit)
      .permit(:user_id, :name, :complete,
        {:cues_attributes => [:id, :name, :nature]},
        {:rewards_attributes => [:id, :craving]},
        {:activities_attributes => [:id, :description]}
      )

  end
end
