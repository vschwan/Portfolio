"use strict";
window.addEventListener("load", function () {
    document.querySelector("#cick").addEventListener("click", function () { playSample("kick.mp3"); });
    document.querySelector("#snare").addEventListener("click", function () { playSample("snare.mp3"); });
    document.querySelector("#hihat").addEventListener("click", function () { playSample("hihat.mp3"); });
    document.querySelector("#aaa").addEventListener("click", function () { playSample("A.mp3"); });
    document.querySelector("#ccc").addEventListener("click", function () { playSample("C.mp3"); });
    document.querySelector("#fff").addEventListener("click", function () { playSample("F.mp3"); });
    document.querySelector("#ggg").addEventListener("click", function () { playSample("G.mp3"); });
    document.querySelector("#laugh1").addEventListener("click", function () { playSample("laugh-1.mp3"); });
    document.querySelector("#laugh2").addEventListener("click", function () { playSample("laugh-2.mp3"); });
    document.querySelector("#playb").addEventListener("click", myloop);
    document.querySelector("#trash").addEventListener("click", deletebeat);
    document.querySelector("#mic").addEventListener("click", recordbeat);
});
var intloop;
var beat = ["kick.mp3", "snare.mp3", "hihat.mp3"];
var stopplay = false;
function playSample(sounds) {
    var sound = new Audio("assets/" + sounds);
    sound.play();
    if (stopplay == true) {
        beat.push(sounds);
    }
}
function myloop(event) {
    var index = 0;
    var meinbutton = document.querySelector("#playb");
    if (meinbutton.className == "fas fa-play") {
        meinbutton.className = "fas fa-pause";
        intloop = setInterval(loopbeat, 400);
        stopplay = false;
    }
    else {
        meinbutton.className = "fas fa-play";
        clearInterval(intloop);
    }
    console.log(meinbutton);
    function loopbeat() {
        playSample(beat[index]);
        index++;
        if (index == beat.length) {
            index = 0;
            console.log(beat[index]);
        }
    }
}
function deletebeat() {
    beat = [];
}
function recordbeat() {
    stopplay = true;
}
//# sourceMappingURL=aufg8.js.map