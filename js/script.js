$('.wrapper').addClass('loaded');

$('.header__burger').click(function(event) {
	$(this).toggleClass('active');
	$('header__burger,.header__menu').toggleClass('active');
	$('body').toggleClass('lock');
});

function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		adaptiveHeight:true,
		autoplay:true,
		autoplaySpeed:5000,
		pauseOnFocus:false,
		pauseOnHover:false,
	});
		$('.slider2').slick({
		slidesToShow:3,
	});
});