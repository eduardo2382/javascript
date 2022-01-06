var btn = document.getElementById('btn')

btn.addEventListener('click', click)

function click(){
    var nome = prompt('Qual é o produto que você está comprando?')
    var preco = Number.parseFloat(prompt(`Qual é o preço do ${nome}?`))
    var subtitulo = document.getElementById('subtitulo')
    var section = document.getElementById('section')
    var desconto = (preco / 100) * 10
    var valor = preco - desconto
    subtitulo.innerText = `Calculando desconto de 10% para ${nome}`
    section.innerHTML = `
    <p>O preço original era R$ ${preco}.</p>
    <p>Você acaba de ganhar R$ ${desconto.toFixed(2)} de desconto (-10%).</p>
    <p>No fim, vocẽ vai pagar R$ ${valor} no produto ${nome}.</p>
    `
}