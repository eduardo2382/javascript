var btnadicionar = document.getElementById('btnadd')
var valores = []
var num = document.getElementById('num')
var numfoco = false
var listvalores = document.getElementById('listvalores')
var listvaloresfoco = false
var btnfinalizar = document.getElementById('btnfinalizar')

document.addEventListener('keypress', function(value){
    if(value.key === 'Enter'){
        if(numfoco == true){
            btnadicionar.click()
        } 
        if(listvaloresfoco == true){
            btnfinalizar.click()
        }
    }
})

btnadicionar.addEventListener('click', adicionar)

num.addEventListener('focus', function(){
    numfoco = true
})

num.addEventListener('blur', function(){
    numfoco = false
})

listvalores.addEventListener('focus', function(value){
    listvaloresfoco = true
})

listvalores.addEventListener('blur', function(value){
    listvaloresfoco = false
})

btnfinalizar.addEventListener('click', finalizar)

function adicionar(){
    
    let encontrado = valores.indexOf(Number(num.value))
    if(num.value.length == 0 || num.value < 1 || num.value > 100 || valores.indexOf(Number(num.value)) != -1){
        alert('Valor inválido ou ja encontrado na lista!')
    } else{
        valores.push(Number(num.value))
        renderizar()
        num.value = ''
        num.focus()
    }
    encontrado = valores.indexOf(Number(num.value))
    console.log(encontrado)
    console.log(valores)
}

function renderizar(){
    let option = document.createElement('option')
    valores.forEach(function(item){
        option.innerHTML = `Valor ${item} adicionado`
        listvalores.appendChild(option)
    })

}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else{
        let tamanho = valores.length
        let maior = 0
        let menor = 0
        let soma = 0
        let media = 0
        let res = document.getElementById('res')

        for(let cont in valores){
            if(maior == 0 && menor == 0){
                maior = valores[cont]
                menor = valores[cont]
            } else{
                if(valores[cont] > maior){
                    maior = valores[cont]
                } else if(valores[cont] < menor){
                    menor = valores[cont]
                }
            }
            soma += valores[cont]
            
        }
        media = soma / valores.length

        if(tamanho == 1){
            res.innerHTML = `<h3>Ao todo temos ${tamanho} valor cadastrado</h3>`
        } else{
            res.innerHTML = `<h3>Ao todo temos ${tamanho} valores cadastrados</h3>`
        }
        res.innerHTML += `<h3>O maior valor informado foi ${maior}.</h3>`
        res.innerHTML += `<h3>O menor valor informado foi ${menor}.</h3>`
        res.innerHTML += `<h3>Somando todos os valores, temos ${soma}.</h3>`
        res.innerHTML += `<h3>A média dos valores digitados é ${media.toLocaleString('pt-br')}</h3>`
    }
}