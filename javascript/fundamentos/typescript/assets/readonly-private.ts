interface IAnimalDomestico{
    readonly tipo: 'cachorro' | 'gato';
    readonly nome: string;
    readonly idade: number;
    parqueFavorito?: string;
}

class meuAnimal implements IAnimalDomestico{
    private _tipo;
    private _nome;
    private _idade;

    constructor(tipo, nome, idade){
        this._tipo = tipo;
        this._nome = nome;
        this._idade = idade;
    }

    get tipo(){ return this._tipo };
    get nome(){ return this._nome };
    get idade(){ return this._idade };

    set tipo(novoTipo){this._tipo = novoTipo};
    set nome(novoNome){this._nome = novoNome};
    set idade(novoIdade){this._idade = novoIdade};
}


const meuCao = new meuAnimal('Cachorro', 'Apolo', 19);
console.log(meuCao.nome);
meuCao.nome = 'Bonnie';
console.log(meuCao.nome);