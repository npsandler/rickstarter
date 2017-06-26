class RemoveNumberRemainingFromProjects < ActiveRecord::Migration
  def change
    remove_column :rewards, :number_remaining
  end
end
