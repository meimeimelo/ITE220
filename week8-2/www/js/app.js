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
		}
	};
app.init();
});
