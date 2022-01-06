var btn = document.getElementById('btn');
var segundos = 0;
var minutos = 0;
var horas = 0;
var botao = false;

console.log(`botao ${botao}`)

btn.addEventListener('click', function(){
    var numeros = document.getElementById('numeros');

    if(botao == false){
        botao = true
    } else{
        botao = false
    }

    var intervalo = setInterval(function(){
        if(botao == true){
            btn.value = 'Parar'
            btn.className = 'btnparar'

            if(segundos <= 58 ){
                segundos += 1;
            } else{
                segundos = 0;
                minutos += 1;
            };
    
            if(minutos == 59){
                minutos = 0;
                horas += 1;
            };
            
            if(horas <= 9){
                numeros.innerHTML = `0${horas}:`;
            } else{
                numeros.innerHTML = `${horas}`;
            };
    
            if(minutos <= 9){
                numeros.innerHTML += `0${minutos}:`;
            } else{
                numeros.innerHTML += `${minutos}:`;
            }
    
            if(segundos <= 9){
                numeros.innerHTML += `0${segundos}`;
            } else{
                numeros.innerHTML += `${segundos}`;
            }
        } else{
            botao = false;
            btn.className = 'btncomecar'
            btn.value = 'Comecar'
            clearInterval(intervalo);
        }

    }, 1000);
    
});

