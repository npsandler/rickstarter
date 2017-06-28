class Api::PledgesController < ApplicationController



  def create
    @pledge = Pledge.new(pledge_params)
    # @pledge.reward_id = pledge_params[id]
    @pledge.user_id = current_user.id
    if @pledge.save
      @pledge.project.current_funding += @pledge.reward.pledge_amount
      debugger
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
