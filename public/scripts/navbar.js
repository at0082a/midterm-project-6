
   $(document).ready(function() {
      $(() => {
        $.ajax({
          method: "GET",
          url: "/api/order"
        }).done((items) => {
          console.log("Get Successful");
          renderItems(items);
        });;
      });
      function renderItems(inputdata) {
        let countOfItems = inputdata.length;
        console.log("countOfItems", countOfItems);
        $('#cart-count').text(countOfItems)
      };
   })
