document.addEventListener('DOMContentLoaded', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 3;

    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');

    guessButton.addEventListener('click', () => {
        const userGuess = guessInput.value;
        if (!isValidGuess(userGuess)) {
            message.textContent = 'Please enter a valid number between 1 and 100.';
            return;
        }

        const guess = parseInt(userGuess);
        attempts--;

        if (guess === randomNumber) {
            message.textContent = `Congratulations! You guessed the number correctly. It was ${randomNumber}.`;
            guessButton.disabled = true;
        } else if (attempts > 0) {
            message.textContent = guess > randomNumber ? 'Too high!' : 'Too low!';
            attemptsDisplay.textContent = `You have ${attempts} ${attempts === 1 ? 'attempt' : 'attempts'} left.`;
        } else {
            message.textContent = `Sorry, you're out of attempts. The correct number was ${randomNumber}.`;
            guessButton.disabled = true;
        }

        guessInput.value = '';
    });

    function isValidGuess(value) {
        const number = parseFloat(value);
        return !isNaN(number) && Number.isInteger(number) && number >= 1 && number <= 100;
    }
});
