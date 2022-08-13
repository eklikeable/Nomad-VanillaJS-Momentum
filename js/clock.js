const clock = document.querySelector('h2#clock');

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, 0);
    const minutes = String(date.getMinutes()).padStart(2, 0);
    const seconds = String(date.getSeconds()).padStart(2, 0);
    let hour = parseInt(hours);
    let time = false;

    if (hour > 12) {
        time = true;
        hour = hour - 12;
    }
    let print = `${hour}:${minutes}:${seconds}`;
    time === true ? (print += ' PM') : (print += ' AM');
    clock.innerText = print;
}
getClock();
setInterval(getClock, 1000);
