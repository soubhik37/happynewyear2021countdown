const newYears = '1 Jan 2024';

function countdown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();
    const gapSeconds = (newYearDate- currentDate)/1000;
    const days = Math.floor(gapSeconds /86400);
    const hours = Math.floor(gapSeconds/3600)%24;
    const mins = Math.floor(gapSeconds/60)%60;
    const seconds = Math.floor(gapSeconds)%60;
    console.log(days +" "+ hours +" "+ mins +" "+ seconds);
    document.getElementById('days').innerHTML=days;
    document.getElementById('hours').innerHTML=hours;
    document.getElementById('mins').innerHTML=mins;
    document.getElementById('seconds').innerHTML=seconds;
}
countdown();
setInterval(countdown,999);
