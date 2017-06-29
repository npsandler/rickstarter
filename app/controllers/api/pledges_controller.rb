class Api::PledgesController < ApplicationController



  def create
    @pledge = Pledge.new(pledge_params)
    @pledge.user_id = current_user.id
    if @pledge.save
      @project = Project.includes(:creator, :backers).find(@pledge.project.id)
      @rewards = Reward.includes(:pledgings).where(project_id: @project.id)
      @project.current_funding += @pledge.reward.pledge_amount
      if @project.num_allowed
        @project.num_allowed -= 1
      end
      @project.save
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
