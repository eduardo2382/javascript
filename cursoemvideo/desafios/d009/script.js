var btn = document.getElementById('btn')

btn.addEventListener('click', click)

function click(){
    var nome = prompt('Qual é o nome do funcionário?')
    var salario = Number.parseFloat(prompt(`Qual é o salário de ${nome}?`))
    var porcentagem = Number.parseFloat(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    var aumento = (porcentagem / 100) * salario
    var total = salario + aumento
    var subtitulo = document.getElementById('subtitulo')
    var section = document.getElementById('section')

    subtitulo.innerText = `${nome} recebeu um aumento salarial!`
    section.innerHTML = `
    <p>O salário atual era R$${salario}</p>
    <p>Com um aumento de ${porcentagem}%, o salario vai aumentar R$${aumento} no próximo mês.</p>
    <p>E a partir daí, ${nome} vai passar a ganhar R$${total}.</p>
    `
    

}