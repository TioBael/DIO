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

## Flex Flow

A funcionalidade dele é salvar tempo, poís ele funciona como um "atalho" para as propriedades flex-direction e flex-wrap, mas como ele se limita aos valores padrão de cada um deles, ele acaba não sendo muito usado, como por exemplo, se o desenvolvedor deseja mudar o flex-direction para "column" durante o uso do Flex Flow, ele consegue, mas ainda teria de lidar com o flex-wrap, que usará o nowrap, tornando melhor a opção de trabalhar com ambos individualmente em vez de usar o Flex Flow

Obvio, é um atalho, então tem seus prós e contras, como facilita e agiliza configurações de wrap e os directions, caso as configurações permitem, isso é um bom ganho. Dependerá de como for aplicado, e de seu codigo, como qualquer outra ferramenta.

## Exemplo Flex Flow

No [exemplo](3-flex-flow.html) e por sua vez no css [flex-flow](css/flex-flow.css), é demonstrado os casos em "Row", fazendo row-reverse e row, e usando o "Wrap", usando o wrap, wrap-reverse e o nowrap. Os resultados seriam parecidos se fosse usado em direction o "Column", porém, mesclando os dois necessitaria uma configuração mais fina, para comportar ambos usando o flex-flow, por isso que poderia ser melhor nesses tipos de caso usar individualmente o flex-direction e o flex-wrap.

## Justify

Essa propriedade serve para alinha os itens dentro do container.

**DISCLAIMER**: Se o item está ocupando 100% do container, a propriedade não será aplicada, pois não terá nada para alinhar.

### Propriedades do Justify

- flex-start -> Justifica baseando-se na sobra de espaço no início do container.
- flex-end -> Justifica baseando-se na sobra de espaço no final do container.
- center -> Justifica centralizando o conteudo.
- space-between -> Justifica criando um espaço igual entre os elementos.
- space-around -> Justifica fazendo com que o espaçamento do meio do container seja 2x maior que no inicio e o final.