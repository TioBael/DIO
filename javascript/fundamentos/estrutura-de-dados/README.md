# Estrutura de dados

O Javascript contém dois tipos de dados:

## Tipo Primitivo
 * Numeros
 * strings
 * boolean
## Tipo não primitivo/compost
 * Objects
 * Arrays
-------
# Tipos Primitivos

Os tipos primitivos são intercambiaveis, logo ele pode receber um valor de tipo string e logo em seguida receber um numero como no [exemplo 1](assets/js/exemplo1.js), onde é possivel ver que inicialmente ele recebe a string "um", e logo em seguida ele recebe o numero "1".

## Strings

São textos ou numeros que serão tratados como texto, aonde será trabalhado com os caracteres daquele contexto.

Os valores são declarados com aspas ( " " ) ou a crase ( ` ). A crase é usada no momento que queria se aproveitar da interpolação, onde dentro de uma string, sem a necessidade de fechar e contatenar, pode ser chamado uma variavel.

No [exemplo 2](assets/js/exemplo2.js) é possivel ver a declaracão de variaveis de tipo string primitivo, onde recebem um determinado valor, e a criação de um objeto também de tipo string, onde permite eu usar funções de como por exemplo ".lenght" ou ".charAt()".

Mas da mesma forma que como objeto eu posso usar as funções como objeto, eu também posso usar as funções como primitivo, como é possivel ver com a variavel "contatenado", pois internamente o Javascript ao receber a chamada de função ele converte para Objeto para ser possivel o uso das chamdas de função. No caso de Strings, é normal ver o uso de primitivo, pela facilidade e rapidez na compilação.

## Numeros

Numeros são os tipos mais simples, podendo ser inteiros ou decimais, e com numeros são possiveis fazer operações aritméticas, como no [exemplo 3](assets/js/exemplo3.js), a variavel "num" recebe o valor 10, e logo em seguida é mandado o console imprimir a soma de "num" + 100.

Sendo uma coisa interessante citar, a possibilidade de conversão de um tipo de dado para outro, por exemplo, se eu quiser a qualquer momento transformar a variavel "num", que é um inteiro numa String, eu posso chamando o comando ".toString()", fazendo num.toString(), como demonstrado no exemplo 3.

## Booleanos

Valores booleanos como os numeros também são valores simples, podendo assumir dois valores: True(Verdadeiro) ou False(Falso).

No [exemplo 4](assets/js/exemplo4.js), é possivel ver duas comparações, uma perguntando se 3 é igual a 4, o que faz a atribuição do valor booleano 'False', e logo em seguida se 3 é igual a 3, o que faz a atribuição do valor booleano para 'True'.

## Arrays

Arrays, ou vetores são uma lista de elementos com uma ordenação que começa no "index 0".

Para adicionar um valor no array, pode ser utilizado o metodo ".push()", onde será adicionado o valor mandado ao metodo no final do array. Assim como é possivel adicionar no inicio do array com o metodo ".unshift()".

Para remover um valor do array, pode ser utilizado o metodo ".pop()", onde ele removerá o ultimo elemento do array. Assim como é possivel remover o primeiro elemento do array com o metodo ".shift()".

No [exemplo 5](assets/js/exemplo5.js), é possivel ver as interações de .push() e de .pop();

Dentre varios outros metodos que são possiveis ver na documentação.

---
# Tipos Não-Primitivos

## Objetos
Objetos são tipos não primitivos de dados, onde funciona como uma estrutura de tipo "Chave e valor", onde uma variavel pode conter declarações dentro dela, denominadas 'chaves' e seus respectivos valores, como por exemplo:

    let person = {
        name: 'João',
        age: 20
    };
onde "name" e "age" são chaves, e "João" e "20" são os valores.

É possivel saber as chaves de um objeto chamando o metodo "Object.keys()", e enviando como parametro o objeto criado:

    input: Object.keys(person);
    output: name,age

É possivel saber os valores no objeto chamando o metodo "Object.values()", e enviando como parametro o objeto criado:

    input: Object.values(person);
    output: João,20

No [exemplo 6](assets/js/exemplo6.js) é possivel ver alguns exemplos de Objects.