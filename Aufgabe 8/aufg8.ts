window.addEventListener("load", function (): void {
    document.querySelector("#cick").addEventListener("click", function (): void { playSample("kick.mp3"); });
    document.querySelector("#snare").addEventListener("click", function (): void { playSample("snare.mp3"); });
    document.querySelector("#hihat").addEventListener("click", function (): void { playSample("hihat.mp3"); });
    document.querySelector("#aaa").addEventListener("click", function (): void { playSample("A.mp3"); });
    document.querySelector("#ccc").addEventListener("click", function (): void { playSample("C.mp3"); });
    document.querySelector("#fff").addEventListener("click", function (): void { playSample("F.mp3"); });
    document.querySelector("#ggg").addEventListener("click", function (): void { playSample("G.mp3"); });
    document.querySelector("#laugh1").addEventListener("click", function (): void { playSample("laugh-1.mp3"); });
    document.querySelector("#laugh2").addEventListener("click", function (): void { playSample("laugh-2.mp3"); });
    document.querySelector("#playb").addEventListener("click", myloop);
    document.querySelector("#trash").addEventListener("click", deletebeat);
    document.querySelector("#mic").addEventListener("click", recordbeat);
    
});
var intloop: number;
var beat: string[] = ["kick.mp3", "snare.mp3", "hihat.mp3"];
var stopplay: boolean = false;

function playSample(sounds: string): void {
    var sound: HTMLAudioElement = new Audio("assets/" + sounds);
    sound.play();
    if (stopplay == true) {
        beat.push(sounds);
    }
}

function myloop(event): void {
    var index: number = 0;
    var meinbutton: HTMLElement = document.querySelector("#playb");
    if (meinbutton.className == "fas fa-play") {
        meinbutton.className = "fas fa-pause";
        intloop = setInterval(loopbeat, 400);
        stopplay = false;
    } else {
        meinbutton.className = "fas fa-play";
        clearInterval(intloop);
    }
    console.log(meinbutton);

    function loopbeat(): void {
        playSample(beat[index]);
        index++;
        if (index == beat.length) {
            index = 0;
            console.log(beat[index]);
        }
    }
}
function deletebeat (): void {
    beat = [];
}

function recordbeat (): void {
    stopplay = true;
}