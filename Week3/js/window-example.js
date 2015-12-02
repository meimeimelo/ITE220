var myWindow = {
	screenX: window.screenX,
	screenY: window.screenY,
	screenW: window.screen.width,
	screenH: window.screen.height,
	location: window.location.pathname,

	render: function() {
		var ele = document.getElementById("location");
		ele.value = this.location;

		ele = document.getElementById("sx");
		ele.value = this.screenX;

		ele = document.getElementById("sy");
		ele.value = this.screenY;

		// ele = document.getElementById("sw");
		// ele.value = this.screen.width;
		//
		// ele = document.getElementById("sh");
		// ele.value = this.screen.height;
	}
};


myWindow.render();
