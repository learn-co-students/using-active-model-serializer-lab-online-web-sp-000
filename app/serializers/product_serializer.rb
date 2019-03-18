class ProductSerializer < ActiveModel::Serializer
  attributes :id, :description, :name, :price, :inventory
  has_many :orders
end
