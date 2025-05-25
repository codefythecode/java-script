var dice;

var dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];
var stoped = true;
var t;
function change(){
    var random = Math.floor(Math.random() * 6);
    dice.innerHTML = dices[random];
}
function stopstart(){
    if(stoped){
        stoped = false;
        t = setInterval(change, 100);
    }else{
        stoped = true;
        clearInterval(t);
    }
}
window.onload = function(){
    dice= document.getElementById('dice');
    stopstart();
};