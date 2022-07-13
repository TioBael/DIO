function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

function mapSemThis(arr){
    return arr.map((item) => item*2);
}

const maca = {
    value:2,
};

const laranja ={
    value: 3,
};

const arr = [2, 4, 6, 8, 10];

console.log('this -> maça: ', mapComThis(arr, maca));
console.log('this -> laranja: ', mapComThis(arr, laranja));

console.log('Sem this: ', mapSemThis(arr));