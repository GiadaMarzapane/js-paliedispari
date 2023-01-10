const parolaUtente = prompt('Inserisci una parola, verifichiamo se è palindroma');
console.log(parolaUtente);

function parolaPalindroma (parolaDaVerificare){
    
    let reverseParola = parolaDaVerificare.split('').reverse().join('');
    
    if(reverseParola === parolaUtente){
        return alert('la parola è palidroma');
    }
    else{
        return alert('la parola NON è palidroma');
    }
    
}

const parolaVerficata = parolaPalindroma(parolaUtente);