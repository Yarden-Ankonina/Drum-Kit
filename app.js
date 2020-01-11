'use strict'
let sound = [];
sound = document.querySelectorAll(".key");


const audioA= new Audio("sounds/clap.wav");
const audioS= new Audio("sounds/hihat.wav");
const audioD= new Audio("sounds/kick.wav");
const audioF= new Audio("sounds/openhat.wav");
const audioG= new Audio("sounds/boom.wav");
const audioH= new Audio("sounds/ride.wav");
const audioJ= new Audio("sounds/snare.wav");
const audioK= new Audio("sounds/tom.wav");
const audioL= new Audio("sounds/tink.wav");
const audios= {
    'KeyA': audioA,
    'KeyS': audioS,
    'KeyD': audioD,
    'KeyF': audioF,
    'KeyG': audioG,
    'KeyH': audioH,
    'KeyJ': audioJ,
    'KeyK': audioK,
    'KeyL': audioL,
};



document.addEventListener('keydown', function(event) {
  //  const letter = event.key.toUpperCase();
    const eventName = event.code;
    keyEventHandler(eventName);
    }
  );

    const letters = {
    'KeyA': 0,
    'KeyS': 1,
    'KeyD': 2,
    'KeyF': 3,
    'KeyG': 4,
    'KeyH': 5,
    'KeyJ': 6,
    'KeyK': 7,
    'KeyL': 8,
    };
    

  function keyEventHandler(eventName){

   if(audios.hasOwnProperty(eventName)){

      sound[letters[eventName]].classList.add("press");
      //audios[eventName].currentTime = 0;
      audios[eventName].play();

      document.addEventListener('keyup', function(){
        sound[letters[eventName]].classList.remove("press");
      });
    }
  
      
      
}



