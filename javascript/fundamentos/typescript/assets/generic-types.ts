function adicionaApendiceALista<Type>(array: any[], valor: Type ){
    return array.map(item => item+valor);
}

adicionaApendiceALista(['A','B','C'], 'D');