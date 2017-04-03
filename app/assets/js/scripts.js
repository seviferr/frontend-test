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

				currentValue+=addQuantity

			}

			element.html(currentValue.toFixed(decimalPlaces));


		}, speed);

		
	}

	var progressiveAnimation = function(element) {
		$(this)
		.addClass('loading')
		.delay(70 * $(this).index())
		.queue(function() {
			$(this).dequeue().removeClass('loading')
		})
	}

	function mycallback(){
		console.log("asdadad");
	}

	$("#sidebar-toggler").click(function(){
		$("html").toggleClass("sidebar-active");
	});




	// setCards();




	$('.owl-carousel').owlCarousel({
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

	$('#set-list-view').click(function(){
		$('#cards').attr('data-view-mode', 'list');
		$('.owl-carousel').owlCarousel('destroy');
		$('.owl-carousel').find('.item').each(progressiveAnimation);
	});

	$('#set-carousel-view').click(function(){
		$('#cards').attr('data-view-mode', 'carousel');
		
		$('.owl-carousel').owlCarousel({
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







	});

	$('#set-grid-view').click(function(){
		$('#cards').attr('data-view-mode', 'grid');
		$('.owl-carousel').owlCarousel('destroy');

		$('.owl-carousel').find('.item').each(progressiveAnimation);
		

	});


	$('.toggler[data-target="#read-more"]').click(function(){
		$(this).closest('.description').toggleClass('open');
	});


	/* animate filter */
	var owlAnimateFilter = function(even) {
		$(this)
		.addClass('__loading')
		.delay(70 * $(this).parent().index())
		.queue(function() {
			$(this).dequeue().removeClass('__loading')
		})
	}


	// $('#in-portfolio').on('change', function(){
		

	// 	if($(this).prop("checked") === true){

	// 		var filter_data = ".in-portfolio";

	// 	}else{

	// 		var filter_data = "*";


	// 	}

	// 	console.log($('.owl-carousel').owlFilter());



	// });








	//Drawing svg graphs
	var svg = new Walkway({
		selector: '.walk-away',
		duration: ANIMATION_TIME,
		easing: 'linear'
	});
	svg.draw();


	//Animate numbers to increase until its final value is reached
	var animatedNumbers = $('.animated-number');
	animatedNumbers.each(function(){
		numberAnimation($(this), ANIMATION_TIME, $(this).attr('data-decimals'));
	});




	



})(jQuery, window, document);