// pl = player
var plY = 520;
var plVY = 0;
var ctx;

function init() {
    
    var canvas = document.getElementById("canv");
    ctx = canvas.getContext("2d");
    
    window.setInterval(update, 20);
    
    //createjs.Sound.registerSound("ljud/horn.mp3", "mySound");
}

function update() {
    
    //Suddar
    ctx.clearRect(0, 0, 900, 600);
    
    //Målar ut Spelare
    ctx.fillRect(200, plY, 25, 80);
    
    //Hoppa
    plY = plY + plVY;
    
    //Stanna plY mot underkanti
    if(plY >= 520) {
        plVY = 0;
    }
    
    //Hopp-limit
    if((plY )
}

function keyDown(e) {
    
    //Piltangent upp = Hoppa
    if(e.keyCode == 38) {
        plVY = -13;
    }
}

function keyUp(e) {
    
    //Släpp piltangent upp = Fall
    if(e.keyCode == 38) {
        plVY = 10;
    }
}