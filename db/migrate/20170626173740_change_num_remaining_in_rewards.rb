class ChangeNumRemainingInRewards < ActiveRecord::Migration
  def change
    add_column :rewards, :num_allowed, :integer
  end
end
