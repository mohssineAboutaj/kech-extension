window.onload = function() {
	var time = 60;
	setInterval(function() {
		document.body.click();
		console.log("you are active :)");
	}, time + 1000)
}

