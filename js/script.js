$(document).ready(function() {

    $('.bigbutton').on('click', function() {
  
      //this scroll withour animations in chrome
      $('#container').get(0).scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
  
    });
})