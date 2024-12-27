const sentences = [
    "The quick brown fox jumps over the lazy dog",
    "A journey of a thousand miles begins with a single step",
    "To be or not to be that is the question",
    "All that glitters is not gold",
    "Time is money and money is power",
    "Knowledge is power and education is key",
    "Practice makes perfect but nobody's perfect",
    "Every cloud has a silver lining",
    "Actions speak louder than words",
    "Rome wasn't built in a day"
];

let currentSentence = '';
let startTime = null;
let typedChars = 0;
let correctChars = 0;

function getRandomSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

function calculateAccuracy() {
    if (typedChars === 0) return 0;
    return Math.round((correctChars / typedChars) * 5);
}

function calculateWPM() {
    if (!startTime) return 0;
    const timeElapsed = (Date.now() - startTime) / 1000 / 60; // in minutes
    const wordsTyped = typedChars / 5; // average word length in characters
    return Math.round(wordsTyped / timeElapsed);
}

function updateStats() {
    const accuracy = calculateAccuracy();
    const wpm = calculateWPM();
    document.getElementById("accuracy").textContent = accuracy;
    document.getElementById("wpm").textContent = wpm;
}

function startGame() {
    currentSentence = getRandomSentence();
    document.getElementById("sentence").textContent = currentSentence;
    document.getElementById("inputField").value = '';
    document.getElementById("inputField").disabled = false;
    document.getElementById("inputField").focus();
    typedChars = 0;
    correctChars = 0;
    startTime = Date.now();
}

document.getElementById("inputField").addEventListener("input", function (event) {
    const typedText = event.target.value;
    typedChars = typedText.length;

    // Compare typed text with the sentence
    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === currentSentence[i]) {
            correctChars++;
        }
    }

    updateStats();

    if (typedText === currentSentence) {
        alert("Game Over! Your accuracy and WPM are displayed.");
        document.getElementById("inputField").disabled = true;
    }
});

// Start the game when the page loads
window.onload = startGame;
