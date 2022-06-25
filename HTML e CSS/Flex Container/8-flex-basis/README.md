# Flex Basis

Tem relação com os Flex Itens, e ela ira tratar do tamanho inicial dos itens antes da distribuição de espaço dentro dele. 

É como ele pegasse o tamanho minimo que o item precisa, e depois ele faz a distribuição antes e depois do item.

## Propriedades do Flex Basis

- auto -> Será proporcional ao conteúdo do item
- px, %, em, etc... -> valores previamente estabelecidos
- 0 (zero) -> Será relacionado ao flex-grow

## Exemplo Flex Basis

No [exemplo 8](8-flex-basis.html), e por sua vez, no css[flex-basis](css/flex-basis.css), é possivel ver como o flex basis tenta trabalhar proporcionando a distribuição de espaços no auto, com zero e indicando 100px para ele, e ao mesmo tempo trabalhando com o flex grow.