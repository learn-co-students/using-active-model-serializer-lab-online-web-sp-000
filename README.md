# Using ActiveModel::Serializer Lab

it 'loads next product without page refresh', js: true do
  p1 = Product.create!(name: "Test Product", inventory: 0, description: "This is a test description with more text than should be there.", price: "2.99")
  p2 = Product.create!(name: "Test Product 2", inventory: 1, description: "This is a second test description with more text than should be there.", price: "1.99")

  visit product_path(p1)
  expect(page).to have_content p1.name
  expect(page).to have_content p1.description
  click_link "Next Product"
  expect(page).to have_content p2.name
  expect(page).to have_content p2.description
end
end

describe "products index" do
it 'gets the description and inventory', js: true do
  product = Product.create!(name: "Test Product", inventory: 0, description: "This is a test description with more text than should be there.")
  customer = Customer.create(:name => Faker::Name.name)
  invoice = Invoice.create
  order = Order.create(customer: customer, invoice: invoice)

  order.products << product
  visit products_path
  expect(page).to have_content(product.name, count: 1)
  expect(page).not_to have_content product.description
  click_button "More Info"
  expect(page).to have_content product.description
  expect(page).to have_content "Sold Out"
  product.inventory = 1
  product.save
  visit products_path
  click_button "More Info"
  expect(page).to have_content "Available"

## Objectives

  1. Use AMS to render JSON.
  2. Use AMS to render JSON associations.

## Introduction

We're going to continue updating our products/orders system to use
ActiveModel::Serializer for JSON serialization. The solution to the
previous lab is provided.

Don't forget to run `rake db:seed` for some starter data and lots of
Latin practice!

## Instructions

1. Create an ActiveModel::Serializer for `Product` and update the
   `products_controller` to use the new serializer in place of the
existing `to_json` code.
2. Update the product show page to handle the new JSON.
3. On the products `index` page, update the `More Info` button so that it
   uses the `/products/id.json` route to get both description and
inventory.
  * **Note:** The serializer will return a different value for
    `inventory` than the previous API, so you'll have to handle that.
4. Update the `ProductSerializer` to include the orders for the product.
5. Update the `More Info` button on the products `index` page to show a
   list of orders with `id` and `created_at` in addition to the
description and inventory.
6. Update the `OrderSerializer` to include the product names of all
   products on that order.
7. Get rid of the unused `/products/id/description` and
   `/products/id/inventory` routes.
8. Make sure tests pass!
