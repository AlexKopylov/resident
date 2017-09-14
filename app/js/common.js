$(function() {

	// $(".param__list");

	$(document).ready(function(){
		$(".owl-carousel").owlCarousel({
			// loop:true,
			// margin:10,
			// dots:false,
			// nav:true,
			// responsive:{
			// 	0:{
			// 		items:1
			// 	},
			// 	600:{
			// 		items:3
			// 	},
			// 	1000:{
			// 		items:5
			// 	}
			// }
			loop: true,
			autoplay: true,
			items: 1,
			nav: true,
			autoplayHoverPause: true,
			animateOut: 'slideOutUp',
			animateIn: 'slideInUp'

		});
	});
});
