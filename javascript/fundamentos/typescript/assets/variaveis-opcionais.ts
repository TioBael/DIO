interface IUsuario{
    id: string;
    email: string;
    cargo? : 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redirecione(usuario: IUsuario){
    if(usuario.cargo){
        //redirecionar(usuario.cargo);
    }
    //redirecionar para a àrea de usuário.
}