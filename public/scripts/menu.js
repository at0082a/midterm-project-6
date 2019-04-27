 $(() => {
   $.ajax({
     method: "GET",
     url: "/api/menu"
   }).done((items) => {
     renderItems(items);
   });;
 });

 function renderItems(inputdata) {
   console.log(inputdata);
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
          item["newprice"] = item.price * 2;
          // orderArray.push(item)
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
      // let cartdata = JSON.stringify(orderArray)
      // $.ajax({
      //   type: "POST",
      //   url: "/api/order",
      //   contentType: "application/json",
      //   data: cartdata,
      //   success: (function() {
      //     console.log("Post Successful")
      //   })
      // })
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
  let itemid          = data.id;
  //let image           = `/images/${data.name}.jpg`;
  // <img src="${image}">
  //console.log(image);
  let HTMLToAppend = `<div class="col-md-6 item ${itemName}-${itemid}">
                      <p class="item-name">${itemName}</p>
                      <p class="price">$${price}</p>
                      <div class="size form-group">
                      <label for="sel1">Select size:</label>
                      <select id ="Select1" class="input-large">
                      <option>small</option>
                      <option>medium</option>
                      <option>large</option>
                      </select>
                      </div>
                      <button class="add-to-cart btn btn-outline-info btn-lg" id="${itemid}"><i class="fas fa-cart-plus"></i> Add</button>
                      <form method="POST" action="/menu">
                      </form>
                      </div>`;
return HTMLToAppend;
};



