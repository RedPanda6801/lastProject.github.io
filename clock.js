const clock = document.querySelector(".mainPage h1");

function handleClock(){
    const date = new Date();
    const nowHour = String(date.getHours()).padStart(2,"0");
    const nowMinute = String(date.getMinutes()).padStart(2,"0");
    clock.innerText = `${nowHour}:${nowMinute}`;
};

function init(){
    setInterval(handleClock,1000);
};

init();