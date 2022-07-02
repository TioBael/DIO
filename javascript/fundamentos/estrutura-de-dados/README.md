# Estrutura de dados

O Javascript contém dois tipos de dados:

## * Tipo Primitivo
 * Numeros
 * strings
 * boolean
## * Tipo não primitivo/compost
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