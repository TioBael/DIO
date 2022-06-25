# Justify

Essa propriedade serve para alinha os itens dentro do container.

**DISCLAIMER**: Se o item está ocupando 100% do container, a propriedade não será aplicada, pois não terá nada para alinhar.

## Propriedades do Justify

- flex-start -> Justifica baseando-se na sobra de espaço no início do container.
- flex-end -> Justifica baseando-se na sobra de espaço no final do container.
- center -> Justifica centralizando o conteudo.
- space-between -> Justifica criando um espaço igual entre os elementos.
- space-around -> Justifica fazendo com que o espaçamento do meio do container seja 2x maior que no inicio e o final.

## Exemplo Justify

No [exemplo 4](4-justify-content.html) e por usa vez no css [justify-content](css/justify-content.css) é possivel ver os casos de Flex-start, onde ele justifica alinhando para a esquerda, Flex-end, onde é justificado para a direita, Flex-Center, onde ele justifica voltado para o centro, Space Between, onde ele cria espaços iguais entre todos os elementos, Space around, onde ele cria espaços iguais porém, ele cria no inicio do primeiro item e no fim do ultimo item de forma proporcional e por fim Space evenly, onde ele cria espaços iguais para todos os elementos, e também no inicio do primeiro e no fim do ultimo, mas dessa vez, não proporcional, mas sim de forma igual. E também será possivel ver o comportamento no flex-direction: row e também no flex-direction: column.