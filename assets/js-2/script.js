// variables 

let openBtn = document.getElementById('open-btn');

let modelCon = document.getElementById('container');

let closeBtn = document.getElementById('close-btn');

// Event Listeners

openBtn.addEventListener('click', function() {
    modelCon.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
    modelCon.style.display = 'none';
});

 window.addEventListener('click', function(e){
    if(e.target === modelCon){
        modelCon.style.display = 'none';
    }
 });