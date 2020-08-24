// CHIEDO ALL'UTENTE DI INSERIRE UN NUMERO DA 1 A 6
var numeroGiocatore = Math.floor(Math.random() * 6) + 1;
console.log("il numero del giocatore è = " + numeroGiocatore);

var numeroPc = Math.floor(Math.random() * 6) + 1;
console.log("il numero del pc è = " + numeroPc);

if (numeroGiocatore > numeroPc) {
  alert("Complimenti hai vinto, il tuo numero è " + numeroGiocatore);
} else if (numeroGiocatore < numeroPc) {
  alert("Ritenta sarai più fortunato, il numero del pc è " + numeroPc);
} else {
  alert("Pareggio");
}
