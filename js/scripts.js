$(document).ready(function(){
    $("#dev-img").click(function(){
    $("#dev-img").toggle();
    $("#development").toggle();
  });
      $("#development").click(function(){
        $("#development").slideUp();
        $("#dev-img").slideDown();
      });
     
  });
  $(document).ready(function(){
    $("#design-img").click(function(){
    $("#design-img").slideToggle();
    $("#design").slideToggle();
  });
      $("#design").click(function(){
        $("#design").slideUp();
        $("#design-img").slideDown();
      });
     
  });
  $(document).ready(function(){
    $("#product-img").click(function(){
    $("#product-img").toggle();
    $("#product").toggle();
  });
      $("#product").click(function(){
        $("#product").slideUp();
        $("#product-img").slideDown();
      });
  });
  $(document).ready(function(){
    $('#contact form').submit(function (){
        let name  =  $('input#name').val();
        let email  = $('input#email').val()
        let  message = $('input#message').val()

        alert('Hello ' + name + ' we have received your message thank you for reaching out')
    });
})