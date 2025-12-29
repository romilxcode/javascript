// let Car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2020,
//     start: function() {
//         return `${this.make} car got started in ${this.year}`;
//     },
// };

// console.log(Car.start());

function Person(name, age) {
    this.name = name
    this.age = age
}

let john = new Person("John Doe", 20);
// console.log(john.name);

function Animal(type){
    this.type = type
}

Animal.prototype.speak = function(){
    return `$"{this.type} makes a sound`
}

Array.prototype.hitesh = function(params){
    return `Custom method ${this}`
}

let myAray = [1, 2, 3]
console.log(myAray.hitesh());

let myNewAray = [1, 2, 3]
console.log(myNewAray.hitesh());

class Vehicle {
    constructor(make, model){
        this.make = make
        this.model = model
    }

    start() {
        return `${this.model} is a car from ${this.make}`
    }
}

class Car extends Vehicle {
    drive(){
        return `${this.make} : This is an inheritance example`;
    }
}

let myCar = new Car("Toyota", "Corolla") 
// console.log(myCar.start());
// console.log(myCar.drive());

let vehone = new Vehicle("Toyota", "Corolla");
console.log(vehone.make);