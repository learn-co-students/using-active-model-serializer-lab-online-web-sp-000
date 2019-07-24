class ProdductSerializerSerializer < ActiveModel::Serializer
  attributes :id, :name, :inventory, :description, :price
  belongs_to :order
end
