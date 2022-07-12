# MAP

Map é uma coleção de arrays que também assume o formato "chave e valor", onde pode ser interado em um loop de "for...of"

    const myMap = new Map();

Existe varios métodos basicos para a utilização do Map:

### Adicionar:

    myMap.set('apple', 'fruit');
    //Output: Map(1){"apple" => "fruit"}

### Recuperar um valor:

    myMap.get(apple);
    //Output: "fruit"

### Deletar:

    myMap.delete("apple");
    //Output: true

## Diferenças de Map para Objeto:

- Chaves podem ser qualquer valor, onde objeto só assume strings.

- Possuem o metodo length.

- Os valores no map tem o mesmo tipo.

## Exercicio

Crie uma função que retorna o nome do smembros de um Map que tem o papel 'ADMIN' no sistema.

1. Crie uma função <mark>getAdmins</mark> que recebe um <mark>Map</mark>;
2. Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex.: 'Luiz' => 'Admin');
3. Dentro de <mark>getAdmins</mark>, utilize o loop <mark>for...of</mark> para retornar uma lista com os nomes dos usuarios que são administradores.

Resolução: [aqui](js/exercicio.js).