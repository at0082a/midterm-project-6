$(() => {
  $.ajax({
    method: "GET",
    url: "/api/order"
  }).done((items) => {
    renderItems(items);
  });;
});

function renderItems(inputdata) {
  $('#order-container').empty();

  for (let item of inputdata) {
    var $item = createItemElement(item);
    $('#order-container').append($item);
  }

  $(document).ready(function() {
    $('.delete-button').on('click', function(event) {
      event.preventDefault();
      let displayID = parseInt($(this).attr("id"));
      inputdata.forEach(function(item) {
        if (displayID === item.item_id) {
          let cartdata = JSON.stringify(item)
          console.log('cartdata', cartdata)
          $.ajax({
            type: "POST",
            url: "/order/delete",
            contentType: "application/json",
            data: cartdata,
            success: (function() {
              location.reload()
              console.log("Post Successful")
            })
          })
        }
      })
    })
  });
};

function createItemElement(data) {
  let categoryName    = data.category_name;
  let itemName        = data.item_name;
  let price           = data.real_price
  let itemId          = data.item_id

  let HTMLToAppend = `<tr>
                      <td data-th="Product">
                      <div class="row">
                      <div class="col-sm-10">
                      <p>${categoryName}-${itemName}</p>
                      </div>
                      </div>
                      </td>
                      <td data-th="Price">$${price}</td>
                      <td data-th="Quantity">
                      <input type="number" class="form-control text-center" value="1">
                      </td>
                      <td class="actions" data-th="">
                      <form method="POST" action="/order/delete">
                        <button id="${itemId}" type="submit" class="btn btn-danger btn-sm delete-btn delete-button"><i class="fas fa-trash-alt"></i></button>
                      </form>
                      </td>
                      </tr>`;
  return HTMLToAppend;
};
