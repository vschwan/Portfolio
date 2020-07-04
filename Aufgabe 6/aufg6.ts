
var euro18:number =4209.3; 
var euro8:number= 4965.7;
var afr18: number=1235.5;
var afr8:number=1028;
var sa18: number=1261.5;
var sa8: number=1132.6;
var na18: number=6035.6;
var na8: number=6600.4;
var asia18: number=16274.1;
var asia8: number=12954.7;
var austr18:  number=2100.5;
var austr8: number=1993;
var gesamt18: number= euro18+sa18+afr18+na18+asia18+austr18;

var emreleuro: number= (euro18/gesamt18)*100;
var grabseuro: number= ((euro18/euro8)*100)-100;
var grreleuro: number= euro18-euro8;
var euro1: string="Die Emission von Europa ist: " +euro18+ " kg CO2";
var euro2: string="Relativ zur Gesamtemission der Welt verursacht Europa damit "+emreleuro+"%";
var euro3: string="Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um "+grabseuro+"% verändert";
var euro4: string="2018 im Vergleich zu 2008 sind das " +grreleuro+ " kg CO2";
console.log(euro1);
console.log(euro2);
console.log(euro3); 
console.log(euro4);

var emrelafr: number= (afr18/gesamt18)*100;
var grabsafr: number= ((afr18/afr8)*100)-100;
var grrelafr: number= afr18-afr8;
var afr1: string="Die Emission von Afrika ist: " +afr18+ " kg CO2";
var afr2: string="Relativ zur Gesamtemission der Welt verursacht Afrika damit "+emrelafr+"%";
var afr3: string="Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um "+grabsafr+"% verändert";
var afr4: string="2018 im Vergleich zu 2008 sind das " +grrelafr+ " kg CO2";
console.log(afr1);
console.log(afr2);
console.log(afr3); 
console.log(afr4);

var emrelsa: number= (sa18/gesamt18)*100;
var grabssa: number= ((sa18/sa8)*100)-100;
var grrelsa: number= sa18-sa8;
var sa1: string="Die Emission von Südamerika ist: " +sa18+ " kg CO2";
var sa2: string="Relativ zur Gesamtemission der Welt verursacht Südamerika damit "+emrelsa+"%";
var sa3: string="Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um "+grabssa+"% verändert";
var sa4: string="2018 im Vergleich zu 2008 sind das " +grrelsa+ " kg CO2";
console.log(sa1);
console.log(sa2);
console.log(sa3); 
console.log(sa4);

var emrelna: number= ((na18/gesamt18)*100);
var grabsna: number= ((na18/na8)*100)-100;
var grrelna: number= na18-na8;
var na1: string="Die Emission von Nordamerika ist: " +na18+ " kg CO2";
var na2: string="Relativ zur Gesamtemission der Welt verursacht Nordamerika damit "+emrelna+" %";
var na3: string="Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um "+grabsna+"% verändert";
var na4: string="2018 im Vergleich zu 2008 sind das " +grrelna+ " kg CO2";
console.log(na1);
console.log(na2);
console.log(na3); 
console.log(na4);

var emrelasia: number= (asia18/gesamt18)*100;
var grabsasia: number= ((asia18/asia8)*100)-100;
var grrelasia: number= asia18-asia8;
var asia1: string="Die Emission von Asien ist: " +asia18+ " kg CO2";
var asia2: string="Relativ zur Gesamtemission der Welt verursacht Asien damit "+emrelasia+" %";
var asia3: string="Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um "+grabsasia+"% verändert";
var asia4: string="2018 im Vergleich zu 2008 sind das " +grrelasia+ " kg CO2";
console.log(asia1);
console.log(asia2);
console.log(asia3); 
console.log(asia4);


var emrelaustr: number= (austr18/gesamt18)*100;
var grabsaustr: number= ((austr18/austr8)*100)-100;
var grrelaustr: number= austr18-austr8;
var austr1: string="Die Emission von Asutralien ist: " +austr18+ " kg CO2";
var austr2: string="Relativ zur Gesamtemission der Welt verursacht Australien damit "+emrelaustr+" %";
var austr3: string="Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um "+grabsaustr+"% verändert";
var austr4: string="2018 im Vergleich zu 2008 sind das " +grrelaustr+ " kg CO2";
console.log(austr1);
console.log(austr2);
console.log(austr3); 
console.log(austr4);

function europa (){
document.querySelector('#title').innerHTML="Carbon Dioxide Emissions in Europe";
document.querySelector('#emis').innerHTML= "" +euro18;
document.querySelector('#emistext').innerHTML="Emission absolute of Europe in 2018";
document.querySelector('#relemis').innerHTML=""+Math.round(emreleuro)+"%";
document.querySelector('#grrelative').innerHTML="" + Math.round(grabseuro)+"%";
document.querySelector('#grabsolute').innerHTML="" + Math.round(grreleuro);
document.querySelector('.chart').setAttribute("style", 'height:'+emreleuro+ '%');
}
window.addEventListener('load', function(){
document.querySelector('#feuro').addEventListener('click', europa);
});

function namerika(){
    document.querySelector('#title').innerHTML="Carbon Dioxide Emissions in North America";
    document.querySelector('#emis').innerHTML= "" +na18;
    document.querySelector('#emistext').innerHTML="Emission absolute of North America in 2018";
    document.querySelector('#relemis').innerHTML=""+Math.round(emrelna)+"%";
    document.querySelector('#grrelative').innerHTML="" + Math.round(grabsna)+"%";
    document.querySelector('#grabsolute').innerHTML="" + Math.round(grrelna);
    document.querySelector('.chart').setAttribute("style", 'height:'+emrelna+ '%');
    }
    
    window.addEventListener('load', function(){
    document.querySelector('#fna').addEventListener('click', namerika);
    });

    function samerika(){
        document.querySelector('#title').innerHTML="Carbon Dioxide Emissions in South America";
        document.querySelector('#emis').innerHTML= "" +sa18;
        document.querySelector('#emistext').innerHTML="Emission absolute of South America in 2018";
        document.querySelector('#relemis').innerHTML=""+Math.round(emrelsa)+"%";
        document.querySelector('#grrelative').innerHTML="" + Math.round(grabssa)+"%";
        document.querySelector('#grabsolute').innerHTML="" + Math.round(grrelsa);
        document.querySelector('.chart').setAttribute("style", 'height:'+emrelsa+ '%');
        }
        
        window.addEventListener('load', function(){
        document.querySelector('#fsa').addEventListener('click', samerika);
        });

        function africa(){
            document.querySelector('#title').innerHTML="Carbon Dioxide Emissions in Africa";
            document.querySelector('#emis').innerHTML= "" +afr18;
            document.querySelector('#emistext').innerHTML="Emission absolute of Africa in 2018";
            document.querySelector('#relemis').innerHTML=""+Math.round(emrelafr)+"%";
            document.querySelector('#grrelative').innerHTML="" + Math.round(grabsafr)+"%";
            document.querySelector('#grabsolute').innerHTML="" + grrelafr;
            document.querySelector('.chart').setAttribute("style", 'height:'+emrelafr+ '%');
            }
            
            window.addEventListener('load', function(){
            document.querySelector('#fafrica').addEventListener('click', africa);
            });

            function asia(){
                document.querySelector('#title').innerHTML="Carbon Dioxide Emissions in Asia";
                document.querySelector('#emis').innerHTML= "" +asia18;
                document.querySelector('#emistext').innerHTML="Emission absolute of Asia in 2018";
                document.querySelector('#relemis').innerHTML=""+Math.round(emrelasia)+"%";
                document.querySelector('#grrelative').innerHTML="" + Math.round(grabsasia)+"%";
                document.querySelector('#grabsolute').innerHTML="" + Math.round(grrelasia);
                document.querySelector('.chart').setAttribute("style", 'height:'+emrelasia+ '%');
                }
                
                window.addEventListener('load', function(){
                document.querySelector('#fasia').addEventListener('click', asia);
                });

                function australia(){
                    document.querySelector('#title').innerHTML="Carbon Dioxide Emissions in Australia";
                    document.querySelector('#emis').innerHTML= "" +austr18;
                    document.querySelector('#emistext').innerHTML="Emission absolute of Australia in 2018";
                    document.querySelector('#relemis').innerHTML=""+Math.round(emrelaustr)+"%";
                    document.querySelector('#grrelative').innerHTML="" +Math.round (grabsaustr)+ "%";
                    document.querySelector('#grabsolute').innerHTML="" + grrelaustr;
                    document.querySelector('.chart').setAttribute("style", 'height:'+emrelaustr+ '%');
                    }
                    
                    window.addEventListener('load', function(){
                    document.querySelector('#faustr').addEventListener('click', australia);
                    });
    
    
