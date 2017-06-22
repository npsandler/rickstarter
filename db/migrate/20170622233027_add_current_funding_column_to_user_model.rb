class AddCurrentFundingColumnToUserModel < ActiveRecord::Migration
  def change
    add_column :projects, :current_funding, :integer, null:false
  end
end
