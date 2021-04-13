/* richiesta numero utente */
var num_utente = parseInt(prompt("Inserisci un numero"));
var num_dispari;

/* se pari lo stampo, se dipari stampo successivo */
if(num_utente % 2 === 0){
  console.log(num_utente);
  document.getElementById('output').innerHTML = num_utente;
}else{
  num_dispari = num_utente + 1;
  console.log(num_dispari);
  document.getElementById('output').innerHTML = num_dispari;
}