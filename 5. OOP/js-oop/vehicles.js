	var DirectionsEnum = {
		clockwise : "clockwise",
		counter_clockwise : "counter-clockwise"
	};

	function PropulsionUnit(acceleration, count){
		this.acceleration = acceleration;
		this.count = count;
	}

	PropulsionUnit.prototype.getTotalAcceleration = function(){
		return this.acceleration*this.count;
	}

	//TYPES OF PROPULSION UNITS

		Wheels.prototype = new PropulsionUnit();
		Wheels.prototype.constructor = Wheels;

		function Wheels(radius, count){

			PropulsionUnit.call(this, 2*Math.PI*radius, count);
		}

		Wheels.prototype.toString = function(){}


		Nozzles.prototype = new PropulsionUnit();
		Nozzles.prototype.constructor = Nozzles;
		function Nozzles(power, count, isAfterburnerOn){

			PropulsionUnit.call(this, isAfterburnerOn ? power*2 : power, count);
		}

		Propellers.prototype = new PropulsionUnit();
		Propellers.prototype.constructor = Propellers;
		function Propellers(count, spinDirection){

			PropulsionUnit.call(this, (spinDirection == DirectionsEnum.clockwise) ? count : -count, count);
		}

	//

	function Vehicle(startingSpeed, propulsionUnits){
		this.speed = startingSpeed || 0;
		this.propulsionUnits = propulsionUnits;
	}

	Vehicle.prototype.accelerate = function(){
		//summing speed and acceleration to form new speed for each unit
		this.speed += this.propulsionUnits.getTotalAcceleration();
		
		return this.speed;
	}

	Vehicle.prototype.stop = function(){
		this.speed = 0;
	}

	// TYPES OF VEHICLES

		LandVehicle.prototype = new Vehicle();
		LandVehicle.prototype.constructor = LandVehicle;
		function LandVehicle(wheelRadius){

			Vehicle.call(this, 0, new Wheels(wheelRadius, 4));
		}

		AirVehicle.prototype = new Vehicle();
		AirVehicle.prototype.constructor = AirVehicle;
		function AirVehicle(power){

			Vehicle.call(this, 0, new Nozzles(power, 1));
		}

		AirVehicle.prototype.toggleAfterburner = function(){

			this.propulsionUnits.isAfterburnerOn = !this.propulsionUnits.isAfterburnerOn;
			this.propulsionUnits.acceleration = this.propulsionUnits.isAfterburnerOn ? this.propulsionUnits.power*2 : this.propulsionUnits.power;
			return this.propulsionUnits.isAfterburnerOn;
		}

		WaterVehicle.prototype = new Vehicle();
		WaterVehicle.prototype.constructor = Vehicle;
		function WaterVehicle(count, spinDirection){

			Vehicle.call(this, 0, new Propellers(count, spinDirection));
		}
		WaterVehicle.prototype.switchSpinDirection = function(){
			this.propulsionUnits.spinDirection = (this.propulsionUnits.spinDirection == DirectionsEnum.clockwise) ? DirectionsEnum.counter_clockwise : DirectionsEnum.clockwise;
			this.propulsionUnits.acceleration = -this.propulsionUnits.acceleration;
		}

		AmphibiousVehicle.prototype = new Vehicle();
		AmphibiousVehicle.prototype.constructor = AmphibiousVehicle;
		function AmphibiousVehicle(wheelRadius, finsCount, spinDirection){

			this.landMode = new LandVehicle(wheelRadius);
			this.waterMode = new WaterVehicle(finsCount, spinDirection);

			this.currentMode = this.landMode;
			this.speed = this.currentMode.speed;
		}

		AmphibiousVehicle.prototype.switchMode = function(){

			this.currentMode = (this.currentMode === this.landMode) ? this.waterMode : this.landMode;
			this.speed = this.currentMode.speed;
			return this.currentMode;
		}

		AmphibiousVehicle.prototype.accelerate = function(){
			this.speed = this.currentMode.accelerate();

		}