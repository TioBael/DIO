# Erro Handling

Erros ou exceções são problemas no runtime do codigo onde pode ocasionar a interrupção do codigo. Quando é deixado o compilador tratar, ele terminará o codigo retornando o porque foi interrompido, porém é possivel o desenvolvedor tratar a devida exceção.

## Tipos de erro:

- ECMAScript Error:
    
    É o tipo de exceção que foi acionado durante o tempo de execução do codigo. Normalmente é indicado aonde ocorreu (linha e coluna), qual a função que causou essa exceção, e uma mensagem indicando que exceção que aconteceu.

- DOMException

    São exceções relacionadas a execução numa pagina web. Normalmente são erros relacionados a estrutura da pagina da web.

## Tratamento de erros:

### Throw:
    
Em exemplos anteriores, nós retornavamos problemas do codigo como strings, usando o codigo return, como por exemplo, no codigo de verificar palindromos:

    function verificaPalindromo(string){
        if (!string) return "String inválida";
        //Resto do codigo...
    }

Aonde o codigo 'return' retorna uma string propriamente dita, porém, para tratar devidamente o erro, usa-se o codigo 'Throw':

    function verificaPalindromo(string){
        if (!string) throw "String inválida";
        
        //Resto do codigo...
    }

Nesse caso, ele detectará caso não exista uma string um erro, e o compilador lançará uma exceção não tratada, nesse caso, com a frase "String inválida", fazeno a parada do programa.

### Try...catch:

O 'Try...catch' é um bloco de código onde será tratado a exceção capturada, onde o 'try' verifica se o bloco selecionado terá uma exceção, e o 'catch' irá ser executado caso o 'try' encontre uma exceção:

    function verificarPalindromo(string){
        if(!string) throw "String inválida";

        //resto do codigo...
    }

    function tryCatchExemplo(string){
        try{
            verificarPalindromo(string);
        } catch(e){
            console.log(e);
        }
    }

    tryCatchExemplo(''); //Output: String Inválida

A diferençapara o somente 'throw' é que neste caso, a exceção será tratada, ela não vai parar a execução do programa de uma vez, ela vai detectar que esta sendo lançada uma exeção pelo codigo 'throw', e em vez de continuar, ele vai para o bloco 'catch', onde será escrito a mensagem de error <mark>String inválida</mark>.

### Finally

O bloco finally é um bloco que complementa o 'Try...catch', onde tudo que estiver no finally, será executado, mesmo se ocorrer uma exceção, no caso, logo após a exceção:

function verificarPalindromo(string){
        if(!string) throw "String inválida";

        //resto do codigo...
    }

    function tryCatchExemplo(string){
        try{
            verificarPalindromo(string);
        } catch(e){
            console.log(e);
        } finally{
            console.log('A string enviada foi: ' + string);
        }
    }

    tryCatchExemplo('');
    
    //Output: 
    A string enviada foi:
    String inválida

