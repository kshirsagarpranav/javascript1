console.log('welcome pranav ');



// object literal for creating objects 
let car = {
    name: 'Marauti Alto',
    topSpeed: 180,
    run: function () {
        console.log("car is running ");
    }
}
console.log(car);

// creating a constructor for car
function GenaralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name}is running`);
    }
    this.analyze = function () {
        console.log(`This car is slower by${250 - this.topSpeed} km/hr than Mercedes `)
    }
}
car1 = new GenaralCar('BMW', 200);
car2 = new GenaralCar('Nissan', 100);
car3 = new GenaralCar('Range Rover ', 300);
console.log(car1, car2, car3); 