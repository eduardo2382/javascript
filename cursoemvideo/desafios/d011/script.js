var btn = document.getElementById('btn')

btn.addEventListener('click', click)

function click(){
    var ano = Number(prompt("Qual é o ano que você quer verificar?"))
    var bissexto = false
    var res = document.getElementById('section')
    console.log(bissexto)
    if(ano % 4 == 0 && ano % 100 != 0){
        bissexto = true
    } else if(ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0){
        bissexto = true
    } else{
        bissexto = false
    }
    res.innerHTML = `<p><h2>Analisando o ano de ${ano}...</h2></p>`
    if(bissexto == true){
        res.innerHTML += `O ano de ${ano} <mark style='background-color: #a6eb9a;'>È BISSEXTO</mark>&#x2705`
    } else{
        res.innerHTML = `O ano de ${ano} <strong><mark style='background-color: #e28783;'>NÃO É BISSEXTO</mark></strong>&#x274C`
    }
}