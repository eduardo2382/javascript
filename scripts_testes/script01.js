let carro = {
    marca: 'VW',
    preco: '1000',
    andar: function(){
        return console.log('andou')
    }
}

let nome = 'Jose'

console.log(nome.toUpperCase())

function $(nome){
    return {
        hide: function(){
            console.log('Esconder o ' + nome)
        },
        mostrar: function(){
            console.log('Mostrar o ' + nome)
        }
    }
}

console.log(window.innerHeight)

$('div').mostrar()