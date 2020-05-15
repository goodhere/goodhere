class CreatePlans < ActiveRecord::Migration[5.1]
  def change
    create_table :plans do |t|
      t.string :name
      t.string :stripe_id
      t.string :interval
      t.integer :amount

      t.timestamps
    end
  end
end
