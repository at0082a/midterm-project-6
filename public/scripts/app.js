// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });
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




$(document).ready(function() {
  //checkout page
  $("#currentYear").text(new Date().getFullYear());
  validateCheckoutform();
  attachTopScroller(".scrollUp");
});

function validateCheckoutform() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.getElementsByClassName("needs-validation");

  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener(
      "submit",
      function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
}
function attachTopScroller (elementId){
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          $(elementId).fadeIn();
      } else {
          $(elementId).fadeOut();
      }
  });
  // Scroll To Top Animation
  $(elementId).click(function() {
      $("html, body").animate({
          scrollTop: 0
      }, 1000);
      return false;
  });
};