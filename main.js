const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minEl = document.getElementById('min');
const secEl = document.getElementById('sec');

const newmeeting = "0 0 0 0"

function countdown() {
    const newDatemeeting = new Date(newmeeting);
    const currentDate = new Date();

    const totalseconds = (newDatemeeting - currentDate)/ 1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds/3600) %24;
    const min = Math.floor(totalseconds/60) % 60;
    const sec = Math.floor(totalseconds)%60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minEl.innerHTML = formatTime(min)
    secEl.innerHTML = formatTime(sec)

    
}
function formatTime(time) {
    return time < 10 ? `0${time}`: time;

}

countdown();
setInterval(countdown, 1000);