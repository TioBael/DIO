# Assincronicidade

O javascript é uma linguagem que trabalha de forma sincrona, logo, ele ao fazer algum request a um servidor de alguma forma, ele precisa esperar o servidor trabalhar para continuar a fazer o codigo. Porém, existe possibilidades de trabalhar de forma assincrona.

## Promises

Promises, ou em português promessas, pode ser considerado um objeto de processamento assincrono onde inicia de forma desconhecida(pending), podendo ser resolvida (.then(onFulfillment)) ou rejeitada (.catch(onRejection)).

    const myPromise = new Promise((resolve, reject) =>{
        window.setTimeout(() =>{
            resolve(console.log('Resolvida!'));
        }, 2000);
    }); 

## Async/await

Para fazer uma função assincrona, é necessario usar a palavra chave 'async' para o javascript detectar que ela é uma função assincrona.

E usando a palavra chave 'async', vai ser possivel usar a outra palavra que serve para lidar com as promises: 'await':

    async function resolvePromise(){
        const myPromise = new Promise((resolve, reject) => {
            window.setTImeout(() => {
                resolve('Resolvida');
            }, 3000);
        });

        const resolved = await myPromise
            .then((result) => result + ' passando pelo then')
            .then((result) => result + ' e agora acabou!')
            .catch((err) => console.log(err.message));
        return resolved;
    }


## APIs

As APIs são uma forma de servir como intermeedio entre o front-end e o back-end. Normalmente, no javascript, ao requisitar de uma API, ela retorna no formato .json (JavaScript Object Notation), ou você manda no formato .json ao fazer um .post .

### Metodo fetch()

O metodo 'fetch()' é usado para pegar os dados de uma API, onde ele retorna uma Promise.

exemplo 1:

    fetch(url, option)
        .then(response => response.json())
        .then(json => console.log(json))


exemplo GET:

    fetch('https://endereco-api.com/),{
        method: 'GET',
        cache: 'no-cache',
    })
        .then(response => response.json())
        .then(json => console.log(json))

exemplo POST:


    fetch('https://endereco-api.com/),{
        method: 'POSTA',
        cache: 'no-cache',
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(json => console.log(json))

## Exercicio

NEsta atividade, vamos criar uma págia que carrega fotos aleatórias de gatinhos sempre que clicamos em um botão

1. Utilize a API <mark>https://api.thecatapi.com/</mark> para fazer as chamadas com o método <mark>fetch</mark>;
2. Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão!

Visualize [aqui](https://htmlpreview.github.io/?https://github.com/TioBael/DIO/blob/main/javascript/fundamentos/assincronicidade/assets/index.html).
