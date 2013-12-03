(function() {
	var canvas = document.getElementById("canvas-animations"),
		ctx = canvas.getContext("2d"),
		direction = {
			x: "right",
			y: "down"
		},
		balls = [],
		directions = {
			"left": -1.3,
			"right": +1.3,
			"up": -0.7,
			"down": +0.7
		},
		count = 1000,
		isAnimationOn = false;

	function getRandomValue(min, max) {
		return (Math.random() * (max - min) + min) | 0;
	}

	function getRandomColor() {
		var red = getRandomValue(0, 255);
		var green = getRandomValue(0, 255);
		var blue = getRandomValue(0, 255);
		return "rgb(" + red + "," + green + "," + blue + ")";
	}

	function Ball(x, y, radius, speed, direction) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.speed = speed;
		this.direction = direction;
		this.fillColor = getRandomColor();
		this.strokeColor = getRandomColor();

		this.draw = function(ctx) {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
			ctx.fillStyle = this.fillColor;
			ctx.strokeStyle = this.strokeColor;
			ctx.fill();
			ctx.stroke();
		};

		this.move = function() {
			this.x += this.speed * directions[this.direction.x];
			this.y += this.speed * directions[this.direction.y];
		};

		this.bounce = function(maxX, maxY) {
			var disappearX = false;
			var disappearY = false;
			if (this.x < this.radius) {
				this.x = maxX - this.radius;
				disappearX = true;
			}
			if (this.x > maxX - this.radius) {
				this.x = this.radius;
				disappearX = true;
			}

			if (this.y < this.radius) {
				this.y = maxY - this.radius;
				disappearY = true;
			}

			if (this.y > maxY - this.radius) {
				this.y = this.radius;
				disappearY = true;
			}

			if (disappearX) {
				this.y = (this.y <= maxY / 2) ? this.y : (maxY - this.y);
			}

			if (disappearY) {
				this.x = (this.x <= maxX / 2) ? this.x : (maxX - this.x);
			}
		};
	}

	ctx.fillStyle = "pink";
	ctx.strokeStyle = "purple";
	ctx.lineWidth = 2;

	for (var i = 0; i < count; i += 1) {
		var x = getRandomValue(0, ctx.canvas.width);
		var y = getRandomValue(0, ctx.canvas.height);

		var directionX = (getRandomValue(0, 2) % 2 === 0) ? "left" : "right";
		var directionY = (getRandomValue(0, 2) % 2 === 0) ? "up" : "down";

		var ball = new Ball(x, y, 10, 15, {
			x: directionX,
			y: directionY
		});
		balls.push(ball);
	}

	function animationFrame() {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		for (var i = 0; i < balls.length; i += 1) {
			balls[i].move();
			balls[i].bounce(ctx.canvas.width, ctx.canvas.height);

			balls[i].draw(ctx);
		}
		if (isAnimationOn) {
			requestAnimationFrame(animationFrame);
		}
	}

	function onButtonStartBallsClick() {
		isAnimationOn = true;
		requestAnimationFrame(animationFrame);
	}

	function onButtonStopBallsClick() {
		isAnimationOn = false;
	}

	document.getElementById("btn-start-balls")
		.addEventListener("click", onButtonStartBallsClick);
	document.getElementById("btn-stop-balls")
		.addEventListener("click", onButtonStopBallsClick);
}());