function sceltaPc() {

    const scelta = Math.ceil(Math.random() * 5);

    return scelta;
}

function sommaScelte(num1, num2) {

    const somma = num1 + num2;

    return somma;

}

const sceltaUtenteUno = prompt('Scommettiamo, scegli PARI o DISPARI!');
const sceltaUtenteDue = parseInt(prompt('Ora scegli un numero da 1 a 5'));
const sceltaPcDue = sceltaPc();

console.log("La scelta dell'utente è: ", sceltaUtenteDue);
console.log("La scelta cel PC è ", sceltaPcDue);

console.log(sommaScelte(sceltaUtenteDue, sceltaPcDue));

if ((sommaScelte % 2 == 0) && (sceltaUtenteUno == 'pari')){
    alert('Hai scommesso: ' + sceltaUtenteUno + ' HAI VINTO!!!')
}
else{
    alert('Hai scommesso: ' + sceltaUtenteUno + " HAI PERSO. Pc Vince!!!")
}