# == Schema Information
#
# Table name: rewards
#
#  id               :integer          not null, primary key
#  project_id       :integer          not null
#  title            :string           not null
#  pledge_amount    :integer          not null
#  description      :text             not null
#  number_remaining :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  num_backers      :integer          default(0)
#  num_allowed      :integer
#

require 'test_helper'

class RewardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
