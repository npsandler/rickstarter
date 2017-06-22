class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :title, null: false
      t.date :end_date, null: false
      t.integer :funding_goal, null: false
      t.text :details, null: false
      t.integer :creator_id, null: false
      t.string :category, null: false

      t.timestamps null: false
    end
    add_index :projects, :creator_id
  end
end
