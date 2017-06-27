class Api::RewardsController < ApplicationController

  def index
    @rewards = Reward.all
    # include project? here and in show?
  end

  def show
    @reward = Reward.find(params[:id])
  end


  def create
    @reward = Reward.new(reward_params)
    # @reward.project =
    # find current project from path
    if @reward.save
      Pledge.save({reward_id: @reward.id, user_id: current_user.id})
      render :show
    else
      render json: @reward.errors.full_messages, status: 422
    end
  end

  def update
    @reward = Reward.find(params[:id])

    if @reward.update(reward_params)
      render :show
    else
      render json: @reward.errors.full_messages, status: 422
    end
  end

  def reward_params
    params.require(:reward).permit(
    :title,
    :pledge_amount,
    :description,
    :project_id,
    :num_allowed,
    :num_backers
    )
  end

end
