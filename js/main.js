

$(document).ready(function(){

	
	// 100% height js for box sections
	var bodyhight = $("body , html").height() + $(".slider-container").height() - $(".slider-wrapper").height() ; 
    $('.main .box').height(bodyhight);
    
 
    // click me button event
    $("#click-me").click(function(e){
    	e.preventDefault();
    	$("body").toggleClass('body-bg2');
    	$("h1").toggleClass("change-color");

    });
    // slider js here

    //step1- variable initilize. 
    var currentIndex = 0,
    items = $('.slider-wrapper .slider-container'),
    itemAmt = items.length;


	function cycleItems() {
	  var item = $('.slider-wrapper .slider-container').eq(currentIndex);
	  items.hide();
	  item.css('display','inline-block');
	}

	var autoSlide = setInterval(function() {
	  currentIndex += 1;
	  if (currentIndex > itemAmt - 1) {
	    currentIndex = 0;
	  }
	  cycleItems();
	}, 3000);

	$('#next-slide').click(function(e) {
	  e.preventDefault();
	  clearInterval(autoSlide);
	  currentIndex += 1;
	  if (currentIndex > itemAmt - 1) {
	    currentIndex = 0;
	  }
	  cycleItems();
	});

	$('#prev-slide').click(function(e) {
	  e.preventDefault();
	  clearInterval(autoSlide);
	  currentIndex -= 1;
	  if (currentIndex < 0) {
	    currentIndex = itemAmt - 1;
	  }
	  cycleItems();
	});

});





