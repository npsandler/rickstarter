class CreatePledges < ActiveRecord::Migration
  def change
    create_table :pledges do |t|
      t.integer :user_id, null: false
      t.integer :reward_id, null: false
      
      t.timestamps null: false
    end
    add_index :pledges, :user_id
    add_index :pledges, :reward_id
  end
end
