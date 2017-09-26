$(function () {

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

	'use strict'

	var DOM = {}
	DOM.menu = document.querySelector('.menu')
	DOM.intro = document.querySelector('.menu__inner')
	DOM.shape = DOM.intro.querySelector('svg.shape')
	DOM.path = DOM.shape.querySelector('path')
	DOM.enter = document.querySelector('#menu-btn')
	DOM.close = document.querySelector('.btn-close')

// Set the SVG transform origin.
	DOM.shape.style.transformOrigin = '50% 0%'

	var init = function init () {
		//imagesLoaded(document.body, {background: true} , () => document.body.classList.remove('loading'));
		DOM.enter.addEventListener('click', navigate)
		DOM.close.addEventListener('click', menuClose)
		DOM.enter.addEventListener('touchenter', navigate)
	}

	var loaded = void 0
	var path = DOM.path.getAttribute('d')
	var pathdata = DOM.path.getAttribute('pathdata:id')
	var navigate = function navigate () {

		loaded = true
		DOM.menu.style.display = 'block'
		anime({
			targets: DOM.intro,
			duration: 1200,
			easing: 'easeInOutSine',
			translateY: '130%'
		})

		anime({
			targets: DOM.shape,
			scaleY: [{value: [0.8, 1.8], duration: 650, easing: 'easeInQuad'}, {
				value: 1,
				duration: 650,
				easing: 'easeOutQuad'
			}]
		})

		anime({
			targets: DOM.path,
			duration: 1200,
			easing: 'easeOutQuad',
			d: pathdata
		})

	}
	var menuClose = function navigate () {

		setTimeout(function () {
			DOM.menu.style.display = 'none'
		}, 1300)
		anime({
			targets: DOM.intro,
			duration: 1200,
			easing: 'easeInOutSine',
			translateY: '0'
		})

		anime({
			targets: DOM.shape,
			scaleY: [{value: [0.8, 1.8], duration: 550, easing: 'easeInQuad'}, {
				value: 1,
				duration: 550,
				easing: 'easeOutQuad'
			}]
		})

		anime({
			targets: DOM.path,
			duration: 1200,
			easing: 'easeOutQuad',
			d: path
		})

		loaded = false

	}

	init()
	//================/END

	//================
	// basic paging logic to demo the buttons
	var pr = document.querySelector('.paginate.left')
	var pl = document.querySelector('.paginate.right')

	pr.onclick = slide.bind(this, -1)
	pl.onclick = slide.bind(this, 1)

	var index = 1, total = 10

	function slide (offset) {
		index = Math.min(Math.max(index + offset, 0), total - 1)

		document.querySelector('.counter').innerHTML = ( index + 1 );

		pr.setAttribute('data-state', index === 0 ? 'disabled' : '')
		pl.setAttribute('data-state', index === total - 1 ? 'disabled' : '')
	}

	slide(0);
	//================/END
	//================

	(function () {
		'use strict'

		function ctrls () {
			var _this = this

			this.counter = 1
			this.els = {
				decrement: document.querySelector('.ctrl__button--decrement'),
				counter: {
					container: document.querySelector('.ctrl__counter'),
					num: document.querySelector('.ctrl__counter-num'),
					input: document.querySelector('.ctrl__counter-input')
				},
				increment: document.querySelector('.ctrl__button--increment')
			}

			this.decrement = function () {
				var counter = _this.getCounter()
				var nextCounter = (_this.counter > 0) ? --counter : counter
				_this.setCounter(nextCounter)
			}

			this.increment = function () {
				var counter = _this.getCounter()
				var nextCounter = (counter < 9999999999) ? ++counter : counter
				_this.setCounter(nextCounter)
			}

			this.getCounter = function () {
				return _this.counter
			}

			this.setCounter = function (nextCounter) {
				_this.counter = nextCounter
			}

			this.debounce = function (callback) {
				setTimeout(callback, 100)
			}

			this.render = function (hideClassName, visibleClassName) {
				_this.els.counter.num.classList.add(hideClassName)

				setTimeout(function () {
					_this.els.counter.num.innerText = _this.getCounter()
					_this.els.counter.input.value = _this.getCounter()
					_this.els.counter.num.classList.add(visibleClassName)
				}, 100)

				setTimeout(function () {
					_this.els.counter.num.classList.remove(hideClassName)
					_this.els.counter.num.classList.remove(visibleClassName)
				}, 200)
			}

			this.ready = function () {
				_this.els.decrement.addEventListener('click', function () {
					_this.debounce(function () {
						_this.decrement()
						_this.render('is-decrement-hide', 'is-decrement-visible')
					})
				})

				_this.els.increment.addEventListener('click', function () {
					_this.debounce(function () {
						_this.increment()
						_this.render('is-increment-hide', 'is-increment-visible')
					})
				})

				_this.els.counter.input.addEventListener('input', function (e) {
					var parseValue = parseInt(e.target.value)
					if (!isNaN(parseValue) && parseValue >= 0) {
						_this.setCounter(parseValue)
						_this.render()
					}
				})

				_this.els.counter.input.addEventListener('focus', function (e) {
					_this.els.counter.container.classList.add('is-input')
				})

				_this.els.counter.input.addEventListener('blur', function (e) {
					_this.els.counter.container.classList.remove('is-input')
					_this.render()
				})
			}
		}

		// init
		var controls = new ctrls()
		document.addEventListener('DOMContentLoaded', controls.ready)
	})()
	//================/END

// END all function
})
