require 'active_support/core_ext/string'

class Api::ProjectsController < ApplicationController
  def index
    if params[:category]
      @projects = Project.includes(:creator, :backers, :rewards).where(category: params[:category])
    elsif params[:query]
      @projects = Project.includes(:creator, :backers, :rewards).where('title LIKE (?) OR description LIKE (?)', "%#{params[:query]}%", "%#{params[:query]}%")
    else
      @projects = Project.includes(:creator, :backers, :rewards)
    end
  end

  def show
    @project = Project.includes(:creator, :backers).find(params[:id])
    @rewards = Reward.includes(:pledgings).where(project_id: @project.id)
    render :show
  end


  def create
    params[:project][:rewards_attributes] = JSON.parse(params[:project][:rewards_attributes])
    @project = Project.new(project_params)
    @project.creator = current_user
    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = Project.find(params[:id])

    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def project_params
    params.require(:project).permit(
    :title,
    :end_date,
    :funding_goal,
    :details,
    :category,
    :description,
    :image,
    rewards_attributes: [
      :title,
      :pledge_amount,
      :description,
      :project_id,
      :num_allowed,
      :num_backers
    ]
    )
  end

end
