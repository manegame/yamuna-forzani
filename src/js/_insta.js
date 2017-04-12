instaShow = function(event) {

	$('#insta-text').css({
     		left:  event.pageX,
     		top:   event.pageY
  	});

	if ( $(window).width() > 768 && event.pageX <  100){

		$('#insta-text').css({'left' : '20px'}).fadeIn(500);
		$('#instagram').removeClass('blue mint').addClass('pink').fadeIn(500);
		$('#widget').removeClass('blue-border pink-border').addClass('mint-border').fadeIn(500);

	} else if( $(window).width() > 768 && event.pageX > $(window).width() - 100 ){

		$('#insta-text').css({'left' : $(window).width() - $('#insta-text').width() - 20 }).fadeIn(500);

		$('#widget').css({'cursor': 'pointer'}).click(function(){
			window.open('https://www.instagram.com/yamunaforzani/', '_blank');
		});

		$('#instagram').removeClass('pink blue').addClass('mint').fadeIn(500);

		$('#widget').removeClass('mint-border pink-border').addClass('pink-border').fadeIn(500);

	} else {
		$('body').css({'cursor': 'default'});

		$('#insta-text').hide();

		$('#instagram').hide();

		$('#widget').removeClass('mint-border pink-border blue-border').hide();

	}
}
