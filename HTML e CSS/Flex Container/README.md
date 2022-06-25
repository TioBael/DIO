# Anotações Flex box

## Objetivo

Espaçamento entre itens em uma interface e ajuda disponibilizando recursos de alinhamento.

## Flex Container

Tag que envolve os itens, para transformar todos os itens filhos em flex itens.

- display:flex

Pode ser feito em qualquer tipo de tag.

------

### Propriedades relacionadas:

- [display](0-display-flex/) (inicializador)
- [flex-direction](1-flex-direction/) (faz o direcionamento dos itens, vertical ou horizontalmente)
- [flex-wrap](2-flex-wrap/) (quebra de linha)
- [flex-flow](3-flex-flow/)
- [justify-content](4-justify-content/) (alinhar de acordo com direção)
- [align-items](5-align-item/) (alinhar de acordo com o eixo)
- [align-content](6-align-content/) (alinhar as linhas)

------

## Flex Itens

Filhos diretos do Flex Container, podem também se tornar flex containers usando o display:flex

### Propriedades relacionadas:

- [flex-grow](7-flex-grow/) (fator de crescimento)
- [flex-basis](8-flex-basis/) (tamanho inicial antes da distribuição)
- [flex-shrink](9-flex-shrink/) (fator de redução)
- [flex](10-flex/) (atalho para propriedades flex)
- [order](11-order/) (ordem de distribuição)
- [align-self](12-align-self/) (alinhamento do item especifico)