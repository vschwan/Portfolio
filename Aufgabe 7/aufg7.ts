//anonyme funktion nötig wegen übergabeparameter
window.addEventListener("load", function (assets) {
    document.querySelector("#cick").addEventListener("click", function (): void { playSample("./assets/kick.mp3"); });
    document.querySelector("#snare").addEventListener("click", function (): void { playSample("./assets/snare.mp3"); });
    document.querySelector("#hihat").addEventListener("click", function (): void { playSample("./assets/hihat.mp3"); });
    document.querySelector("#aaa").addEventListener("click", function (): void { playSample("./assets/A.mp3"); });
    document.querySelector("#ccc").addEventListener("click", function (): void { playSample("./assets/C.mp3"); });
    document.querySelector("#fff").addEventListener("click", function (): void { playSample("./assets/F.mp3"); });
    document.querySelector("#ggg").addEventListener("click", function (): void { playSample("./assets/G.mp3"); });
    document.querySelector("#laugh1").addEventListener("click", function (): void { playSample("./assets/laugh-1.mp3"); });
    document.querySelector("#laugh2").addEventListener("click", function (): void { playSample("./assets/laugh-2.mp3"); });
    document.querySelector("#playb").addEventListener("click", play);
});

function playSample(assets): void {
    var sound: HTMLAudioElement = new Audio(assets);
    sound.play();
}

function play(): void {
    var interval: number = setInterval(sound, 400);
    var index: number = 0;
    var beat: string[] = ["./assets/kick.mp3", "./assets/snare.mp3", "./assets/hihat.mp3"];

    function sound(): void {
        var mybeat: HTMLAudioElement = new Audio(beat[index]);
        mybeat.play();
        index++;
        if (index >= 3) index = 0;
        console.log(beat[index]);
    } 
}