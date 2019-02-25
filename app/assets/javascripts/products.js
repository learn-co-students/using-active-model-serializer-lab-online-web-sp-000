function showProduct(id) {
  $.get("/products/" + id + ".json", function (product) {
    let prefix = `#product-${id}-`
    $(prefix+'description').html(product.description)
    let inventoryText = "<b>Available</b>"
    if (product.inventory < 0)
      inventoryText = "<b>Sold Out</b>"     
    $(prefix + 'inventory').html(inventoryText)
  });
  let orders = product.orders
}

function loadNext(currentId) {
  let nextId = currentId + 1;
  $.get("/products/" + nextId + ".json", function (data) {
    $(".productName").text(data["name"]);
    $(".productPrice").text(data["price"]);
    $(".productDescription").text(data["description"]);
    $(".productInventory").text(data["inventory"]);
    // re-set the id to current on the link
    $(".js-next").attr("data-id", data["id"]);
  });
}