

$(document).ready(function(){
	// 100% height js for box sections
	var bodyhight = $("body , html").height();
    $('.main .box').height(bodyhight);
    

    // click me button event
    $("#click-me").click(function(e){
    	e.preventDefault();
    	$("body").toggleClass('body-bg2');
    	$("h1").toggleClass("change-color");

    });

});


