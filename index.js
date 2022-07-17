// home
let homeEl = document.getElementById("home-el")
let points = 0
let guestEl = document.getElementById("guest-el")
let guestPoints = 0 

const plus = (e) => {
    if(e.name === "home-el") {
        homePoints = homePoints + e.value
        homeEl.textContent = homePoints
    } else if (e.name === "guest") {
        guestPoints = guestPoints + e.value
        guestEl.textContent = homePoints
    }
    
}


function plussOne() {
    points = points + 1
    homeEl.textContent = points
}

function plussTwo() {
    points = points +2 
    homeEl.textContent = points 
}

function plussThree() {
    points = points + 3 
    homeEl.textContent = points
}

//guest



function pluss1() {
    guestPoints = guestPoints + 1
    guestEl.textContent = guestPoints
}

function pluss2() {
    guestPoints = guestPoints +2 
    guestEl.textContent = guestPoints 
}

function pluss3() {
    guestPoints = guestPoints + 3 
    guestEl.textContent = guestPoints
}

// new game 

function newGame() {
    start()
    guestEl.textContent = 0;
    homeEl.textContent = 0;
}
 
// timer

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds  : seconds;
        
        display.textContent = minutes + ":" + seconds;
        
          if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
    
}

    function start() {
    document.getElementById("startCountDown")
    let tenMinutes = 60 * 10,
        display = document.querySelector('#timer');
    startTimer(tenMinutes, display);
};


 window.onload = function() {
    let tenMinutes = 60 * 10,
        display = document.querySelector('#timer');
    startTimer(tenMinutes, display);
};