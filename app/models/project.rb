# == Schema Information
#
# Table name: projects
#
#  id              :integer          not null, primary key
#  title           :string           not null
#  end_date        :date             not null
#  funding_goal    :integer          not null
#  details         :text             not null
#  creator_id      :integer          not null
#  category        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  current_funding :integer          default(0), not null
#  description     :text             not null
#

class Project < ActiveRecord::Base
  validates :title, :end_date, :funding_goal, :description,
   :details, :creator_id, :category, presence: true


  belongs_to :creator,
  class_name: :User,
  foreign_key: :creator_id

end
