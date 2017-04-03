/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2017. MIT licensed.
 */
/*Main JS*/
(function ($, window, document, undefined) {

	'use strict';

	var ANIMATION_TIME = 1200;

	// function formatNumberPoint(x) {
	// 	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	// }

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


		

		


		// console.log('maxValue: ' + maxValue);	
		// console.log('speed: ' + speed);	
		// console.log('time: ' + time);	
		// console.log('addQuantity: ' + addQuantity);	

		
	}


	$("#sidebar-toggler").click(function(){

		$("html").toggleClass("sidebar-active");

	});



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


	$(".toggler[data-target='#read-more']").click(function(){
		console.log("asd");
		$(this).closest('.description').toggleClass("open");
	});
		
	



	var svg = new Walkway({
		selector: '.walk-away',
		duration: ANIMATION_TIME,
		easing: 'linear'
	});


	svg.draw();

	var animatedNumbers = $('.animated-number');

	animatedNumbers.each(function(){

		numberAnimation($(this), ANIMATION_TIME, $(this).attr("data-decimals"));
	});




	



})(jQuery, window, document);