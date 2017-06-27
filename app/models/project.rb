# == Schema Information
#
# Table name: projects
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  end_date           :date             not null
#  funding_goal       :integer          not null
#  details            :text             not null
#  creator_id         :integer          not null
#  category           :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  current_funding    :integer          default(0), not null
#  description        :string           default(""), not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  num_allowed        :integer
#

class Project < ActiveRecord::Base
  validates :title, :end_date, :funding_goal, :description,
   :details, :creator_id, :category, presence: true


  has_attached_file :image, default_url: "prelim-backdrop.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


  belongs_to :creator,
  class_name: :User,
  foreign_key: :creator_id

  has_many :rewards,
  inverse_of: :project

  has_many :backers,
  source: :pledgings,
  through: :rewards

  accepts_nested_attributes_for :rewards






end
