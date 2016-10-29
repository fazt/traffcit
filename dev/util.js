var five = require("johnny-five");
var temporal = require("temporal");

var freq = 500;

five.Board().on("ready", function () {

	var lights = [
		new five.Pin({addr:10}),
		new five.Pin({addr:11}),
		new five.Pin({addr:12})
	];

	lights.forEach(function (light, index) {

		light.on("high", function () {

			var nextLight = lights[(index + 1) % lights.length];

			console.log( "Event emitted for:", "high", "on", this.addr);

			temporal.delay(freq, function() {
				light.low();
				nextLight.high();
			});
		});
	});

	// BEGIN THE DANCE OF THE LEDS!
	lights[0].high();
});
