// Variables 

const startStopBtn = document.querySelector('#startStopBtn');

const resetBtn = document.querySelector('#resetBtn');


// variables fo rtime values 

let seconds = 0;

let minutes = 0;
 
let hours = 0;

// stop Watch function 

function stopWatch() {

seconds++

if(seconds / 60 === 1){
    seconds = 0;
    minutes ++;
}

if(minutes / 60 === 1){
    minutes = 0;
    hours ++;
}

if(hours / 60 === 1){
    seconds = 0;
    minutes ++;
}
}