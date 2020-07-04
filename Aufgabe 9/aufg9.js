"use strict";
window.addEventListener("load", function () {
    var index = 0;
    var child = 0;
    var addtasks = document.querySelector("#textfeld");
    var punkte = [];
    addtasks.addEventListener("keyup", pushelement);
    var container = document.querySelector("#container");
    console.log(punkte);
    /*  var body = document.querySelector("body"); */
    container.addEventListener("click", deletef);
    child = document.querySelector("#container").childElementCount;
    document.querySelector("#ch").innerHTML = child;
    function pushelement(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            punkte.push(addtasks.value);
            console.log(punkte);
            console.log(event.type, event.target);
        }
        while (punkte.length > index) {
            //Versuch trash und circle hier einzufügen aber war nix 
            /*    document.querySelector("#container").innerHTML += "<p>" + circle + punkte[index] + trash + "</p>";
               index++; */
            /* container.innerHTML += "<p>" + "<div class='far fa-circle'></div>    " + punkte[index] + "    <div class='fas fa-trash-alt'></div>" + "</p>";
            index++;  */
            container.innerHTML += "<div class='removetask'>" + "<p>"
                + "<button>" + "<i class='far fa-circle'></i>" + "</button>"
                + punkte[index]
                + "<button>" + "<i class='fas fa-trash-alt'></i>" + "</button>" + "</p>" + "</div>";
            index++;
            child = document.querySelector("#container").childElementCount;
            document.querySelector("#ch").innerHTML = child;
        }
    }
    /*  var meinbutton: HTMLElement = document.querySelector("#playb");
     if (meinbutton.className == "fas fa-play") {
         meinbutton.className = "fas fa-pause";
     } else {
         meinbutton.className = "fas fa-play";
 
  */
    /*  function deletef(event): void {
         var getnode = event.target;
         console.log(getnode.tagName);
         if (getnode.tagName == "I" || getnode.tagName == "button") {
         event.parentElement.remove();
         console.log("delete row");
         }
 
         }
     } */
    function deletef() {
        var d = document.querySelectorAll(".removetask");
        console.log(d);
        for (var i = 0; i < d.length; i++) {
            d[i].addEventListener("click", function () {
                this.style.display = 'none';
                child--;
                document.querySelector("#ch").innerHTML = child;
                console.log(child);
            });
        }
    }
});
/*statt icon, checkbox?
ein weg
pseudo klassen --> querySelector(element:last-child().addEventlistener("click", ) ----> weil schleife, auf letztes Kind des Elements wird der Eventlistener gesetzt



anderer Weg und eleganter angeblich
event handle

HTMLElement --> incode variante des Elements in HTML
var element : HTMLElement
element =document.querySelector("content (also id, class, tag)");
var new = document.createElement("div");
new.id="bla";
elemnt.appendChild(new);

function myunction(event:Event){
    
}



*/ 
//# sourceMappingURL=aufg9.js.map