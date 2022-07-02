let nome = "João";
let sobrenome = "Pedro";
let contatenado = nome.concat(sobrenome);
let exemplo = new String("Lorem Ipsum");

console.log("Tipo da variavel nome: " + typeof nome);
console.log(`Primeiro metodo - Contatenar: ${contatenado}\nTamanho: ${contatenado.length}`);
console.log("Tipo da variavel exemplo: " + typeof exemplo);
for(i=0;i<exemplo.length;i++)
    console.log(`${i} - ${exemplo.charAt(i)}`);
console.log(`Tamanho: ${exemplo.length}`);

contatenado = nome + " " + sobrenome;
console.log(contatenado);
console.log(exemplo.split(" "));