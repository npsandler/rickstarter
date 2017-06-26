class CreateRewards < ActiveRecord::Migration
  def change
    create_table :rewards do |t|
      t.integer :project_id, null: false
      t.string :title, null: false
      t.integer :pledge_amount, null: false
      t.text :description, null: false
      t.integer :number_remaining, null: false

      t.timestamps null: false
    end
    add_index :rewards, :project_id
  end
end
