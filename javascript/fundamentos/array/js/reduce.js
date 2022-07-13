//1-Some todos os números de um array.
function somador(arr){
    return arr.reduce((previous, current) => previous + current);
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Soma dos numeros do array arr1: ', somador(arr1));


/*
2- Crie uma função que recebe uma lista de preços 
e um número representando o saldo disponível. 
Calcule qual será o saldo final após subtrair 
todos os preços da lista enviada.
*/
function calculaSaldo(saldo, arr){
    return arr.reduce((previous, current) => previous - current.preco, saldo);
}

const saldo = 100;
const lista = [
    {
        nome: 'Camisa',
        preco: 70,
    },
    {
        nome: 'Tenis',
        preco: 120,
    },
    {
        nome: 'Boné',
        preco: 50,
    },
];

console.log('Lista de preço - saldo: ', calculaSaldo(saldo, lista));