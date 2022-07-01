var a=1;
var b=2;

if(a===1){
	var a = 11; // Escopo global
	let b = 22; // Escopo local

	console.log(a); // Valor esperado 11
	console.log(b); // Valor esperado 22
}

console.log(a); // Valor esperado 11
console.log(b); // Valor esperado 2