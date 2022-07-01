# Atribuição de valores

## Tipos de Variaveis

- var -> Variavel Global
- let -> Variavel local
- const -> Constante

### Exemplos

No [exemplo 1](scripts/exemplo1.js) é possivel ver a diferença do escopo local para o escopo global, onde a variavel "b" é redeclarada para preceber o valor "22" dentro do bloco "if", porém, fora do bloco "if", a variavel "b" ainda mantem o valor de "2".

*Disclaimer*: De preferencia, use o "let" em vez do "var", por questões de segurança, para ter o dado sendo usado localmente, em vez de globalmente.