
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


var emrel: number= (euro18/gesamt18)*100;
var grabs: number= ((euro18/euro8)*100)-100;
var grrel: number= euro18-euro8;
var euro1: string="Die Emission von Europa ist: " +euro18+ " kg CO2";
var euro2: string="Relativ zur Gesamtemission der Welt verursacht Europa damit "+emrel+"%";
var euro3: string="Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um "+grabs+"% verändert";
var euro4: string="2018 im Vergleich zu 2008 sind das " +grrel+ " kg CO2";
console.log(euro1);
console.log(euro2);
console.log(euro3); 
console.log(euro4);


var emrel: number= (afr18/gesamt18)*100;
var grabs: number= ((afr18/afr8)*100)-100;
var grrel: number= afr18-afr8;
var afr1: string="Die Emission von Afrika ist: " +afr18+ " kg CO2";
var afr2: string="Relativ zur Gesamtemission der Welt verursacht Afrika damit "+emrel+"%";
var afr3: string="Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um "+grabs+"% verändert";
var afr4: string="2018 im Vergleich zu 2008 sind das " +grrel+ " kg CO2";
console.log(afr1);
console.log(afr2);
console.log(afr3); 
console.log(afr4);


var emrel: number= (sa18/gesamt18)*100;
var grabs: number= ((sa18/sa8)*100)-100;
var grrel: number= sa18-sa8;
var sa1: string="Die Emission von Südamerika ist: " +sa18+ " kg CO2";
var sa2: string="Relativ zur Gesamtemission der Welt verursacht Südamerika damit "+emrel+"%";
var sa3: string="Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um "+grabs+"% verändert";
var sa4: string="2018 im Vergleich zu 2008 sind das " +grrel+ " kg CO2";
console.log(sa1);
console.log(sa2);
console.log(sa3); 
console.log(sa4);

var emrel: number= ((na18/gesamt18)*100);
var grabs: number= ((na18/na8)*100)-100;
var grrel: number= na18-na8;
var na1: string="Die Emission von Nordamerika ist: " +na18+ " kg CO2";
var na2: string="Relativ zur Gesamtemission der Welt verursacht Nordamerika damit "+emrel+" %";
var na3: string="Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um "+grabs+"% verändert";
var na4: string="2018 im Vergleich zu 2008 sind das " +grrel+ " kg CO2";
console.log(na1);
console.log(na2);
console.log(na3); 
console.log(na4);


var emrel: number= (asia18/gesamt18)*100;
var grabs: number= ((asia18/asia8)*100)-100;
var grrel: number= asia18-asia8;
var asia1: string="Die Emission von Asien ist: " +asia18+ " kg CO2";
var asia2: string="Relativ zur Gesamtemission der Welt verursacht Asien damit "+emrel+" %";
var asia3: string="Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um "+grabs+"% verändert";
var asia4: string="2018 im Vergleich zu 2008 sind das " +grrel+ " kg CO2";
console.log(asia1);
console.log(asia2);
console.log(asia3); 
console.log(asia4);


var emrel: number= (austr18/gesamt18)*100;
var grabs: number= ((austr18/austr8)*100)-100;
var grrel: number= austr18-austr8;
var austr1: string="Die Emission von Asutralien ist: " +austr18+ " kg CO2";
var austr2: string="Relativ zur Gesamtemission der Welt verursacht Australien damit "+emrel+" %";
var austr3: string="Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um "+grabs+"% verändert";
var austr4: string="2018 im Vergleich zu 2008 sind das " +grrel+ " kg CO2";
console.log(austr1);
console.log(austr2);
console.log(austr3); 
console.log(austr4);










