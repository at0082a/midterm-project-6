$(() => {
  $.ajax({
    method: "GET",
    url: "/api/menu"
  }).done((items) => {
    console.log(items)
    renderItems(items);
  });;
});

function renderItems(inputdata) {
  $('#pizza-container').empty();
  for (let item of inputdata) {
    if (item.category_id === 1) {
      var $item = createItemElement(item);
      $('#pizza-container').append($item);
    } else if (item.category_id === 2) {
      var $item = createItemElement(item);
      $('#burger-container').append($item);
    } else if (item.category_id === 3) {
      var $item = createItemElement(item);
      $('#drinks-container').append($item);
    } else if (item.category_id === 4) {
      var $item = createItemElement(item);
      $('#wings-container').append($item);
    } else if (item.category_id === 5) {
      var $item = createItemElement(item);
      $('#salads-container').append($item);
    }

  }
};

function createItemElement(data) {
  let itemName        = data.name;
  let price           = data.price;
  let itemid          = data.id
  let HTMLToAppend = `<div class="col-md-6 class="${itemName}-${itemid}"">
                      <form method="POST" action="/order">
                      <p>${itemName}</p>
                      <p>$${price}</p>
                      <button class="add-to-cart">add</button>
                      </form>
                      </div>`;
  return HTMLToAppend;
};








