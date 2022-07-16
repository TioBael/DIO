function checkPalindromo(frase){
    if(!frase) return;
    
    let fraseWrapper = frase.toLowerCase();
    let reverso = frase.toLowerCase().split("").reverse().join("");


    if(fraseWrapper == reverso)
        return true;
    
    return false;
}

let candidatoPalindromo = "Desoxirribonucleico"
if(!checkPalindromo(candidatoPalindromo))
    console.log(`${candidatoPalindromo} não é palindromo`);
else
    console.log(`${candidatoPalindromo} é palindromo`);