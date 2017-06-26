class AddNumBackersToProjects < ActiveRecord::Migration
  def change
      add_column :projects, :num_backers, :integer, default: 0
  end
end
