function soma(a, b){
	return a+b;
}

function returnEvenValues(array){
	let evenNums = [];
	for(let i=0; i<array.length; i++)
		if(array[i] % 2 == 0)
			evenNums.push(array[i]);
		else
			console.log('O numero: ', array[i], 'é impar!');
	console.log('\nOs numeros pares dessa lista: ', evenNums);
}


console.log("\nhello world!");
console.log('\n', soma(3, 5)); // Retorno esperado, 8.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
returnEvenValues(array);