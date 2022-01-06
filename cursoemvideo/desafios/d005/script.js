var btn = document.getElementById('btn')

btn.addEventListener('click', click)

function click(){
    var subtitulo = document.getElementById('subtitle')
    var msg = document.getElementById('msg')
    var distancia = Number.parseFloat(prompt('Digite uma distância em metros(m)'))
    subtitulo.innerText = `A distancia de ${distancia} metros, corresponde a...`
    msg.innerText = ''
    km = distancia / 1000
    hm = distancia / 100
    dam = distancia / 10
    dm = distancia * 10
    cm = distancia * 100
    mm = distancia * 1000
    subtitulo.innerText = `A distancia de ${distancia} metros, corresponde a...`
    msg.innerHTML =`
    <p>${km} quilômetros (Km)</p>
    <p>${hm} hectômetros (Hm)</p>
    <p>${dam} decâmetros (Dam)</p>
    <p>${dm} decímetros (dm)</p>
    <p>${cm} centímetros (cm)</p>
    <p>${mm} milímetros (mm)</p>
    `
}