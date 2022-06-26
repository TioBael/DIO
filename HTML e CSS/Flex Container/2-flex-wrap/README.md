# Flex Wrap

A função é controlar a quebra de linha no container.

## Propriedades relacionadas:

- nowrap -> Comportamento padrão, a não quebra de linha
- wrap -> A quebra de linha quando um dos itens do flex não poder ser mais compactada. O primeiro elemento que ficar fora do container será colocado na linha de baixo.
- wrap-reverse -> Ele faz a quebra de linha, porém, mandando o item que ficará para fora para a linha de cima, em vez da linha de baixo.

## Exemplo Flex Wrap

No [exemplo 2](2-flex-wrap.html) e por sua vez no css [flex-wrap](css/flex-wrap.css), é possivel ver como as classes reagem ao limite da borda, sendo o nowrap ignorando o limite, o wrap quebrando baseado no max-width, e o wrap-reverse fazendo a mesma coisa, só que de ordem reversa.

Visualize [aqui](https://htmlpreview.github.io/?https://github.com/TioBael/DIO/blob/main/HTML%20e%20CSS/Flex%20Container/2-flex-wrap/2-flex-wrap.html)