class ChangeNumRemainingInProjects < ActiveRecord::Migration
  def change
    add_column :projects, :num_allowed, :integer
  end
end
