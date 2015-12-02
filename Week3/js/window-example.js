var myWindow = {
	screenX: window.screenX,
	screenY: window.screenY,
	location: window.location.pathname,
	screenW: window.screen.width,
	screenH: window.screen.height,

	render: function() {
		var ele = document.getElementById("location");
		ele.value = this.location;

		ele = document.getElementById("sx");
		ele.value = this.screenX;

		ele = document.getElementById("sy");
		ele.value = window.screenY;

		ele = document.getElementById("sw");
		ele.value = window.screen.width;

		ele = document.getElementById("sh");
		ele.value = window.screen.height;
	}
};
console.log(myWindow.screenW);
myWindow.render();
