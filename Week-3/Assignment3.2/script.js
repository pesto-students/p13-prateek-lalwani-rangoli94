function playGuessingGame(numToGuess, totalGuesses = 2) {
    if (totalGuesses == 0) {
        return 0
    }
    let num = prompt("Enter a number between 1 and 100.")

    for (let i = 0; i < totalGuesses - 1; i++) {
        if (num == null) {
            return 0
        }
        if (num == numToGuess) {
            return i + 1
        }
        if (num == "" || isNaN(Num) || num <= 0 || num > 100) {
            i--;
            num = prompt("Please enter a number.")
        }

        else if (num < numToGuess) {
            num = prompt(num + " is too small. Guess a larger number.");
        }
        else if (num > numToGuess) {
            num = prompt(num + " is too large. Guess a smaller number.");
        }
    }
    return 0;

}

console.log(playGuessingGame(10, 1))