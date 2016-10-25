// pl = player
var plY = 520;
var plX = 200;
var plVY = 0;
var hopp = plY - 120;

var ctx;

var h1X = 730;
var h1Y = 570;
var h1VX = 0;
var h1VY = 0;


function init() {
    
    var canvas = document.getElementById("canv");
    ctx = canvas.getContext("2d");
    
    window.setInterval(update, 20);
    
    //createjs.Sound.registerSound("ljud/horn.mp3", "mySound");
}


function update() {
    
    //Suddar
    ctx.clearRect(0, 0, 900, 600);
    
    //Målar ut Spelare (pl)
    ctx.fillRect(plX, plY, 25, 80);
    
    //Målar ut hinder1 (h1)
    ctx.fillRect(h1X, h1Y, 30, 30);
    
    //Hoppa
    plY = plY + plVY;
    
    //Kollission med h1
    if((plX + 25 >= h1X) && (plX <= h1X +30)) {
        h1VX = 0;
    }
    
    if(plY + 80 >= h1Y) {
        plVY = 0;
    }
    
    //Rörelse
    h1X = h1X + h1VX;
    
    //Stanna plY mot underkant
    if(plY >= 520) {
        plVY = 0;
    }
    
    //Stanna mot överkant
    if(plY <= 0) {
        plY = 0;
    }
}


function keyDown(e) {
    
    //Piltangent upp = Hoppa
    if(e.keyCode == 38) {

        plVY = -18;
        plY = hopp;
        
    }
    
    //Rörelse fram
    if(e.keyCode == 39) {
        h1VX = -8;
    }
}


function keyUp(e) {
    
    //Släpp piltangent upp = Fall
    if(e.keyCode == 38) {
        plVY = 8;
    }
    
    //Stanna
    if(e.keyCode == 39) {
        h1VX = 0;
    }
}