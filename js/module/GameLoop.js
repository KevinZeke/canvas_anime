define(["Common"],function () {
	let time = Date.now();
	let delta = 0;
	function gameLoop(callback) {
		let now = Date.now();
		delta = now - time;
		time = now;
		callback(delta);
		window.requestAnimFrame(function () {
			gameLoop(callback);
		});
	}
	return {
		animate:gameLoop
	};
})