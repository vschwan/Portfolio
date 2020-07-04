declare var Artyom: any;
//Damit erklären wir ts, dass es Artyom gibt?
window.addEventListener("load", function(): void {
    const artyom: any = new Artyom();
    

    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"], //wildcard wird definiert mit "*"
        smart: true,
        action: function(i: any, wildcard: string): void {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
        }
    });
    
    function startContinuousArtyom(): void {
        artyom.fatality();
    
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            250);
    }
    
    startContinuousArtyom();
    
});