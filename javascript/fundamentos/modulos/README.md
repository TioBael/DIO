# Módulos

Módulos no javascript são arquivos que permitem importar e exportar informações para outros arquivos javascript.

## Exportar

É possivel exportar usando uma de duas tecnicas: `Named Exports` e `Default Exports`

- Named Exports

    Quando quer exportar multiplas coisas e de forma individual

    | exemplo 1:

        export function mostraIdade(pessoa){
            return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
        }

        export function mostraCidade(pessoa){
            return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`;
        }

        export function mostraHobby(pessoa){
            return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`;
        }
    
    | exemplo 2:

        function mostraIdade(pessoa){
            return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
        }

        function mostraCidade(pessoa){
            return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`;
        }

        function mostraHobby(pessoa){
            return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`;
        }

        export{
            mostraIdade,
            mostraCidade,
            mostraHobby
        }
    
- Default exports

    Diferente do `Named Export`, o `Default export` será o retorno padrão do arquivo, podendo somente ser um export por arquivo.

    | Exemplo:

        function mostraIdade(pessoa){
            return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
        }

        function mostraCidade(pessoa){
            return `A cidade de ${pessoa.nome} é ${pessoa.cidade}`;
        }

        function mostraHobby(pessoa){
            return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`;
        }

        export{
            mostraIdade,
            mostraCidade
        }

        export default mostraHobby;

## Importar

Para importar os arquivos, vai variar a forma que eles foram exportados:

- Named Exports:

    Será importado as funções, variaveis, classes, etc. que forem explicitados entre chaves:

        import {funcao, variavel, classe} from './arquivo.js'

- Default exports:

    Só chamar o valor que foi apontado como default:

        import valorDefault from './arquivo.js'

É possivel apelidar o arquivo que será importado, usando a palavra reservada `as`:

    import { arquivo as Apelido } from './arquivo.js';

    Apelido.metodo();

É possivel importar tudo de uma vez de um arquivo utilizando `*`, e dando um apelido para esse "tudo":

    import * as INFOS from './arquivo.js';
    INFOS.metetodoA();
    console.log(INFOS.variavel);

## Usando junto ao HTML

Para usar junto ao HTML, é necessario na tag `script` usar o type="module" para indicar que está sendo usado modulos

    <script type="module" src="./main.js"></script>

## Exercicio

1. Instale a extensão "Live Server" no VSCode;
2. Crie um arquivo com uma estrutura HTML padrão;
3. Crie dois arquivos `.js` ou `.mjs`, um chamado `funcoes` e outro chamado `main`;
4. No arquivo `funcoes`:
    
    4.1. Crie uma função chamada `mostraIdade`, que recebe `nome` e `idade` e retorna a string: `A idade de ${nome} é ${idade}`;
    
    4.2. Siga o mesmo padrão para outras funções como `mostraCidade` e `mostraHobby`;

    4.3. Exporte estas funções.

5. No arquivo `main`:

    5.1. Importe as funções do arquivo `funcoes`;

    5.2. Faça a chamada de todas elas;

6. Utilizando a extensão "Live Server", abra o seu navegador e veja no console que as informações foram logadas corretamente.

Visualize [aqui](assets/index.html);