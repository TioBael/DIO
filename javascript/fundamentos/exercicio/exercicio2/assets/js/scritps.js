function substituirPares(array){
    if( (!array) || array.length == 0 ) return -1;
    let newArray = [];

    for(let i=0;i<array.length;i++){
            if(array[i] % 2 === 0){
                console.log(`Changing ${array[i]} to 0....`);
                newArray[i] = 0;
            }
            else
                newArray.push(array[i]);
    }
    console.log("----");
    return newArray;
}
let arrayOriginal = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(`Input: ${arrayOriginal}\nOutput: ${substituirPares(arrayOriginal)}`);