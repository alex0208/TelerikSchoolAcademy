(function() {

	document.oncontextmenu = document.body.oncontextmenu = function() {return false;}

	var canvas = document.getElementById("airplane-canvas"),
		ctx = canvas.getContext("2d");


	function Laser(x, y, speed) {
		this.x = x;
		this.y = y;
		this.speed = speed;

		this.draw = function(ctx) {
			ctx.beginPath();
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(this.x + 10, this.y);
			ctx.stroke();
		};

		this.move = function() {
			this.x += this.speed;
		};
	}

	function Airplane(x, y, speed) {
		var lazerSpeed = 10;
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.lazers = [];

		this.draw = function(ctx) {
			ctx.beginPath();
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(this.x, this.y - 30);
			ctx.lineTo(this.x + 20, (2 * this.y - 30) / 2);
			ctx.lineTo(this.x + 35, (2 * this.y - 30) / 2);

			//up wing
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

			ctx.moveTo(this.x + 75, (2 * this.y - 30) / 2);
			ctx.lineTo(this.x + 100, (2 * this.y - 30) / 2);
			ctx.lineTo(this.x + 120, this.y);
			ctx.lineTo(this.x, this.y);
			ctx.stroke();

			for (var i = 0; i < this.lazers.length; i += 1) {
				this.lazers[i].draw(ctx);
			}
		};

		this.moveUp = function() {
			this.y -= speed;
		};

		this.moveDown = function() {
			this.y += speed;
		};

		this.fire = function() {
			var lazerStartPoints = [{
				x: this.x + 80,
				y: (2 * this.y - 30) / 2 - 10
			}, {
				x: this.x + 70,
				y: (2 * this.y - 30) / 2 - 20
			}, {
				x: this.x + 60,
				y: (2 * this.y - 30) / 2 - 30
			},
			{
				x: this.x + 120,
				y: this.y
			}];
			//var lazerPointIndex = (Math.random() * lazerStartPoints.length) | 0;
			//var lazerPoint = lazerStartPoints[lazerPointIndex];
			//var lazer = new Laser(lazerPoint.x, lazerPoint.y, lazerSpeed);
			for(var i =0; i < lazerStartPoints.length; i+=1){
				var lazer=new Laser(lazerStartPoints[i].x, lazerStartPoints[i].y, lazerSpeed);
				this.lazers.push(lazer);
			}
		};

		this.performMove = function(maxX) {
			var i;
			for (i = 0; i < this.lazers.length; i += 1) {
				if (this.lazers[i].x >= maxX) {
					this.lazers.splice(i, 1);
					i--;
				}
			}
			for (i = 0; i < this.lazers.length; i += 1) {
				this.lazers[i].move();
			}
			console.log(this.lazers.length);
		};
	}


	var airplane = new Airplane(50, 50, 15);

	window.addEventListener("keypress", function(e) {
		switch (e.keyCode) {
			case 38:
				airplane.moveUp();
				break;
			case 40:
				airplane.moveDown();
				break;
			default:
				airplane.fire();
				break;
		}
	});

	function animationFrame() {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		airplane.draw(ctx);
		airplane.performMove(ctx.canvas.width);
		requestAnimationFrame(animationFrame);
	}

	requestAnimationFrame(animationFrame);
}());