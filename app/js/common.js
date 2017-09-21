$(function() {

	// $(".param__list");
	//
	// const DOM = {};
	// DOM.menu = document.querySelector('.menu');
	// DOM.intro = document.querySelector('.menu__inner');
	// DOM.shape = DOM.intro.querySelector('svg.shape');
	// DOM.path = DOM.shape.querySelector('path');
	// DOM.enter = document.querySelector('.lol');
	//
	//
	// // Set the SVG transform origin.
	// DOM.shape.style.transformOrigin = '50% 0%';
	//
	// const init = () => {
	// 	//imagesLoaded(document.body, {background: true} , () => document.body.classList.remove('loading'));
	// 	DOM.enter.addEventListener('click', navigate);
	// 	DOM.enter.addEventListener('touchenter', navigate);
	// };
	//
	// let loaded;
	// var path = DOM.path.getAttribute('d');
	// var pathdata = DOM.path.getAttribute('pathdata:id');
	// const navigate = () => {
	// 	if ( loaded ) {
	// 		setTimeout(function(){
	// 			DOM.menu.style.display = 'none';
	// 		},1300);
	// 		anime({
	// 			targets: DOM.intro,
	// 			duration: 1200,
	// 			easing: 'easeInOutSine',
	// 			translateY: '0'
	// 		});
	//
	// 		anime({
	// 			targets: DOM.shape,
	// 			scaleY: [
	// 				{value:[0.8,1.8],duration: 550,easing: 'easeInQuad'},
	// 				{value:1,duration: 550,easing: 'easeOutQuad'}
	// 			]
	// 		});
	//
	// 		anime({
	// 			targets: DOM.path,
	// 			duration: 1200,
	// 			easing: 'easeOutQuad',
	// 			d: path
	// 		});
	//
	// 		loaded = false;
	// 	} else {
	// 		loaded = true;
	// 		DOM.menu.style.display = 'block';
	// 		anime({
	// 			targets: DOM.intro,
	// 			duration: 1200,
	// 			easing: 'easeInOutSine',
	// 			translateY: '130%'
	// 		});
	//
	// 		anime({
	// 			targets: DOM.shape,
	// 			scaleY: [
	// 				{value:[0.8,1.8],duration: 650,easing: 'easeInQuad'},
	// 				{value:1,duration: 650,easing: 'easeOutQuad'}
	// 			]
	// 		});
	//
	// 		anime({
	// 			targets: DOM.path,
	// 			duration: 1200,
	// 			easing: 'easeOutQuad',
	// 			d: pathdata
	// 		});
	// 	}
	// };
	//
	//
	// init();


	'use strict';

	var DOM = {};
	DOM.menu = document.querySelector('.menu');
	DOM.intro = document.querySelector('.menu__inner');
	DOM.shape = DOM.intro.querySelector('svg.shape');
	DOM.path = DOM.shape.querySelector('path');
	DOM.enter = document.querySelector('#menu-btn');
	DOM.close = document.querySelector('.btn-close');

// Set the SVG transform origin.
	DOM.shape.style.transformOrigin = '50% 0%';

	var init = function init() {
		//imagesLoaded(document.body, {background: true} , () => document.body.classList.remove('loading'));
		DOM.enter.addEventListener('click', navigate);
		DOM.close.addEventListener('click', menuClose);
		DOM.enter.addEventListener('touchenter', navigate);
	};

	var loaded = void 0;
	var path = DOM.path.getAttribute('d');
	var pathdata = DOM.path.getAttribute('pathdata:id');
	var navigate = function navigate() {

			loaded = true;
			DOM.menu.style.display = 'block';
			anime({
				targets: DOM.intro,
				duration: 1200,
				easing: 'easeInOutSine',
				translateY: '130%'
			});

			anime({
				targets: DOM.shape,
				scaleY: [{ value: [0.8, 1.8], duration: 650, easing: 'easeInQuad' }, { value: 1, duration: 650, easing: 'easeOutQuad' }]
			});

			anime({
				targets: DOM.path,
				duration: 1200,
				easing: 'easeOutQuad',
				d: pathdata
			});

	};
	var menuClose = function navigate() {

			setTimeout(function () {
				DOM.menu.style.display = 'none';
			}, 1300);
			anime({
				targets: DOM.intro,
				duration: 1200,
				easing: 'easeInOutSine',
				translateY: '0'
			});

			anime({
				targets: DOM.shape,
				scaleY: [{ value: [0.8, 1.8], duration: 550, easing: 'easeInQuad' }, { value: 1, duration: 550, easing: 'easeOutQuad' }]
			});

			anime({
				targets: DOM.path,
				duration: 1200,
				easing: 'easeOutQuad',
				d: path
			});

			loaded = false;

	};

	init();



// END all function
});
