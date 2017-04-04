/*Main JS*/
(function ($, window, document, undefined) {

	'use strict';

	var ANIMATION_TIME = 1200;

	function numberAnimation(element, time, decimalPlaces){

		var maxValueText = element.html();

		var maxValue = parseFloat(maxValueText);
		maxValue = maxValue.toFixed(decimalPlaces);

		var currentValue = 0;
		var addQuantity = maxValue / 50;
		var speed = Math.round(time / (maxValue / addQuantity));

		var interval = setInterval(function(){


			if (currentValue >= maxValue) {

				setTimeout(function(){
					element.html(maxValue);

				}, speed);

				clearInterval(interval);



			}else{

				currentValue+=addQuantity;

			}

			element.html(currentValue.toFixed(decimalPlaces));


		}, speed);

		
	}

	function progressiveAnimation() {
		$(this)
		.addClass('loading')
		.delay(70 * $(this).index())
		.queue(function() {
			$(this).dequeue().removeClass('loading');
		});
	};



	function animateGraphs(){
		var svg = new Walkway({
			selector: '.walk-away',
			duration: ANIMATION_TIME,
			easing: 'linear'
		});
		svg.draw();
	}


	function animateNumbers(){
		//Animate numbers to increase until its final value is reached
		var animatedNumbers = $('.animated-number');
		animatedNumbers.each(function(){
			numberAnimation($(this), ANIMATION_TIME, $(this).attr('data-decimals'));
		});
	}

	function animateAll(){
		animateGraphs();
		animateNumbers();
	}

	function loadCarousel(element){
		element.owlCarousel({
			loop:false,
			margin:10,
			nav:true,
			navText: ["<span class='glyphicon glyphicon-chevron-left'></span>","<span class='glyphicon glyphicon-chevron-right'></span>"],

			responsive:{
				0:{
					items:1
				},
				768:{
					items:3
				},
				1170:{
					items:4
				}
			}
		});
	}


	$('#sidebar-toggler').click(function(){
		$('html').toggleClass('sidebar-active');
	});


	$('#set-list-view').click(function(){
		$('#cards').attr('data-view-mode', 'list');
		$('.owl-carousel').owlCarousel('destroy');
		$('.owl-carousel').find('.item').each(progressiveAnimation);
	});

	$('#set-carousel-view').click(function(){
		$('#cards').attr('data-view-mode', 'carousel');
		loadCarousel($('.owl-carousel'));
	});

	$('#set-grid-view').click(function(){
		$('#cards').attr('data-view-mode', 'grid');
		$('.owl-carousel').owlCarousel('destroy');
		$('.owl-carousel').find('.item').each(progressiveAnimation);
	});


	$('.toggler[data-target="#read-more"]').click(function(){
		$(this).closest('.description').toggleClass('open');
	});


	$('#order-by .dropdown-menu a').click(function(){
		$('#filter-tag').html($(this).html());
	});


	if(!('ontouchstart' in window))
	{
		$('[data-toggle="tooltip"]').tooltip({
			trigger : 'hover'
		});
	}




	loadCarousel($('.owl-carousel'));
	animateAll();


})(jQuery, window, document);