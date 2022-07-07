let alunos = {
    nome: "",
    nota: 0,
};

function setAluno(nome, nota){
    this.nome = nome;
    this.nota = nota;
}

let arrayAlunos = [];
const mediaFinal = 6;

function popularAlunos(nome, nota){
    let a = new setAluno(nome, nota);
    arrayAlunos.push(a);
}

function alunosAprovados(){
    let aprovados = [];
    if(!arrayAlunos || arrayAlunos === "") return;
    
    for(let i=0;i<arrayAlunos.length;i++)
        if(arrayAlunos[i].nota >= mediaFinal)
            aprovados.push(arrayAlunos[i]);

    return aprovados;
}

popularAlunos("Leandro", 10);
popularAlunos("José", 5);
popularAlunos("Ricardo", 7);
popularAlunos("Luis", 9);

console.log(alunosAprovados());