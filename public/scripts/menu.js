$(() => {
  $.ajax({
    method: "GET",
    url: "/api/menu"
  }).done((items) => {
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
          //item["newprice"] = item.price * 2;
          orderArray.push(item)
        }
      })
          console.log("orderArray", orderArray);
    })

    $('#shopping-cart').on('click', function(event) {
      event.preventDefault();
      let cart = JSON.stringify(orderArray)
      console.log(cart);
    })

  });

};

function createItemElement(data) {
  let itemName        = data.name;
  let price           = data.price;
  let itemid          = data.id;
  //let image           = `/images/${data.name}.jpg`;
  // <img src="${image}">
  //console.log(image);
  let HTMLToAppend = `<div class="col-md-6 class="${itemName}-${itemid}">
                      <p>${itemName}</p>
                      <p>$${price}</p>
                      <button class="add-to-cart" id="${itemid}">add</button>
                      <form method="POST" action="/menu">
                      </form>
                      </div>`;
  return HTMLToAppend;
};








