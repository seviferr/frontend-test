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

		// $('.owl-carousel').trigger('remove.owl.carousel', [0]);

	});


	$('.toggler[data-target="#read-more"]').click(function(){
		$(this).closest('.description').toggleClass('open');
	});


	$('#in-portfolio').on('change', function(){
		
		// var inPortfolio = $(".in-portfolio");

		if($(this).prop("checked") === true){
			
			$(".in-portfolio").css("display", "block");
			$('.owl-carousel').trigger('add.owl.carousel', [1, 2]);


		}else{
			$(".in-portfolio").css("display", "none");
			$('.owl-carousel').trigger('remove.owl.carousel', [1, 2]);

			
		}




	});




	


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