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
      $('#order-container').append($item);
    }

  }
  $(document).ready(function() {

//This code creates an array of object when an item is added

    let itemCount = 0;
    let orderArray = [];
    $('.add-to-cart').on('click', function(event) {
      event.preventDefault();
      itemCount++
      $('.item-counter').text(itemCount);
      let displayID = parseInt($(this).attr("id"));
      inputdata.forEach(function(item) {
        if (displayID === item.id) {
          orderArray.push(item)
        }
      })
    })
  });

};

function createItemElement(data) {
  let catId           = parseInt(data.category_id);
  let itemName        = data.name;
  let price           = data.price;
  let catname         = '';
  if (catId === 1) {
    catname = 'Pizza';
  } else if (catId === 2){
    catname = 'Burger';
  } else if (catId === 3){
    catname = 'Drinks';
  } else if (catId === 4){
    catname = 'Wings';
  } else if (catId === 5){
    catname = 'Salads';
  }

  let HTMLToAppend = `<td data-th="Product">
                      <div class="row">
                      <div class="col-sm-10">
                      <p>${catname}-${itemName}Chicken</p>
                      </div>
                      </div>
                      </td>
                      <td data-th="Price">$${price}</td>
                      <td data-th="Quantity">
                      <input type="number" class="form-control text-center" value="1">
                      </td>
                      <td data-th="Subtotal" class="text-center">1.99</td>
                      <td class="actions" data-th="">
                      <button class="btn btn-danger btn-sm delete-btn"><i class="fas fa-trash-alt"></i></button>
                      </td>`;
  return HTMLToAppend;
};
