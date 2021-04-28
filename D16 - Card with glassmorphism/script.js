const tilt = document.querySelectorAll(".tilt");

VanillaTilt.init(tilt, {
	reverse: true,
	max: 10,
	speed: 300,
	scale: 1.15,
	glare: true,
	reset: true,
	perspective: 700,
	transition: true,
	"max-glare": 0.15,
	"glare-prerender": false,
	gyroscope: true,
	gyroscopeMinAngleX: -45,
	gyroscopeMaxAngleX: 45,
	gyroscopeMinAngleY: -45,
	gyroscopeMaxAngleY: 45
});
