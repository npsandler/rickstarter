# == Schema Information
#
# Table name: pledges
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  reward_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Pledge < ActiveRecord::Base
  validates :user, :reward, presence: true

  belongs_to :user
  belongs_to :reward

  has_one :project,
  through: :reward,
  source: :project
end
