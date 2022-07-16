# Orientação a Objeto

A orientação a objeto é um paradigma de programação voltado a separar problemas em classes, metodos e objetos.

## Pilares da orientação a objetos


1. Abstração:

    O processo de abstração nesse paradigma é tornar um objeto complexo em um mais simples, generalizando ele o maximo o possivel, como por exemplo: Um carro de quarto portas, ele pode ser abstraido como uma forma de carro, que por sua vez pode ser abstraido em uma forma de veiculo com rodas, que por mais ainda pode ser abstraido em uma forma mais geral o possivel como uma forma de veiculo.

2. Herança:
    
    O processo de herança nesse paradigma permite que objetos declarados como pais possam dar como herança propriedades para o objeto filho. Como por exemplo: Um carro herda do objeto "veiculo com rodas" a propriedade "quantidade de rodas", nesse caso, o "carro" é o objeto filho, e "veiculo com rodas" é o objeto pai.

3. Encapsulamento:

    O encapsulamento indica que cada classe tem seus proprios métodos e propriedades, e eles são independente do código.

4. Polimorfismo

    O polimorfismo permite que varios filhos herdem de suas classes pais, porém, possam trabalhar de forma diferente, como por exemplo: O carro herdou a classe "quantidade de rodas" da classe pai "Veiculo com rodas, e a classe moto também herdou "quantidade de rodas", mas o carro tem o valor de 4, e na moto, o valor de 2.

## Protótipo

O protótipo no javascript é basicamente o esqueleto de todos os objetos, onde contém todos os métodos e propriedades do prototype, pois o objeto Prototype é o pai de todos os outros objetos.

## Classes

Originalmente, o javascript não tem as classes, ela funciona como uma forma de escrita para facilitar o desenvolvimento.

    class Meal{
        constructor (food){
            this.food = food;
        }

        eat(){
            return 'good!';
        }
    }

exemplo 2:

    class Animal{
        constructor(type = 'animal'){
            this.type = type;
        }

        //getter
        get type(){
            return this._type;
        }

        //setter
        set type(val){
            this._type = val.toUpperCase();
        }

        makeSound(){
            console.log('making animal sound');
        }
    }

    class Cat extends Animal{
        constructor(){
            super('cat');
        }

        makeSound(){
            super.makeSound();
            console.log('Meow!');
        }
    }

    let a = new Animal();
    console.log(a.type); //Output: ANIMAL

    let b = new Cat();
    console.log(b.type); //Output: CAT

## Exercicio

Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

1. Crie a classe `ContaBancaria`, que possui os parâmetros `agencia`, `numero`, `tipo` e `saldo`;
2. Dentro de `ContaBancaria`, construa o getter e o setter de `saldo`;
3. Dentro de `ContaBancaria`, crie os métodos `sacar` e `depositar`;
4. Crie uma classe-filha chamada `ContaCorrente` que herda todos esses parâmetros e ainda possua o parâmetro `cartaoCredito`;
5. Ainda em `ContaCorrente`, construa o getter e o setter de `cartaoCredito`;
6. Ainda em `ContaCorrente`, faça com que o `tipo` seja 'conta corrente' por padrão;
7. Crie uma classe-filha chamada `ContaPoupanca` que herda todos os parâmetros de `ContaBancaria`;
8. Crie uma classe-filha chamada `ContaUniversitaria` que herda todos os parâmetros de `ContaBancaria`;
9. Faça com que o método `saque` de `ContaUniversitaria` apenas seja capaz de sacar valores **menores que 500 reais**