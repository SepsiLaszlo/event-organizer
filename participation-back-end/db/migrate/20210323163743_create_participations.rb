class CreateParticipations < ActiveRecord::Migration[6.1]
  def change
    create_table :participations do |t|
      t.integer :event_id, null: false
      t.integer :user_id, null: false
      t.string :user_name

      t.timestamps
    end
    add_index :participations, [:event_id, :user_id], unique: true
  end
end
