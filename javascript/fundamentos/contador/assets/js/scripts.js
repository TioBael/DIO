var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function decrement(){
	if(currentNumber != -10){
		currentNumber--;
		currentNumberWrapper.innerHTML = currentNumber;

		changeColor(currentNumber);
	}

	changeColorButton(currentNumber);
}

function increment(){
	if(currentNumber != 10){
		currentNumber++;
		currentNumberWrapper.innerHTML = currentNumber;

		changeColor(currentNumber);	
	}
	
	changeColorButton(currentNumber);
}

function changeColor(currentNumber){

	if(currentNumber == 0)
		document.getElementById('currentNumber').style.color = 'black';
	else
		if(currentNumber < 0)
			document.getElementById('currentNumber').style.color = 'red';
		else
			document.getElementById('currentNumber').style.color = 'blue';
}


function changeColorButton(currentNumber){
	if(currentNumber == -10){
		document.getElementById('subtrair').style.border = '0px';
		document.getElementById('subtrair').style.background = '#b1e1ff';
		document.getElementById('subtrair').style.fontSize = '0px';
	}
	else{
		document.getElementById('subtrair').style.border = '2px solid lightcoral';
		document.getElementById('subtrair').style.background = 'white';
		document.getElementById('subtrair').style.fontSize = '16pt';
	}


	if(currentNumber == 10){
		document.getElementById('adicionar').style.border = '0px';
		document.getElementById('adicionar').style.background = '#b1e1ff';
		document.getElementById('adicionar').style.fontSize = '0px';
	}
	else{
		document.getElementById('adicionar').style.border = '2px solid lightcoral';
		document.getElementById('adicionar').style.background = 'white';
		document.getElementById('adicionar').style.fontSize = '16pt';
	}
}