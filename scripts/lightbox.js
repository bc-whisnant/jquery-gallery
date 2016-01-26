

var $overlay = $('<div id="overlay"><div></div></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
var $index = 0;
var $galleryLength = $("#gallery-img li").length;



$overlay.children("div").append($image);
$overlay.children("div").append($caption);

$overlay.children("div").append("<button id='btnPrev'> < </button>");
$overlay.children("div").append("<button id='closeButton'> X </button>");
$overlay.children("div").append("<button id='btnNext'> > </button>");

$("body").append($overlay);







var updateImage = function(imageLocation, imageCaption){

  $image.attr("src", imageLocation);

  $caption.text(imageCaption);


};


$("#gallery-img a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  var imageCaption =  $(this).children("img").attr("alt");

 
  $index = $(this).parent().index(); 


  updateImage(imageLocation, imageCaption);


  $overlay.slideDown(imageLocation);


});



var prevNext = function(prev ) {

  if(!prev) { $index++; }
  else { $index--; }

  
  if ($index < 0) { $index = $galleryLength-1;}
  if ($index > 10) { $index = 0; }

  var newImgSelected = $("#gallery-img li").get($index).getElementsByTagName("a");


  var imageLocation = $(newImgSelected).attr("href");
  var imageCaption =  $(newImgSelected).children("img").attr("alt");

  
  updateImage(imageLocation, imageCaption);
};



$("#btnPrev").click(function(event){
  prevNext(true);
});

$("#btnNext").click(function(event){
  prevNext();
});




$overlay.click(function(event){
 

    if(event.target.id == "overlay")
    $(this).slideUp("fast");
	

});

//added close function
$("#closeButton").click(function(event){
  $overlay.hide();

});




