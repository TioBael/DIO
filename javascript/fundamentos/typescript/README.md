# TypeScript

O typescript é como se fosse uma especie de complemento para o javascript, adicionando checagem de tipo, para com que o desenvolvedor não perca muito seu tempo fazendo varias checagens, dentre outras funções a mais.

Como nesse [exemplo](index.html), o script foi criado com o .ts, podendo ver o script [aqui](assets/index.ts), ele foi buildado usando o `npm i parcel-bundler` e alterando o [package.json](package.json) para incluir o script `"start": "parcel index.html"`.

Exemplo de tipagem:

    function soma(a: number, b: number){
    return a+b;
    }

Desta forma, será restrito que `a` e `b` serão numeros, e se passar qualquer outro valor, irá retornar um error.

## Types e Interfaces:

O typescript permite implementações de types, que pode ser comparado com struct da linguagem 'C' onde você declara e faz a devida validação depois, porém, é mais normal usar o type como metodo de validação e controle de interfaces:

    type IDomestico = IFelino | ICanino;

Nesse type, onde for atribuido IDomestico, ao atribuir um desses tipos, o typescript irá somente apresentar as propriedades relacionadas ou ao IFelino ou ao ICanino.

Interfaces são uma especie de contrato, onde aqueles que usarem a interface, tem de seguir o que foi declarado por elas, suas opções ou suas propriedades.

## Tratando Tag input:

O desenvolvimento para javascript tem um foco pesado, na maioria das vezes em desenvolvimento web, fazendo com que interação com os fragmentos de HTML e CSS sejam desejavéis, e o Typescript permite tal interação, como será demonstrado no [exemplo](assets/tratando-tag.ts).

Como é possivel resgatar o `input` de um HTML sem ter de resgatar a `div` inteira:

    const input = document.getElementById('input') as HTMLInputElement;

## Generic Types

Normalmente, o javascript por ser uma linguagem não tipada, ao fazer uma declaração, os argumentos dele são aceito de forma generica:

    function myFunction(args: any){
        return args;
    }

Porém, com isso ainda pode ser considerado existir uma perda de informação, devido o desconhecimento do tipo de valor que está sendo inserido, por isso é interessante usar a declaração do tipo Generico:

    function myFunction<Type>(args: Type){
        return args;
    }

Com esse tipo de declaração, é possivel saber préviamente o tipo de valor que está sendo associado ao argumento, tanto de uma função quanto de uma variável, e ainda mais, é possivel segurá-la para usos futuros.

## Condicionais a partir de parâmetros

É possivel verificar parametros de estruturas como `interface` nos paramentros usando a palavra reservada `in`.

Nesse [exemplo](./assets/condicionais-parametros.ts), é possivel ver que duas interfaces são criadas, e uma função para redirecionar se o usuario é um usuario comum ou adminsitrador. Em casos como esse não será possivel fazer chamada de metodos:

    usuario.cargo

pois o javascript simplesmente não encontraria a propriedade cargo em usuario, pois cargo é de IAdmin, então, nesse caso, é necessario o uso do `in`:

    ('cargo' in usuario)

fazendo assim, ele irá buscar em todas as opções que foram passadas como parametro na função, e se nesse caso existir `cargo`, ele vai abrir a area do administrador, pois, somente o administrador tem a propriedade `cargo`.

E usando o `?`, é possivel fazer com que certa propriedade seja opcional para o funcionamento do codigo:

    interface IUsuario{
    id: string;
    email: string;
    cargo? : 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
    }

Nesse caso, é possivel não passar a propriedade `cargo`, ele ainda fará a verificação dos outros, e com isso é possivel fazer regras melhores, como por exemplo: 

    "E se for um Usuario externo, onde o cargo não está na nossa empresa?"

    faça a verifcação se existe a propriedade `cargo` existe ou não na criação do `usuario`, se não existe, redirecione para a devida pagina.

esse exemplo é possivel ver [aqui](./assets/variaveis-opcionais.ts).

## ReadOnly e Private

Usando o Typescript, é possivel definir nas interfaces a palavra reservada `readOnly`, onde a variavel que o `readOnly` foi atribuida pode receber valor uma unica vez, durante sua atribuição, e depois disso ele somente pode entregar valor, e não receber valor

    interface IAnimalDomestico{
        readonly nome: string;
        readonly idade: number;
        parqueFavorito?: string;
}

O Typescript permite o uso da atribuição `Private` também. O `Private` faz com que uma determinada propriedade possa ser acessada somente em determinada classe, e caso tente ser acessada por outra, ela não irá encontrar, mesmo estando no mesmo arquivo:

    class meuAnimal implements IAnimalDomestico{
        private _tipo;
        private _nome;
        private _idade;

        constructor(tipo, nome, idade){
            this._tipo = tipo;
            this._nome = nome;
            this._idade = idade;
        }

        get tipo(){ return this._tipo };
        get nome(){ return this._nome };
        get idade(){ return this._idade };

        set tipo(novoTipo){this._tipo = novoTipo};
        set nome(novoNome){this._nome = novoNome};
        set idade(novoIdade){this._idade = novoIdade};
    }

Usando `private` se torna bastante importante a implementação de getters e setters caso queira manipular a determinada classe fora de seu contexto sem ter de manipular as variaveis da classe de forma invasiva, mas isso se torna opctional do desenvolvedor, caso não seja necessario ter um setter, ou um getter, não é necessario.

## Finalização

O Typescript ajuda muito ao desenvolver para javascript, tem muito mais metodos do que foi descrito acima, realmente encorajo dar uma visita na [documentação original](https://www.typescriptlang.org/docs/), onde existirá os metodos demonstrados acima explicados de uma forma melhor, e outros metodos que podem te ajudar.