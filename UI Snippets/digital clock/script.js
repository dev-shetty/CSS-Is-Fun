function updateDigitalClock() {
    const digitalClock = document.getElementById('digital-clock');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const THours = hours > 12 ? (hours-12) : hours;

    const formattedHours = THours < 10 ? `0${THours}` : THours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    Hours.innerText = `${formattedHours}`;
    Minutes.innerText = `${formattedMinutes}`;
    Seconds.innerText = `${formattedSeconds}`;
    
}

updateDigitalClock();
setInterval(updateDigitalClock, 1000);