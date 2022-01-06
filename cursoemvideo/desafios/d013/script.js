var btn = document.getElementById('btn')

btn.addEventListener('click', verificar)

function verificar(){
    var nome = prompt('Qual é o nome do aluno?')
    var res = document.getElementById('res')
    var nota1 = Number.parseFloat(prompt(`Primeira nota de ${nome}: `))
    var nota2 = Number.parseFloat(prompt(`Segunda nota de ${nome}: `))
    var media = (nota1+nota2)/2
    res.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
    if(media >= 6){
        res.innerHTML += `<p>Com as notas ${nota1} e ${nota2} a <strong>média é ${media}</strong></p>`
        res.innerHTML += `<p>Com média acima de 6,0, o aluno está <strong><mark style='background-color: #a6eb9a; color: #377d21'>APROVADO</mark></strong></p>`
    } else if(media >= 3){
        res.innerHTML += `<p>Com as notas ${nota1} e ${nota2} a <strong>média é ${media}</strong></p>`
        res.innerHTML += `<p>Com média entre 3,0 e 6,0, o aluno está em <strong><span style='color: #c3884b;'>RECUPERAÇÃO</span></strong></p>`
    } else{
        res.innerHTML += `<p>Com as notas ${nota1} e ${nota2} a <strong>média é ${media}</strong></p>`
        res.innerHTML += `<p>Com média abaixo de 3,0, o aluno está em <strong><span style='color: #7f180b; background-color: #e28783;'>REPROVADO</span></strong></p>`
    }
}