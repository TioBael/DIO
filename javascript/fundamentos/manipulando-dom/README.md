# Manipulando o D.O.M.

D.O.M. ou Document Object Model é o documento padrão de como se acessar e modificar os devidos elementos de uma pagina HTML.

## D.O.M. vs B.O.M.

O B.O.M, ou Browser Object Model e ela pode ser considerada a árvore de dependencias que se encontra na `window` do navegador, como `document`, `history`, `location`, `screen`, `navigator`, etc. . Pode se dizer que o D.O.M. é um dos filhos do B.O.M.

## Métodos

É possivel fazer as buscas do elemento da D.O.M atrávez de metodos no javascript, como por exemplo:

| Busca por Id:

    document.getElementsById('titulo)
    //<h1 id=titulo>MInha página</h1>

| Busca por Tag:

    document.getElementByTagName('li');
    //retornará um array;
    /*
        [
            <li>Project 1</li>,
            <li>Project 2</li>,
            <li>Project 3</>
        ]
    */

| Busca por classe:

    document.getElementsByClassName('textos'); //retornará um array;
    /*
        [
            <section class="textos>
                <h2>Sobre mim</hs>
                <p>Texto aqui.</p>
            </section>
        ]
    */

É possivel buscar elementos via query também:

    document.querySelectorAll('.primeira-classe .segunda-classe');
    // Retornará um array;
    /*
        [
            <div class="primeira-classe segunda-classe">
                ...
            </div>
        ]
    */

Para adicionar elementos HTML:

    document.createElement(element);

Para remover elemento:

    document.removeChild(element);

Para adicionar elemento:

    document.appendChild(element);

Para subtituir um elemento:

    document.replaceChild(new, old);

## Trabalhando com os estilos

É possivel trabalhar com os estilos atrávez de suas classes, usando `Element.classList`.

Como no exemplo, a div que será criada:

    <div id="meu-elemento" class="classe">
        <!--resto do código>
    </div>

e junto com o javascript é possivel alterar usando alguns métodos:

    const meuElemento = document.getElementById("meu-elemento");

Adicionar classe:

    meuElemento.classList.add("novo-estilo");

remover classe:

    meuElemento.classList.remove("classe");

e dar "toggle", o que adiciona a classe se não existe, e se ele existe, remove:

    meuElemento.classList.toggle("dark-mode");

O resultado após essas três modificações seria:

    <div id="meu-elemento" class="novo-estilo dark-mode">
        <!-- resto do codigo-->
    </div>

onde foi adicionada a classe `novo-estilo`, removido a `class` e adicionado o `dark-mode`.

E é possivel alterar o arquivo .css diretamente pelo javascript, como no exemplo, onde será modificado todos os paragrafos para a cor Azul:

    document.getElementByTagName("p").style.color = "blue";

## Eventos

1. Eventos do mouse:

    `Mouseouver` e `mouseout`:
        
    Como já diz no nome, são eventos quando o mouse passa pelo elemento e sai do elemento.

2. Eventos de clique:

    `click`, `dbclick`:

    `Click` quando acontece um clique do mouse no elemento, e `dbclick` quando acontece um duplo clique.

3. Eventos de atualização:

    `change`, `load`:
    
    Ao ocorrer a mudança de um elemento, ele pode atualizar outro elemento, ou a pagina como um todo.

É possivel adicionar esses eventos diretamente no javascript, utilizando o `addEventListener`:

    const botao = document.getElementById("meuBotao");
    botao.addEventListener("click", outraFuncao);

Também é possivel mudar diretamente no HTML:

    <html>
    <body>

    <h1 onclick="mudaTexto(this)">Clique Aqui!</h1>

    <script>
        function mudaTexto(id){
            id.innerHTML = "Mudei!";
        }
    </script>

    </body>
    </html>

## Exercicio:

1. Crie uma estrutura básica de projeto front-end (HTML, CSS e JS)
2. Crie um arquivo chamdo `scritps.js` na pasta assets/js.
3. Selecione os elementos `h1`, `button`, `footer` e `body`.
4. Se os elementos possuirem a classe `dark-mode`, modifique seus estilos. Caso contrário, volte os estilos para o original.

Visualize [aqui](#).