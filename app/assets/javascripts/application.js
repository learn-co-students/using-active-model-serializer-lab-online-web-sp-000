// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

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