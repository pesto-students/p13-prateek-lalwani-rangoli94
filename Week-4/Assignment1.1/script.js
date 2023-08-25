class Calculator {
    add(num1, num2) {
        return num1 + num2
    }
    subtract(num1, num2) {
        return num1 - num2
    }
    multiply(num1, num2) {
        return num1 * num2
    }
    divide(num1, num2) {
        return num1 / num2
    }
}

class ScientificCalculator extends Calculator {
    square(num) {
        return num * num
    }
    cube(num) {
        return num * num * num
    }
    power(num, pow) {
        return num ** pow
    }
}

const obj1 = new ScientificCalculator();

console.log(obj1.add.call(obj1, 10, 5))
console.log(obj1.subtract.call(obj1, 10, 5))

function multiplyByTwo(num) {
    return num * 2
}

const bindMultiply = multiplyByTwo.bind(obj1, 5)


function powerOfThree(num) {
    return num ** 3

}

const bindPower = powerOfThree.bind(obj1, 2)

console.log(bindMultiply())
console.log(bindPower())