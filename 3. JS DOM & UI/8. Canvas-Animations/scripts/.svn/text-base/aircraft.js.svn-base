(function () {

	var canvas = document.getElementById("aircraft-canvas"),
		ctx = canvas.getContext("2d");

	function Laser(x, y, speed) {
		this.x = x;
		this.y = y;
		this.speed = speed;

		this.draw = function (ctx) {
			ctx.beginPath();
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(this.x + 10, this.y);
			ctx.stroke();
		};

		this.move = function () {
			this.x += this.speed;
		};
	}

	function Fighter(x, y, speed) {
		var laserSpeed = 10;
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.lasers = [];

		this.draw = function (ctx) {
			//body of the fighter
			ctx.beginPath();
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(this.x, this.y - 30);
			ctx.lineTo(this.x + 20, (2 * this.y - 30) / 2);
			ctx.lineTo(this.x + 35, (2 * this.y - 30) / 2);

			//move after the wing
			ctx.moveTo(this.x + 75, (2 * this.y - 30) / 2);
			ctx.lineTo(this.x + 100, (2 * this.y - 30) / 2);
			ctx.lineTo(this.x + 120, this.y);
			ctx.lineTo(this.x, this.y);

			//top wing
			ctx.moveTo(this.x + 35, (2 * this.y - 30) / 2 + 5);
			ctx.lineTo(this.x + 35, (2 * this.y - 30) / 2 - 45);
			ctx.lineTo(this.x + 80, (2 * this.y - 30) / 2 + 5);

			//bottom cannon
			ctx.moveTo(this.x + 60, (2 * this.y - 30) / 2 - 10);
			ctx.lineTo(this.x + 80, (2 * this.y - 30) / 2 - 10);

			//middle cannon
			ctx.moveTo(this.x + 50, (2 * this.y - 30) / 2 - 20);
			ctx.lineTo(this.x + 70, (2 * this.y - 30) / 2 - 20);

			//top cannon
			ctx.moveTo(this.x + 40, (2 * this.y - 30) / 2 - 30);
			ctx.lineTo(this.x + 60, (2 * this.y - 30) / 2 - 30);

			ctx.stroke();

			//draw the lasers
			for (var i = 0; i < this.lasers.length; i += 1) {
				this.lasers[i].draw(ctx);
			}
		};

		this.moveUp = function () {
			this.y -= speed;
		};

		this.moveDown = function () {
			this.y += speed;
		};

		this.fire = function () {
			var laserStartPoints = [{
				x: this.x + 80,
				y: (2 * this.y - 30) / 2 - 10
			}, {
				x: this.x + 70,
				y: (2 * this.y - 30) / 2 - 20
			}, {
				x: this.x + 60,
				y: (2 * this.y - 30) / 2 - 30
			}, {
				x: this.x + 120,
				y: this.y
			}];
			//var laserPointIndex = (Math.random() * laserStartPoints.length) | 0;
			//var laserPoint = laserStartPoints[laserPointIndex];
			//var laser = new Laser(laserPoint.x, laserPoint.y, laserSpeed);
			//this.lasers.push(laser);
			for (var i = 0; i < laserStartPoints.length; i += 1) {
				var laser = new Laser(laserStartPoints[i].x, laserStartPoints[i].y, laserSpeed);
				this.lasers.push(laser);
			}
		};

		this.performMove = function (maxX) {
			var i;
			for (i = 0; i < this.lasers.length; i += 1) {
				if (this.lasers[i].x >= maxX) {
					this.lasers.splice(i, 1);
					i--;
				}
			}
			for (i = 0; i < this.lasers.length; i += 1) {
				this.lasers[i].move();
			}
		};
	}


	var fighter = new Fighter(20, 100, 15);

	document.body.addEventListener("keydown", function (e) {
		if (!e) {
			e = window.event;
		}

		switch (e.keyCode) {
		case 38:
			fighter.moveUp();
			break;
		case 40:
			fighter.moveDown();
			break;
		case 32:
			fighter.fire();
			break;
		}
	});

	function animationFrame() {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		fighter.draw(ctx);
		fighter.performMove(ctx.canvas.width);
		requestAnimationFrame(animationFrame);
	}

	requestAnimationFrame(animationFrame);
}());