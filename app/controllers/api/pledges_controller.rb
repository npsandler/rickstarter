class Api::PledgesController < ApplicationController



  def create
    @pledge = Pledge.new(pledge_params)
    @pledge.user_id = current_user.id
    if @pledge.save
      @project = Project.includes(:creator, :backers).find(@pledge.project.id)
      @rewards = Reward.includes(:pledgings).where(project_id: @project.id).order(:pledge_amount)
      @project.current_funding += @pledge.reward.pledge_amount
      @project.save
      @pledge.reward.num_backers += 1
      @pledge.reward.save

      render :show
    else
      render json: @pledge.errors.full_messages, status: 422
    end
  end

  def update
    @pledge = Pledge.find(params[:id])

    if @pledge.update(pledge_params)
      render :show
    else
      render json: @pledge.errors.full_messages, status: 422
    end
  end

  def pledge_params
    params.permit(:reward_id)
  end
end
