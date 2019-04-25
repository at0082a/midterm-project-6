$(() => {
  $.ajax({
    method: "GET",
    url: "/api/menu"
  }).done((items) => {
    for(item of items) {
      $("<div>").text(item.name).appendTo($("body"));
    }
  });;
});
$(document).ready(function(){
  //find code to increse quntity
  $('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value >= 1) {
        value = value - 1;
    } else {
        value = 0;
    }

  $input.val(value);

  });

  $('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value < 100) {
        value = value + 1;
    } else {
        value =100;
    }

    $input.val(value);
  });
})
