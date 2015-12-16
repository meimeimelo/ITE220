$(function(){
	var app = {
		init: function() {
			app.init_effect();
			app.init_event();
		},

// '>' means direct into that line
		init_effect: function() {
			$("#head_tagline").height(200);
			$("#head_tagline>h1").hide().fadeIn(700);
			$("#head_tagline>p:first").hide().delay(700).fadeIn(700);
			$("#head_tagline>p:last").hide();
			$("#head_tagline>a").hide().delay(1400).fadeIn(700);
		},

		init_event: function() {
			$("#head_tagline>a:first").on("click",function(){
				$("#head_tagline").height(350);
				$("#head_tagline>p:last").fadeIn(700);
			});

			$("#head_tagline>a:last").on("click",function(){
				$("#head_tagline").height(200);
				$("#head_tagline>p:last").fadeOut(700);
			});
		}

	};
	app.init();
});
