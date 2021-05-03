
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
	    $(".my-nav").css("background" , "black");
	  }

	  else{
		  $(".my-nav").css("background" , "transparent");  	
	  }
  })
})

 