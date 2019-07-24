class OrderSerializer < ActiveModel::Serializer
  attributes :id, :serializer
  has_many :products
end
