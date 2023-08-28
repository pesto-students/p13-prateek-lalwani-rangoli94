class BankAccount {
    #accountNumber
    #balance
    #accountHolderName
    constructor(accountNumber, balance, accountHolderName) {
        this.#accountNumber = accountNumber
        this.#balance = balance
        this.#accountHolderName = accountHolderName
    }

    addBalance(amount) {
        this.#balance += amount
    }
    deleteBalance(amount) {
        this.#balance -= amount
    }
    getBalance() {
        return this.#balance
    }
}

class CheckingAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
        super(accountNumber, balance, accountHolderName)
    }
    deposit(amount) {
        this.addBalance(amount)
    }

    withdraw(amount) {
        this.deleteBalance(amount)
    }

    getBalance() {
        return super.getBalance()
    }

}

class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
        super(accountNumber, balance, accountHolderName)
    }
    deposit(amount) {
        this.addBalance(amount)
    }

    withdraw(amount) {
        if (amount <= this.getBalance()) {
            this.deleteBalance(amount)
        }
    }

    getBalance() {
        return super.getBalance()
    }
}

const objChecking = new CheckingAccount(12345, 12000, "Mary")
console.log(objChecking.getBalance())
objChecking.deposit(5000)
console.log(objChecking.getBalance())
objChecking.withdraw(1000)
console.log(objChecking.getBalance())

const objSaving = new SavingsAccount(12121, 15000, "John")
console.log(objSaving.getBalance())
objSaving.deposit(8000)
console.log(objSaving.getBalance())
objSaving.withdraw(24000)
console.log(objSaving.getBalance())