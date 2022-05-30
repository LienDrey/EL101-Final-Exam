class Car {
    constructor(carname, speed, battery) {
	this.carname = carname;
	this.speed = speed;
  this.charge = battery;
	
	this.accelerate = function() {
	this.speed += 20;
  this.charge -= 1;
  
	};

	this.brake = function() {
	this.speed -= 5;
  this.charge -= 1;

  }
this.charging = function() {
  this.charge +=  5;  
}


  
	};
    
	get speeds() {
	let currentspeed = this.speed / 1.6;
	return currentspeed + " mi/h";
	}
	get speedJS() {
	let current = this.speed / 1.6;
	let currentspeed = current * 1.6;
	return currentspeed + " mi/h";
	}

    
};

let Innov = new Car('Innov', 120, 23);

Innov.accelerate(); 
Innov.brake();
Innov.charging(); 
console.log(Innov);
