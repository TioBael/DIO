function comparaNumero(num1, num2){

if(num1 == num2)
	return true;
else
	return false;
}

function checkSum(num1, num2){
	var sum = num1+num2;
	var op;
	
	if(sum<10)
		return op=0;
	else if(sum<20)
			return op=1;

	else 
		return op=2;
}

function main(num1, num2){
	if(comparaNumero(num1, num2)){
		switch(checkSum(num1, num2)){
			case 0:
				console.log("Os numeros "+num1+" e "+num2+" são iguais. Sua soma é menor que 10 e menor que 20.");
				break;
			case 1:
				console.log("Os numeros "+num1+" e "+num2+" são iguais. Sua soma é maior que 10 e menor que 20.");
				break;
			case 2:
				console.log("Os numeros "+num1+" e "+num2+" são iguais. Sua soma é maior que 10 e maior que 20. Debug");
				break;
			default:
				console.log("Entrada inexistente");
				break;
			}
		}
	else{
		switch(checkSum(num1, num2)){
			case 0:
				console.log("Os numeros "+num1+" e "+num2+" não são iguais. Sua soma é menor que 10 e menor que 20.");
				break;
			case 1:
				console.log("Os numeros "+num1+" e "+num2+" não são iguais. Sua soma é maior que 10 e menor que 20.");
				break;
			case 2:
				console.log("Os numeros "+num1+" e "+num2+" não são iguais. Sua soma é maior que 10 e maior que 20. Debug");
				break;
			default:
				console.log("Entrada inexistente");
				break;
		}
	}
}

console.log(main(11, 10));