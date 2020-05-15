class AddPlanRefToUsers < ActiveRecord::Migration[5.1]
  def change
    add_reference :users, :plan, foreign_key: true
  end
end
