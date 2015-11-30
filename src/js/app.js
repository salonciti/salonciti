$(document).ready(function() {

  $("#main-slideshow").owlCarousel({
    navigation : false, // Show next and prev buttons
    autoPlay: true,
    stopOnHover: true,
    autoHeight: true,
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true
  });

  var gallery = document.querySelector('.gallery');

  var msnry = new Masonry( gallery, {
    itemSelector: '.gallery-item',
    columnWidth: '.gallery-sizer',
    percentPosition: true
  });

  imagesLoaded( gallery, function() {
    // layout Masonry after each image loads
    msnry.layout();
  });

  $(".stylist" ).hover(
    function() {
      $(this).find("div.book").removeClass("invisible");
    }, function() {
      $(this).find("div.book").addClass("invisible");
    }
  );

});
