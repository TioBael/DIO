# Funções

No javascript, a forma de declarar funções é usando o termo "function", seguido do nome dela, como por exemplo, no "funcao.js", é possivel ver que foi declarado "function soma(a, b)", onde ele recebe os valores "a" e "b" desta ordem, e realiza a operação durante o retorno "return a+b". Onde terá um retorno aonde for chamado, poderia não ter retorno também, usar um "console.log(a+b)", onde seria entregue no console.

Mas para utilizar a função, ela tem de ser chamada durante o codigo, nesse caso, é possivel chamar usando "soma(3, 5);", onde ele mandará o valor "3" e "5" respectivamente para a função e retornará o resultado, que nesse caso esperado é 8.

-------

## Declaração de uma função

Uma função pode ser declarada com o como o bloco de codigo a seguir:

    function nome_da_função(parametros){
        // instruções
    }

e qualquer variavel criada dentro de uma função é considerada uma variavel local, logo só funciona no escopo local.

    function nome_da_função(parametros){
        // instruções
        return; //valor de retorno
    }

a palavra "Return" indica o fim de uma função, não importa se for o final do bloco do codigo ou se for um fim prematuro, podendo retornar um valor ou somente acabar o bloco de codigo.

---
## Função Anonima
Pode ser considerada uma função anonima uma função que representa uma expressão.

    const soma = function (a,b){
        return a+b;
    }

Da mesma forma que uma função pode ser armazenada numa constante ou uma variavel. Ela é chamada de função anonima por não possuir um nome, mas sim estar associada a uma variavel.

---
## Função Autoinvocável 
A função autoinvocável (ou IIFE - Immediately Invoke Function Expression) é uma função parecida com a função anonima, pois não é necessario de ter um nome. Ela ira se chamar logo após a criação de suas instruções:

    (
        function(){
            let name = "Javascript";
            return name;
        }
    )();
    // Javascript

e ela pode receber parametros:

    (
        function(a, b){
            return a+b;
        }
    )(1, 2);
    // 3

e também pode ser armazenada em uma variável:
    
    const soma3 = (
        function(){
            return a+b;
        }
    )(1, 2);
    console.log(soma3) //3

---
## Callbacks

Basicamente uma função que é usada como parametro de outra função:

    const calc = function(operacao, num1, num2){
        return operacao(num1, num2);
    }

    const soma = function(num1, num2){
        return num1 + num2;
    }

    const sub = function(num1, num2){
        return num1 - num2;
    }

    const resultSoma = calc(soma, 1, 2);
    const resultSub calc(sub, 1, 2);

    console.log(resultSoma); // 3
    console.log(resultSub); // -1

