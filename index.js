let homePoints = document.getElementById("home-points");
let guestPoints = document.getElementById("guest-points");

let homeTotal = 0;
let guestTotal = 0;

function add1Home(){
    homeTotal++;
    homePoints.textContent = homeTotal;
}

function add2Home(){
    homeTotal+=2;
    homePoints.textContent = homeTotal;
}

function add3Home(){
    homeTotal+=3;
    homePoints.textContent = homeTotal;
}

function add1Guest(){
    guestTotal++;
    guestPoints.textContent = guestTotal;
}

function add2Guest(){
    guestTotal+=2;
    guestPoints.textContent = guestTotal;
}

function add3Guest(){
    guestTotal+=3;
    guestPoints.textContent = guestTotal;
}

function clear1(){
    homeTotal = 0;
    guestTotal = 0;
    guestPoints.textContent = guestTotal;
    homePoints.textContent = homeTotal;
}