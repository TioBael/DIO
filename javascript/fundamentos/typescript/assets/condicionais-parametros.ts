interface IUsuario{
    id: string;
    email: string;
}

interface IAdmin extends IUsuario{
    cargo: 'geente' | 'coordenador' | 'supervisor';
}

function redirection(usuario: IUsuario | IAdmin ){
    if('cargo' in usuario){
        //redirecionar para a area de administração
    }

    //redirecionar para a area de usuario
}