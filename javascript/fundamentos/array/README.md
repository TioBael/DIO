# Array

O basico de array já foi feito no estudo de estrutura de dados, aqui terá três metodos especificos para array: <mark>Map, Filter e reduce </mark>.

## Indice

1. [Map](https://github.com/TioBael/DIO/tree/main/javascript/fundamentos/array#map)

    1.1 [map vs for..Each](https://github.com/TioBael/DIO/tree/main/javascript/fundamentos/array#map-vs-foreach)

2. [Filter](https://github.com/TioBael/DIO/tree/main/javascript/fundamentos/array#filter)


3. [Reduce](https://github.com/TioBael/DIO/tree/main/javascript/fundamentos/array#reduce)

4. [Exercicio](https://github.com/TioBael/DIO/tree/main/javascript/fundamentos/array#exercicio)

## Map

É um metodo em que retorna um novo array onde realiza as operações passadas em ordem(do index 0 em diante).

    array.map(callback, thisArg)
    callback(item, index, array)

Onde o 'callback' vai ser a função que irá ser executada em cada elemento, e o 'thisArg' é opcional, onde ele será representado como o 'this' durante a função 'callback'. Os parametros do 'callback' também não são obrigatorio, podendo somente enviar o item.

### Map vs ForEach:

    // Usando Map
    const array =[1, 2, 3, 4, 5];
    array.map((item) => item*2); //Output: [2, 4, 5, 8, 10];

    // Usando forEach
    const array = [1, 2, 3, 4, 5];
    array.forEach((item) => item*2); //Output: undefined

Basicamente, a diferença de 'map' para 'forEach' é o retorno e é possivel ter de considerar ter um Array auxiliar.

## Filter

Assim como o 'map', o 'Filter' cria um novo array e ele "Filtra" o array usando os requisitos fornecidos.

    array.filter(callback, thisArg);

E da mesma forma que o 'Map' recebia um callback e um thisArg, o filter recebe da mesma forma. O metodo é bem parecido, e como no 'map', o thisArg é opcional.

    const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];
    frutas.filter((fruta) => fruta.includes('maçã'));
    //Output: ['maçã fuji', 'maçã verde']

## Reduce

Diferente dos outros metodos, o reduce irá interagir no próprio array, e retornando um valor único.

    array.reduce(callbackFn, initialValue);

A função callback é a função que irá ser executada, e o initialValue é o valor em que o retorno ira interagir, sendo ele opcional.

    const callbackFn = function(accumulator, currentValue, index, array){
        //...
    }

    array.reduce(callbackFn, initialValue);

## Exercicio

### Map

* Pratique a sintaxe de multiplicação de números, uma vez utilizando o parametro <mark>this</mark> de um objeto criado por você, e depois sem ele.
    
    * Resolução [aqui](js/map.js)

### Filter

* Filtre e retorne todos os números pares de um array.

    * Resolução [aqui](js/filter.js)

### Reduce
1. Some todos os números de um array.
2. Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

    * Resolução [aqui](js/reduce.js)