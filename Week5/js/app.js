$(function(){
	var app = {
		init: function() {
			app.init_effect();
			app.init_event();
		},

// '>' means direct into that line
		init_effect: function() {
			$("#head_tagline>h1").hide().fadeIn(700);
			$("#head_tagline>p:first").hide().delay(700).fadeIn(700);
			$("#head_tagline>p:last").hide();
			$("#head_tagline>a").hide().delay(1400).fadeIn(700);
		},

		init_event: function() {

		}

	};
	app.init();
});
