let obj = {};
console.log(`Tipo da variavel obj: ${typeof obj}`);
obj.name = "Luis";
obj.age = 26;
console.log(`Chaves em obj: ${Object.keys(obj)}\nConteudo de Obj: ${Object.values(obj)}`);