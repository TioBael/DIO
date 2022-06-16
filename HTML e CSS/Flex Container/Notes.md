# Anotações Flex box

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

No [exemplo](0-display-flex.html), é possivel ver a classe flex modificando o container "div", porém, sem o devido tratamento, os itens podem sair do box.

## Flex direction

A função é estabelecer o eixo principal do container, sendo o eixo vertical(coluna) e horizontal(linha)

- row(padrão) -> A direção do texto, esquerda para direita
- row-reverse -> O sentido oposto do row, direita para esquerda
- column -> Ordenação vertical, de cima para baixo
- column-reverse -> O sentido oposto do padrão column, de baixo para cima

## Exemplo Flex-direction

No [exemplo](1-flex-direction.html), é possivel ver a classe flex modificando o container "ul", formando listas usando o row(em azul), row-reverse(em vermelho), column(em laranja) e colum-reverse(em roxo)