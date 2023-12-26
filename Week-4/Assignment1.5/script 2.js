class Person {
    constructor(name, age, gender, nationality) {
        this.name = name
        this.age = age
        this.gender = gender
        this.nationality = nationality
    }
    introduce() {
        return "My name is " + this.name + ". I am " + this.age + "years old. I am " + this.gender + ". I am " + this.nationality + "."
    }
}

const obj1 = new Person("John", 26, "Male", "Canadian")
const obj2 = new Person("Tara", 30, "Female", "Indian")
const obj3 = new Person("Jack", 50, "Male", "American")

console.log(obj1.introduce());
console.log(obj2.introduce());
console.log(obj3.introduce());


class Student extends Person {
    constructor(name, age, gender, nationality, subject) {
        super(name, age, gender, nationality)
        this.subject = subject
    }

    study() {
        return "I am studying " + this.subject + "."
    }
}

const stud1 = new Student("Mary", 22, "Female", "French", "Maths")
console.log(stud1.introduce())
console.log(stud1.study())