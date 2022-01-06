var btn = document.getElementById('btn')

btn.addEventListener('click', click)

function click(){
    var subtitulo = document.getElementById('subtitle')
    var section = document.getElementById('section')
    var celsius = prompt('Digite uma temperatura em °C (Celsius)')
    celsius = celsius.replace(',', '.')
    console.log(celsius)
    celsius = Number.parseFloat(celsius)
    var kelvin = celsius + 273
    var fahrenheit = (celsius * 1.8) + 32
    section.innerText = ''
    subtitulo.innerText = `A temperatura de ${celsius}°C, corresponde a...`
    section.innerHTML = `
    <p>${kelvin}°K (Kelvin)</p>
    <p>${fahrenheit}°F (Fahrenheit)</p>
    `
}