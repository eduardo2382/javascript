function verificar(){
    var res = document.getElementById('res')
    var nasc = document.getElementById('nasc')
    var date = new Date()
    var ano = date.getFullYear()
    res.innerHTML = idade
    if(nasc.value.length == 0 || Number(nasc.value) > ano){
        alert('[ERROR] Verifique os dados e tente novamente!')
    } else{
        var idade = ano - nasc.value
        var sexo = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'images/foto-bebe-m.png')
            } else if(idade < 21){
                img.setAttribute('src', 'images/foto-jovem-m.png')
            } else if(idade < 50){
                img.setAttribute('src', 'images/foto-adulto-m.png')
            } else{
                img.setAttribute('src', 'images/foto-idoso-m.png')
            }
        } else{
            genero = 'mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'images/foto-bebe-f.png')
            } else if(idade < 21){
                img.setAttribute('src', 'images/foto-jovem-f.png')
            } else if(idade < 50){
                img.setAttribute('src', 'images/foto-adulto-f.png')
            } else{
                img.setAttribute('src', 'images/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}