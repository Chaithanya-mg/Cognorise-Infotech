
const countdownElement = document.getElementById('countdown');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startButton = document.getElementById('start');
const targetDateInput = document.getElementById('target-date');
const stopButton = document.getElementById('stop-sound'); 


const alarmSound = new Audio('audio/bgm.mp3'); 

let countdownInterval;


function startCountdown(targetDate) {
    clearInterval(countdownInterval); 

    countdownInterval = setInterval(() => {
        const now = new Date();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            alarmSound.play(); 
            stopButton.style.display = 'inline'; 
            alert("Countdown has ended!");
            return;
        }

       
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        
        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}


startButton.addEventListener('click', () => {
    const targetDate = new Date(targetDateInput.value);

    if (isNaN(targetDate.getTime())) {
        alert("Please select a valid date and time.");
        return;
    }

    startCountdown(targetDate);
});


stopButton.addEventListener('click', () => {
    alarmSound.pause(); 
    alarmSound.currentTime = 0; 
    stopButton.style.display = 'none'; 
});
