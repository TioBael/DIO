# SET

Set é uma estrutura que somente admite valores unicos.

    const mySet = new Set();

## Métodos:

### Adicionar:

    mySet.add(1);
    mySet.add(5);

### Verificar:

    mySet.has(1)
    //Output: true

    MySet.has(3);
    //Output: false

### Deletar:

    mySet.delete(5);

## Diferença Set vs Array:

- Set somente admite valores unicos
- em vez de usar .length, ele usa a propriedade 'size'
- Não possue outros metodos de array como map, filter, reduce, ...

## Exercicio:

Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], e retorne outro array apenas com valores únicos.

Resolução se encontra [aqui](js/exercicio.js).