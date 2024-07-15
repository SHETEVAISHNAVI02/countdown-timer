let countdownInterval;
let totalTime = 0; // in seconds
let remainingTime = 0;

const timerDisplay = document.getElementById('timer-display');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');
const restartButton = document.getElementById('restart-button');

function updateDisplay() {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;
    timerDisplay.textContent = 
        ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')};
}

function startCountdown() {
    countdownInterval = setInterval(() => {
        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            alert('Time is up!');
            return;
        }
        remainingTime--;
        updateDisplay();
    }, 1000);
}

function stopCountdown() {
    clearInterval(countdownInterval);
}

function resetCountdown() {
    clearInterval(countdownInterval);
    remainingTime = totalTime;
    updateDisplay();
}

function restartCountdown() {
    clearInterval(countdownInterval);
    remainingTime = totalTime;
    startCountdown();
}

startButton.addEventListener('click', () => {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    totalTime = hours * 3600 + minutes * 60 + seconds;
    remainingTime = totalTime;
    updateDisplay();
    startCountdown();
});

stopButton.addEventListener('click', stopCountdown);
resetButton.addEventListener('click', resetCountdown);
restartButton.addEventListener('click', restartCountdown);

// Initialize display
updateDisplay();
