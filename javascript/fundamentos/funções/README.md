# Funções

## Indice

1. [Declaração de uma função](https://github.com/TioBael/DIO/tree/main/javascript/fundamentos/fun%C3%A7%C3%B5es#declara%C3%A7%C3%A3o-de-uma-fun%C3%A7%C3%A3o)
2. [Tipos](https://github.com/TioBael/DIO/tree/main/javascript/fundamentos/fun%C3%A7%C3%B5es#tipos)

    - [Função Anonima](https://github.com/TioBael/DIO/tree/main/javascript/fundamentos/fun%C3%A7%C3%B5es#fun%C3%A7%C3%A3o-anonima)
    - [Callbacks](https://github.com/TioBael/DIO/tree/main/javascript/fundamentos/fun%C3%A7%C3%B5es#--callbacks-)
3. [Parametros](https://github.com/TioBael/DIO/tree/main/javascript/fundamentos/fun%C3%A7%C3%B5es#parametros)
    
    3.1 [Valores padrão](https://github.com/TioBael/DIO/tree/main/javascript/fundamentos/fun%C3%A7%C3%B5es#--valores-padr%C3%A3o)
    
    3.2 [Arguments](https://github.com/TioBael/DIO/tree/main/javascript/fundamentos/fun%C3%A7%C3%B5es#--arguments)
    
    3.3 [Spread](https://github.com/TioBael/DIO/tree/main/javascript/fundamentos/fun%C3%A7%C3%B5es#--spread)
    
    3.4 [Rest](https://github.com/TioBael/DIO/tree/main/javascript/fundamentos/fun%C3%A7%C3%B5es#--rest)
    
    3.5 [Object Destructuring](https://github.com/TioBael/DIO/tree/main/javascript/fundamentos/fun%C3%A7%C3%B5es#--object-destructuring)
4. [Loops](https://github.com/TioBael/DIO/tree/main/javascript/fundamentos/fun%C3%A7%C3%B5es#loops)
    
    4.1 [If/Else](https://github.com/TioBael/DIO/tree/main/javascript/fundamentos/fun%C3%A7%C3%B5es#--ifelse)
    
    4.2 [Switch/case](https://github.com/TioBael/DIO/tree/main/javascript/fundamentos/fun%C3%A7%C3%B5es#--switchcase)
    
    4.3 [For e While](https://github.com/TioBael/DIO/tree/main/javascript/fundamentos/fun%C3%A7%C3%B5es#--for-e-while)
    
    4.4 [While](https://github.com/TioBael/DIO/tree/main/javascript/fundamentos/fun%C3%A7%C3%B5es#--while)
5. [This](https://github.com/TioBael/DIO/tree/main/javascript/fundamentos/fun%C3%A7%C3%B5es#--this)
6. [Call](https://github.com/TioBael/DIO/tree/main/javascript/fundamentos/fun%C3%A7%C3%B5es#--call)
7. [Bind](https://github.com/TioBael/DIO/tree/main/javascript/fundamentos/fun%C3%A7%C3%B5es#--bind)
8. [Arrow Function](https://github.com/TioBael/DIO/tree/main/javascript/fundamentos/fun%C3%A7%C3%B5es#--arrow-function)

---

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

## Tipos:
Os tipos de funções:

### - Função Anonima:
Pode ser considerada uma função anonima uma função que representa uma expressão.

    const soma = function (a,b){
        return a+b;
    }

Da mesma forma que uma função pode ser armazenada numa constante ou uma variavel. Ela é chamada de função anonima por não possuir um nome, mas sim estar associada a uma variavel.


### - Função Autoinvocável :
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

### - Callbacks :

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

---
## Parametros

### - Valores padrão

É possivel declarar um valor padrão para uma devida função.

    function exponencial(array, num=1){
        const resultado = [];
        
        for(let i=0;i<array.length;i++)
            result.push(array[i]**num);
        
        return result;
    }

    exponencial([1, 2, 3, 4])  //[1, 2, 3, 4]
    exponencial([1, 2, 3, 4], 4) //[1, 8, 27, 64]

nesse exemplo, de uma função que calcula exponencial, e como parametro é possivel só enviar o array, que ele usa o valor padrão do num como 1, e retorna os valores. Porém, também é possivel mandar um parametro para trocar o valor de "num", fazendo o calculo da exponencial.

### - Arguments

O objeto arguments é um array de todos os argumentos mandados para uma função.

    function findMax(){
        let max = -Infinity;

        for(let i = 0; i< arguments.length; i++){
            if(arguments[i] > max)
                max = arguments[i];
        }

        return max;
    }

Obs: (-Infinity declara o valor para -infinito)

Nessa função, ele vai pegar todos os valores que foram mandados para a função findMax() e procurar o maior usando o arguments

    input: findmax(1, 2, 3, 6, 90, 1);
    output: 90;

### - Spread

O spread é uma forma de utilizar arrays como argumentos, como demonstrado no exemplo a seguir:

    function sum(x, y, z){
        return x+y+z;
    }

    const numbers = [1, 2, 3];
    console.log(sum(...numbers));

Normalmente, um array é considerado somente como um argumento, mas quando se usa o Spread (os '...' antes da variavel), ele usa cada elemento do array como argumentos para a função.

### - Rest

Faz parecido com o Spread, só que em vez de ser no argumento para mandar, é justamente onde ele recebe na função, fazendo com que um elemento independente se transformar num array, como no exemplo:

    function confereTamanho(...args){
        console.log(args.length)
    }

    confereTamanho() //0
    confereTamanho(1, 2) //2
    confereTamanho(3, 4, 5) //3

### - Object Destructuring

O object destructuring serve para permitir fazer funções que quebrem o objeto, permitindo pegar facilmente certos elementos de um determinado objeto, como no exemplo:

    const user ={
        id: 42,
        displayName: 'jdoe',
        fullName:{
            firstName: 'John',
            lastName: 'Doe'
        }
    };
    function userId({id}){
        return id;
    }
    function getFullName({fullName: {firstName: first, lastName: last}}) {
        return `${first} ${last}`;
    }

    userId(user); // 42
    getFullName(user); // John Doe

Obs.: É possivel declarar outro nome na declaração quando se usa dois pontos ':' dentro das chaves.

---
## Loops

### - If/Else

Condicionais classicas, Se...Caso contrario.

    function numeroPositivo(num){
        const ehNegativo = num < 0;

        if(ehNegativo)
            return false;
        
        return true;
    }


*Disclaimer:* Javascript não tem elsif, o comando é else if.

    function numeroPositivo(num){
        const ehNegativo = num < 0;
        const maiorQueDez = num > 10;

        if(ehNEgativo)
            return "Esse número é negativo!";
        else if(!ehNegativo && maiorQueDez)
            return "Esse número é positivo e maior que 10!";
        
        return "Esse número é positivo!";
    }

### - Switch/Case

O Switch/case funciona como um if para uma quantidade grande de condicionais, onde ele verifica os cases para fazer o devido comando.

    function getAnimal(id){
        switch(id){
            case 1:
                return "cão";
                break;
            case 2:
                return "gato";
                break;
            case 3;
                return "pássaro":
                break
            default:
                return "peixe";
            }
        }

O break tem a função de não executar a função abaixo da opção selecionada e o default é para caso seja recebido opções invalidas de alguma forma.

### - For e While

O for, pode ser considerado um looping de elementos interaveis, e é uma das estruturas de looping mais usadas.

    function multiplicaPorDois(arr){
        let multiplicados = [];
        
        for(let i=0;i<arr.length;i++)
            multiplicados.push(arr[i]*2)
        return multiplicados;
    }

    const meusNumeros = [2,33,456,356,40];
    multiplicaPorDois(meusNumeros);
    //4, 66, 912, 712, 80

Onde o primeiro item do "for" ele cria uma variavel local, onde ele irá interar, o segundo item é a condição de permanencia, nesse caso, ele vai comparar se i é menor que que o tamanho do array 'arr', e o terceiro é o que ele vai fazer a cada looping obrigatoriamente, nesse caso, ele vai somar 1 na variavel 'i'.

Existe também o For...in, que ele funciona com objetos, e lê as chaves dos objetos como se fossem enumeradas.

    function forInExemplo(obj){
        for(prop in obj)
            console.log(prop);
    }

    const meuObjeto = {
        nome: "João",
        idade: "20",
        cidade: "Salvador"
    }

    forInExemplo(meuObjeto);
    // nome
    // idade
    // cidade

E também existe outra propriedade chamada For...of, onde trata dessa vez com estruturas interáveis, como strings e arrays.

    function logLEtras(palavra){
        for(letra of palavra)
            console.log(letra);
    }

    const palavra = "abacaxi";
    logLetras(palavra);
    //a
    //b
    //a
    //c
    //a
    //x
    //i

### - While

While também é uma estrutura de repetição, onde ele faz uma verificação antes de entrar no bloco de repetição, se a condição for satisfeita ele interage naquele bloco conforme a condição permitir.

    function exemploWhile(){
        let num = 0;

        while(num<=5){
            console.log(num);
            num++;
        }
    }

    exemploWhile() // 0,1,2,3,4,5

existe uma variação do While, que é o Do...while, onde a diferença é que o programa vai interar pelo menos uma vez com o bloco de repetição antes de verificar a condição de repetição;

   function exemploDoWhile(){
        let num = 0;

        do{
            console.log(num);
            num++;
        } while(num<=5);
    }

    exemploDoWhile() // 0,1,2,3,4,5

###  - This

'This' é uma palavra reservada para fazer manipulação de uma função, ela serve para fazer a manipulação referenciando a si mesmo, e não outras instancias dela.

    const pessoa ={
        firstName: "André",
        lastName: "Soares",
        id: 1,
        fullName: function(){
            return this.firstName + " " + this.lastName;
        },
        getId: function(){
            return this.id;
        }
    };

    pessoa.fullName(); //Output: "André Soares"
    pessoa.getId(); //Output: 1;
    
E é possivel trabalhar com o 'This' em conjunto a outros metodos:

### - Call

O metodo call funciona recebendo os parametros do objeto em que o 'this' vai se referir:

    const pessoa = {
        nome: 'Miguel',
    };

    const animal = {
        nome: 'Murphy,
    };

    function getSomething(){
        console.log(this.nome);
    }

    getSomething.call(pessoa);

nesse caso, o 'this' da função 'getSomething()' vai se referenciar ao objeto 'pessoa' pois é o parametro que o 'call' esta mandando.

### - Bind

O bind irá clonar a estrutura da função que esta referenciando e irá aplicar os parametros que está recebendo.

    const retornaNomes = function(){
        return this.nome
    };
    let bruno = retornaNOmes.bind({ nome: 'Bruno'});

    bruno(); //Output: 'Bruno'

### - Arrow Function

Arrow Function funciona de uma forma que serve para atribuir o retorno de uma função de outra forma, como no exemplo:

    const helloWorld = function(){
        return "Hello World";
    }

    const helloWorld = () => {
        return "Hello World;
    }

    const helloWorld = () => "Hello World";

essas três sentenças fazem a mesma coisa, e se só tiver uma linha, deixa de existir a necessidade de escrever 'return', o javascript já presume que isso é um retorno.

E caso a função tenha somente um paramentro, deixa de existir a necessidade de ter os parênteses do parametro:

    const soma = (a, b) => a+b;
    soma(4, 6); //Output: 10;

    const soma = a => a;
    soma(4); //Output: 4;

Obs.: Arrow function não faz hoisting.

Restrições da Arrow Function:

- "This" ainda se manterá global, não funcionando na Arrow Function.
- Não existe o objeto "Arguments".
- Não pode ser utilizado construtores como new MeuObjeto().