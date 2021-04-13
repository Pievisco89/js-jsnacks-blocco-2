/* risultato somma totale */
var totale = 0;

/* ciclo for richiesta numeri */
for(var i = 0; i < 5; i++){
  var numero = parseInt(prompt("Inserisci un numero"));
  totale += numero;
}

/* ciclo while richiesta numeri */
/* var i = 0;

while(i < 5){
  var numero = parseInt(prompt("Inserisci un numero"));
  totale += numero;
  i++;
} */

/* stampa somma numeri */
console.log(totale)