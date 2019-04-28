$(() => {
  $.ajax({
    method: "GET",
    url: "/api/order"
  }).done((items) => {
    renderItems(items);
  });;
});

function renderItems(inputdata) {
  let countOfItems = inputdata.length;
  let total = 0;
  $('#itemcounter').text(countOfItems)
  $('#product-container').empty();

  for (let item of inputdata) {
    total += item.real_price;
    var $item = createItemElement(item);
    $('#product-container').append($item);
  }

  // let finalTotal = total.toFixed(2);
  let finalTotal = total.toFixed(2);
  let hst        = finalTotal * 0.13;
  let finalhst   = hst.toFixed(2);
  let checkoutValue = parseFloat(finalTotal) + parseFloat(finalhst);
  let finalCheckoutValue = checkoutValue.toFixed(2);
  let $totalToAppend = `<li class="list-group-item d-flex justify-content-between">
                       <span>Total + HST</span>
                       <p id="cart-total"><strong>$${finalCheckoutValue}</strong></p>
                       </li>`;

  $('#product-container').append($totalToAppend);

};

function createItemElement(data) {
  let categoryName    = data.category_name;
  let itemName        = data.item_name;
  let price           = data.real_price
  let itemId          = data.item_id

  let HTMLToAppend = `<li class="list-group-item d-flex justify-content-between lh-condensed">
                      <div>
                      <h6 class="my-0">${itemName} ${categoryName}</h6>
                      </div>
                      <span class="text-muted">$${price}</span>
                      </li>`;
  return HTMLToAppend;
};


