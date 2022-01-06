var btn = document.getElementById('btn')

btn.addEventListener('click', verificar)

function verificar(){
    var panterior = Number.parseFloat(prompt("Qual era o preco anterior do produto?"))
    var patual = Number.parseFloat(prompt("Qual é o preço atual do produto?"))
    var res = document.getElementById('res')
    res.innerHTML = '<h2>Analisando os valores informados</h2>'
    res.innerHTML += `<p>O produto custava ${panterior.toLocaleString('pt-br', {style:'currency', currency:'BRL'})} e agora custa ${patual.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}`

    if(panterior > patual){
        res.innerHTML += '<p>Hoje o produto está mais barato.</p>'
        var diferenca = panterior - patual 
        var porcentagem = (diferenca / patual) * 100
        res.innerHTML += `<p>O preço caiu ${diferenca.toLocaleString('pt-br', {style:'currency', currency:'BRL'})} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${porcentagem.toFixed(2).toString().replace('.', ',')}% para baixo.</p>`
    } else if(panterior < patual){
        res.innerHTML += '<p>Hoje o produto está mais caro.</p>'
        var diferenca = patual - panterior
        var porcentagem = (diferenca / panterior) * 100
        res.innerHTML += `<p>O preço subiu ${diferenca.toLocaleString('pt-br', {style:'currency', currency:'BRL'})} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${porcentagem.toFixed(2).toString().replace('.', ',')}% para cima.</p>`
    }
    
}