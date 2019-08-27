class CreateSerializers < ActiveRecord::Migration[5.0]
  def change
    create_table :serializers do |t|
      t.string :product

      t.timestamps
    end
  end
end
