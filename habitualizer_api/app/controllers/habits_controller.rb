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
    @habit = Habit.create(habit_params)
    render json: @habit
  end

  def update
    @habit = Habit.find(params[:habit][:id])
    @habit.update(habit_params)
    render json: @habit
  end

  def destroy
    @habit = Habit.find(params[:id])
    @habit.destroy
  end

  def habit_params
    params.require(:habit)
      .permit(:id, :user_id, :name, :complete,
        {:cue_attributes => [:id, :name, :nature, :has_been_updated]},
        {:reward_attributes => [:id, :craving, :has_been_updated]},
        {:activity_attributes => [:id, :description]}
      )
  end
end
