const referenceError = new Error();
referenceError.name = 'referenceException';

const typeError = new Error();
typeError.name = 'typeException';

const rangeError = new Error();
rangeError.name = 'rangeException';

function validaArray(arr, num){
    try {
        if(!arr && !num)
            throw ReferenceError('Parametros não encontrados');

        if(typeof arr !== 'object')
            throw TypeError('Tipo invalido');

        if(typeof num !== 'number') 
            throw TypeError('Tipo invalido');

        if(arr.length !== num) 
            throw RangeError('Tamanho não condiz com o esperado');

        return arr;
    } catch(e){
        if(e instanceof ReferenceError)
            console.log('Array ou numero não encontrado: ', e.name);
        
        if(e instanceof TypeError)
            console.log('Tipo não condiz com o esperado: ', e.name);
        
        if(e instanceof RangeError)
            console.log('Tamanho do array não condiz com o numero enviado: ', e.name);
    }
}

console.log(validaArray([1,2,3,4], 5));