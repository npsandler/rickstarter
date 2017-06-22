class AddDefaultValueToCurrentFunding < ActiveRecord::Migration
  def change
     change_column :projects, :current_funding, :integer, default: 0
  end
end
