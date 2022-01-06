var btncontar = document.getElementById('btncontar')

btncontar.addEventListener('click', contar)

function contar(){
    var numinicio = document.getElementById('numinicio')
    var numfim = document.getElementById('numfim')
    var numpasso = document.getElementById('numpasso')
    var res = document.getElementById('res')
    var inicio = Number(numinicio.value)
    var fim = Number(numfim.value)
    var passo = Number(numpasso.value)
    if(numinicio.value.length == 0 || numfim.value.length == 0 || numpasso.value.length == 0){
        res.innerText = 'Impossivel contar!'
    } 
    if(numpasso.value.length == 0 || numpasso.value <= 0){
        alert('Passo inválido. Considerando PASSO 1')
    }
    res.innerHTML = '<p>Contando: </p>'
    if(inicio < fim){
        for(var cont = inicio; cont <= fim; cont += passo){
            if(cont == fim){
                res.innerHTML += `${cont}`
            }else{
                res.innerHTML += `${cont}&#x1F449`
            }
        }

    } else{
        for(var cont = inicio; cont >= fim; cont -= passo){
            if(cont == fim){
                res.innerHTML += `${cont}`
            }else{
                res.innerHTML += `${cont}&#x1F449`
            }
        }
    }
    res.innerHTML += '&#x1F3C1'
}