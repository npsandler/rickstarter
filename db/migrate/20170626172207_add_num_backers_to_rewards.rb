class AddNumBackersToRewards < ActiveRecord::Migration
  def change
    add_column :rewards, :num_backers, :integer, default: 0
  end
end
