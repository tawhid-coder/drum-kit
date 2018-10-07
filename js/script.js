window.addEventListener("keydown",playAudio);




const keys = document.querySelectorAll(".key");

keys.forEach(key => key.addEventListener("transitionend",removeClass));


function removeClass(e){

    if(e.propertyName != 'transform')
        return;
    this.classList.remove("playing");
}

function playAudio(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) 
    return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

}   

