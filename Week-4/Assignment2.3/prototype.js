const person = {
    age: 26,
    getAge: function () {
        return this.age
    },
    setAge: function (age) {
        this.age = age
    }
}

Object.defineProperty(person, "name", {
    value: "John"
})

Object.defineProperty(person, "email", {
    value: "john@gmail.com"
})


// class Vehicle {
//     constructor(make,model,year){
//         this.make = make
//         this.model = model
//         this.year = year
//     }

//     getDetails() {
//         return "Make: "+this.make+" Model: "+this.model+" Year: "+this.year
//     }
// }

function Vehicle(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
}
Vehicle.prototype.getDetails = function () {

    return "Make: " + this.make + " Model: " + this.model + " Year: " + this.year

}


class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year)
        this.numDoors = numDoors
    }
    getDetails() {
        return "Make: " + this.make + " Model: " + this.model + " Year: " + this.year + " Number Of Doors: " + this.numDoors
    }
}

const objVehicle = new Vehicle("ABC", "KIA", 2005)
console.log(objVehicle.getDetails())
const objCar = new Car("XYZ", "TATA", 2008, 4)
console.log(objCar.getDetails())