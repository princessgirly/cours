//Programme qui demande l'heure et reponds ce que donnera l'heure 1 seconde après

var heure = Number(prompt("Donner l'heure qu'il est en 2 chiffres"));
var minute = Number(prompt("Quelle minute est-il ?"));
var seconde = Number(prompt("Quelle seconde est-il ?"));

if ((heure >= 0 && heure <= 23) && (minute >= 0 && minute <= 59) && (seconde >= 0 && seconde <= 59)) {
    seconde++;
    if (seconde === 60) {
        seconde = 0;
        minute++;
    if (minute === 60) {
        minute = 0;
        heure++;
    if (heure === 24) {
        heure = 0;
    }
}
}
console.log("Dans une seconde il sera :" + heure + " heures " + minute + " minutes " + seconde + " secondes");
} else {
    console.log("Vous vous êtes trompé d'heure");
}



//resultat en rentrant comme valeur 10h 20m 21s
Dans une seconde il sera :10 heures 20 minutes 22 secondes
