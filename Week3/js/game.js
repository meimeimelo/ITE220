var game = {
	answer: Math.round(Math.random() * (100 - 1)),
	value : '',
	init: function() {
		var self = this;

		// Number 1
		var ele = document.getElementById("one");
		ele.addEventListener("click", function(){
			self.click(1);
		}, false);

		// Number 2
		var ele = document.getElementById("two");
		ele.addEventListener("click", function(){
			self.click(2);
		}, false);

		// Number 3
		var ele = document.getElementById("three");
		ele.addEventListener("click", function(){
			self.click(3);
		}, false);

		// Number 4
		var ele = document.getElementById("four");
		ele.addEventListener("click", function(){
			self.click(4);
		}, false);

		// Number 5
		var ele = document.getElementById("five");
		ele.addEventListener("click", function(){
			self.click(5);
		}, false);

		// Number 6
		var ele = document.getElementById("six");
		ele.addEventListener("click", function(){
			self.click(6);
		}, false);

		// Number 7
		var ele = document.getElementById("seven");
		ele.addEventListener("click", function(){
			self.click(7);
		}, false);

		// Number 8
		var ele = document.getElementById("eight");
		ele.addEventListener("click", function(){
			self.click(8);
		}, false);

		// Number 9
		var ele = document.getElementById("nine");
		ele.addEventListener("click", function(){
			self.click(9);
		}, false);

		// Number 0
		var ele = document.getElementById("zero");
		ele.addEventListener("click", function(){
			self.click(0);
		}, false);

		// Guess!
		var ele = document.getElementById("guess");
		ele.addEventListener("click", this.checkAnswer, false);

		// Show Answer
		var ele = document.getElementById("show");
		ele.addEventListener("click", this.showAnswer, false);

		// Clear Answer
		var ele = document.getElementById("clear");
		ele.addEventListener("click", this.clearAnswer, false);
	},
	click: function(value) {
		console.log(value + " clicked.");
		var userValueEle = document.getElementById("userValue");
		userValueEle.value += value;
		this.value += value;
	},
	checkAnswer: function() {
		if (parseInt(game.value) === game.answer) alert("Congratulations! Correct Answer ");
		else if (parseInt(game.value) < game.answer)alert("Guessing number is less than the correct number");
		else if (parseInt(game.value) > game.answer)alert("Guessing number is more than the correct number");
	},
	showAnswer: function() {
		alert(game.answer);
	},
	clearAnswer: function() {
		var userValueEle = document.getElementById("userValue");
		userValueEle.value = '';
		game.value = '';
		console.log(userValueEle.value)
	}
};

game.init();
