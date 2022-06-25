# Flex Flow

A funcionalidade dele é salvar tempo, poís ele funciona como um "atalho" para as propriedades flex-direction e flex-wrap, mas como ele se limita aos valores padrão de cada um deles, ele acaba não sendo muito usado, como por exemplo, se o desenvolvedor deseja mudar o flex-direction para "column" durante o uso do Flex Flow, ele consegue, mas ainda teria de lidar com o flex-wrap, que usará o nowrap, tornando melhor a opção de trabalhar com ambos individualmente em vez de usar o Flex Flow

Obvio, é um atalho, então tem seus prós e contras, como facilita e agiliza configurações de wrap e os directions, caso as configurações permitem, isso é um bom ganho. Dependerá de como for aplicado, e de seu codigo, como qualquer outra ferramenta.

## Exemplo Flex Flow

No [exemplo 3](3-flex-flow.html) e por sua vez no css [flex-flow](css/flex-flow.css), é demonstrado os casos em "Row", fazendo row-reverse e row, e usando o "Wrap", usando o wrap, wrap-reverse e o nowrap. Os resultados seriam parecidos se fosse usado em direction o "Column", porém, mesclando os dois necessitaria uma configuração mais fina, para comportar ambos usando o flex-flow, por isso que poderia ser melhor nesses tipos de caso usar individualmente o flex-direction e o flex-wrap.