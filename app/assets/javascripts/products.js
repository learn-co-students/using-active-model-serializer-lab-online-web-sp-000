function showProduct(id) {
  $.get("/products/" + id + ".json", function(product) {
    let div = `#product-${id} `;
    $(div + ".description").html(product.description);
    let inventoryText = "<b>Available</b>";
    if (product.inventory < 0) inventoryText = "<b>Sold Out</b>";
    $(div + ".inventory").html(inventoryText);
    showOrders(product);
  });
}

function showOrders(product) {
  for (order of product.orders) {
  }
}

function loadNext(currentId) {
  let nextId = currentId + 1;
  $.get("/products/" + nextId + ".json", function(data) {
    $(".productName").text(data["name"]);
    $(".productPrice").text(data["price"]);
    $(".productDescription").text(data["description"]);
    $(".productInventory").text(data["inventory"]);
    // re-set the id to current on the link
    $(".js-next").attr("data-id", data["id"]);
  });
}
