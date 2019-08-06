class ProductSerializer < ActiveModel::Serializer
  has_many :orders
  attributes :id, :name, :inventory, :description, :price
end
