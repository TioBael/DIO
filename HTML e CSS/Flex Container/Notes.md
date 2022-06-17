# Anotações Flex box

(Em algum momento no futuro, irei separar cada topico em sua devida pasta. Mas agora que eu não tenho tempo, não farei, desculpe pela parede de texto)

## Objetivo

Espaçamento entre itens em uma interface e ajuda disponibilizando recursos de alinhamento.

## Flex Container

Tag que envolve os itens, para transformar todos os itens filhos em flex itens.

- display:flex

Pode ser feito em qualquer tipo de tag.

### Propriedades relacionadas:

- display (inicializador)
- flex-direction (faz o direcionamento dos itens, vertical ou horizontalmente)
- flex-wrap (quebra de linha)
- flex-flow 
- justify-content (alinhar de acordo com direção)
- align-items (alinhar de acordo com o eixo)
- align-content (alinhar as linhas)

## Flex Itens

Filhos diretos do Flex Container, podem também se tornar flex containers usando o display:flex

### Propriedades relacionadas:

- flex-grow (fator de crescimento)
- flex-basis (tamanho inicial antes da distribuição)
- flex-shrink (fator de redução)
- flex 
- order (ordem de distribuição)
- align-self (alinhamento do item especifico)

## Exemplo de Display-flex

No [exemplo](0-display-flex.html) e por sua vez no css [display-flex](css/display-flex.css), é possivel ver a classe flex modificando o container "div", porém, sem o devido tratamento, os itens podem sair do box.

## Flex direction

A função é estabelecer o eixo principal do container, sendo o eixo vertical(coluna) e horizontal(linha)

- row(padrão) -> A direção do texto, esquerda para direita
- row-reverse -> O sentido oposto do row, direita para esquerda
- column -> Ordenação vertical, de cima para baixo
- column-reverse -> O sentido oposto do padrão column, de baixo para cima

## Exemplo Flex-direction

No [exemplo](1-flex-direction.html) e por sua vez no css [flex-direction](css/flex-direction.css), é possivel ver a classe flex modificando o container "ul", formando listas usando o row(em azul), row-reverse(em vermelho), column(em laranja) e colum-reverse(em roxo)

## Flex Wrap

A função é controlar a quebra de linha no container. Com isso, podemos resolver o problema do [Display Flex](https://github.com/TioBael/DIO/blob/main/HTML%20e%20CSS/Flex%20Container/Notes.md#exemplo-de-display-flex). O Flex Wrap tem como propriedades:

- nowrap -> Comportamento padrão, a não quebra de linha
- wrap -> A quebra de linha quando um dos itens do flex não poder ser mais compactada. O primeiro elemento que ficar fora do container será colocado na linha de baixo.
- wrap-reverse -> Ele faz a quebra de linha, porém, mandando o item que ficará para fora para a linha de cima, em vez da linha de baixo.

## Exemplo Flex Wrap

No [exemplo](2-flex-wrap.html) e por sua vez no css [flex-wrap](css/flex-wrap.css), é possivel ver como as classes reagem ao limite da borda, sendo o nowrap ignorando o limite, o wrap quebrando baseado no max-width, e o wrap-reverse fazendo a mesma coisa, só que de ordem reversa.