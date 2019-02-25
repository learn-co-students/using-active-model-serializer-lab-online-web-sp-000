function showProduct(id) {
  $.get("/products/" + id + ".json", function(product) {
    let div = `#product-${id} `;
    $(div + ".description").html(product.description);
    let inventoryText = "Available";
    if (product.inventory < 0) inventoryText = "Sold Out";
    $(div + ".inventory").html(`<b>${inventoryText}</b>`);
    showOrders(product);
  });
}

function showOrders(product) {
  let section = $(`#product-${product.id} .orders`)
  section.append("<b>Orders</b>")
  let html = "<ul>"
  for (order of product.orders) {
    html += `<li>#${order.id} - created at ${order.created_at}</li>`
  }
  section.append(html)
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
