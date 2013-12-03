(function() {
	var canvas = document.getElementById("canvas-animations"),
		ctx = canvas.getContext("2d"),
		direction = {
			x: "right",
			y: "down"
		},
		balls = [],
		directions = {
			"left": -1,
			"right": +1,
			"up": -1,
			"down": +1
		};

	function Ball(x, y, radius, speed, direction) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.speed = speed;
		this.direction = direction;

		this.draw = function(ctx) {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
			ctx.stroke();
		};

		this.move = function() {
			this.x += this.speed * directions[this.direction.x];
			this.y += this.speed * directions[this.direction.y];
		};

		this.bounce = function(maxX, maxY) {
			if (this.x < this.radius) {
				this.direction.x = "right";
			}
			if (this.x > maxX - this.radius) {
				this.direction.x = "left";
			}
			if (this.y < this.radius) {
				this.direction.y = "down";
			}
			if (this.y > maxY - this.radius) {
				this.direction.y = "up";
			}
		};
	}

	function getRandomValue(min, max) {
		return (Math.random() * (max - min) + min) | 0;
	}

	var count = 15;

	for (var i = 0; i < count; i += 1) {
		var x = getRandomValue(0, ctx.canvas.width);
		var y = getRandomValue(0, ctx.canvas.height);

		var ball = new Ball(x, y, 10, 15, direction);
		balls.push(ball);
	}

	function animationFrame() {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		for (var i = 0; i < balls.length; i += 1) {
			balls[i].move();
			balls[i].bounce(ctx.canvas.width, ctx.canvas.height);

			balls[i].draw(ctx);
		}
		requestAnimationFrame(animationFrame);
	}

	requestAnimationFrame(animationFrame);

}());