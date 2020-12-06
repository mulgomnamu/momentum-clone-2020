const clockHere = document.querySelector("#clockHere"),
    greeting = document.querySelector("#greeting");

function getTime(){
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let timeText = "";
    
    hours = hours<10 ? `0${hours}` : hours;
    minutes = minutes<10 ? `0${minutes}` : minutes;
    timeText = `${hours}:${minutes}`;
    
    clockHere.innerText = timeText;

    setGreeting(hours);
}

function setGreeting(hours){
    let msg = "";

    if(hours > 05 && hours < 12)        msg = "Good Morning, ";
    else if(hours >= 12 && hours < 17)  msg = "Good afternoon, ";
    else                                msg = "Good Evening, ";
    
    greeting.innerText = msg;
}