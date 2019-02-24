function showProduct(id) {
  $.get("/products/" + id + ".json", function (product) {
    // debugger
    let prefix = `#product-${id}-`
    $(prefix+'description').html(product.description)
    var inventoryText = "<b>Available</b>"
    if (product.inventory < 0)
      inventoryText = "<b>Sold Out</b>"     
    $(prefix + 'inventory').html(inventoryText)
  });
}