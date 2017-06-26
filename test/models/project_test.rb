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
#

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
