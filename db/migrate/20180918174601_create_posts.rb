class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :breakfast
      t.string :lunch
      t.string :dinner
      t.string :date, default: Time.new.strftime("%m/%d/%Y")
      t.timestamps
    end
  end
end
