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

    let itemCount = 0;
    let orderArray = [];
    let value = 0
    $('.Select1').on('change', function(event) {
      event.preventDefault();
      $(document).on('change',"[class*=Select1]",  function(event) {
        event.preventDefault();
        var $option = $(this).find('option:selected');
        value = $option.val();
      })
    })

    $('.add-to-cart').on('click', function(event) {
      event.preventDefault();
      itemCount++
      $('.item-counter').text(itemCount);
      let displayID = parseInt($(this).attr("id"));
      inputdata.forEach(function(item) {
        if (displayID === item.id) {
          // orderArray.push(item)
          item["newprice"] = value;
          let cartdata = JSON.stringify(item)
          $.ajax({
            type: "POST",
            url: "/api/order",
            contentType: "application/json",
            data: cartdata,
            success: (function() {
              console.log("Post Successful")
            })
          })
        }
      })
    })
    $( ".cat-p" ).click(function() {
      $( "#content-p" ).slideToggle( "slow" );
    });
    $( ".cat-b" ).click(function() {
      $( "#content-b" ).slideToggle( "slow" );
    });
    $( ".cat-w" ).click(function() {
      $( "#content-w" ).slideToggle( "slow" );
    });
    $( ".cat-d" ).click(function() {
      $( "#content-d" ).slideToggle( "slow" );
    });
    $( ".cat-s" ).click(function() {
      $( "#content-s" ).slideToggle( "slow" );
    });
  });

};


function createItemElement(data) {
  let itemName        = data.name;
  let price           = data.price;
  let priceSmall      = parseFloat(data.price * 0.5);
  let priceMedium     = parseFloat(data.price * 0.75);
  let priceInitial    = 0;
  let priceSmallFinal = priceSmall.toFixed(2);
  let priceMediumFinal = priceMedium.toFixed(2);
  let priceLargeFinal = data.price;
  let itemid          = data.id;
  let HTMLToAppend = `<div class="col-lg-6 item ${itemName}-${itemid}">
                      <p class="item-name">${itemName}</p>
                      <p class="price">$${price}</p>
                      <div class="size form-group">
                      <label for="sel1">Select size:</label>
                      <select class ="Select1" class="input-large">
                      <option value="${priceInitial}">Select Size</option>
                      <option value="${priceSmallFinal}">small - $${priceSmallFinal}</option>
                      <option value="${priceMediumFinal}">medium - $${priceMediumFinal}</option>
                      <option value="${priceLargeFinal}">large - $${priceLargeFinal}</option>
                      </select>
                      </div>
                      <button class="add-to-cart btn btn-outline-info btn-lg" id="${itemid}"><i class="fas fa-cart-plus"></i> Add</button>
                      <form method="POST" action="/menu">
                      </form>
                      </div>`;

return HTMLToAppend;
};



