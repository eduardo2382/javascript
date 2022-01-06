var btn = document.getElementById('btn')

var cotação = Number.parseFloat(prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))

btn.addEventListener('click', click)

function click(){
    var reais = Number.parseFloat(prompt('Quantos R$ você tem na carteira?'))
    var section = document.getElementById('section')
    section.innerText = ''
    var dolar = reais / cotação
    section.innerHTML = `Com R$${reais} você conseguirá comprar US$${dolar.toFixed(2)}`
}