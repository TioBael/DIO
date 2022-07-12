const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
	let newArr = [];
	const mySet = new Set(arr);
	for(let item of mySet)
		newArr.push(item);

	return newArr;
}


console.log(valoresUnicos(meuArray));