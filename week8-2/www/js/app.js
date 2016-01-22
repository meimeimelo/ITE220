$(function(){
	var app = {
		init: function() {
			app.init_effect();
			// app.init_event();
		},

// '>' means direct into that line
		init_effect: function() {
			$(".information>h4").hide().fadeIn(700);
			$(".information>h7").hide().delay(700).fadeIn(700);
			//hide the error
			// $(".error").hide();
		}

		// init_event: function() {
		// 	$("#head_tagline>a:first").on("click",function(){
		// 		$("#head_tagline").height(350);
		// 		$("#head_tagline>p:last").fadeIn(700);
		// 	});
		//
		// 	$("#head_tagline>a:last").on("click",function(){
		// 		$("#head_tagline").height(200);
		// 		$("#head_tagline>p:last").hide();
		// 	});



			//image flip
			// $(".image-flip").flip({
			// 	axis: 'y',
			// 	trigger: 'hover'
			// });

		// }
	};
app.init();
});
