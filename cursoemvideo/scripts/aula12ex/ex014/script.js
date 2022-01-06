function alterar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'foto-manha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora < 18){
        img.src = 'foto-tarde.jpg'
        document.body.style.background = '#b9846f'
    }else {
        img.src = 'foto-noite.jpg'
        document.body.style.background = '#515154'
    }

}

setInterval(alterar, 1000)