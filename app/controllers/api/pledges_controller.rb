class Api::PledgesController < ApplicationController



  def create
    debugger
    @pledge = Pledge.new(pledge_params)
    @pledge.backer_id = current_user.id
    if @pledge.save
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
    params.require(:pledge).permit(
    :title,
    :pledge_amount,
    :description,
    :project_id,
    :num_allowed,
    :num_backers
    )
  end
end
