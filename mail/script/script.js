//CHIEDO ALL'UTENTE LA SUA EMAIL
var EmailUtente = prompt("Inserisci la tua Email");

// EMAIL GIA' REGISTRATE NEL DATABASE
var database = ["fede@hotmail.it" , "avril@hotmail.it" , "polly@hotmail.it"];
var mail = false;
for (var i = 0; i < database.length; i++) {
  if (EmailUtente == database[i]) {
    mail = true;
  }
}

if (mail == true) {
  alert("Hai effettuato correttamente l'accesso");
} else {
  alert("Hai inserito una email errata");
}
