class AddDescriptionColumnToProject < ActiveRecord::Migration
  def change
    add_column :projects, :description, :text, null: false
  end
end
