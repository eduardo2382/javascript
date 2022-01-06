var numtemp = ''
var operacaodefinida= ''
var numagora = 'num1'
var display = document.getElementById('display')
var num1 = 0
var num2 = 0
var resultado

function adicionarnumero(num){ // função para adicionar o numero clicado ao display
    if(numagora == 'num1'){
        if(numtemp.length == 0 && num == '.'){ // condição para adicionar o zero e ponto se não tiver sido digitado nenhum numero
            numtemp = numtemp + 0 + num
            num1 = Number.parseFloat(numtemp)
            display.innerHTML = numtemp
            if(numtemp.length == 8){
                display.style.fontSize = '3em'
                display.style.lineHeight = '45px'
            }
        } else if(numtemp.length != 0 && num == '.'){ // condição para adicionar o ponto depois de adicionado outros numeros
            numtemp = numtemp + num
            num1 = Number.parseFloat(numtemp)
            display.innerHTML = numtemp
            if(numtemp.length == 8){
                display.style.fontSize = '3em'
                display.style.lineHeight = '45px'
            }
        } else{ // se nenhuma das outras condições foram atendidas ele somente adiciona o numero no display
            numtemp = numtemp + num
            num1 = Number(numtemp)
            display.innerHTML = numtemp
            if(numtemp.length == 8){
                display.style.fontSize = '3em'
                display.style.lineHeight = '45px'
            }
        }
        console.clear()
        console.log(`numtemp ${numtemp}`)
        console.log(`num1 ${num1}`)
        console.log(`num2 ${num2}`)
        console.log(`numagora ${numagora}`)
        console.log(`operacao definida ${operacaodefinida}`)
    } else if(numagora == 'num2'){
        display.innerHTML = ''
        if(numtemp.length == 0 && num == '.'){ // condição para adicionar o zero e ponto se não tiver sido digitado nenhum numero
            numtemp = numtemp + 0 + num
            num2 = Number.parseFloat(numtemp)
            display.innerHTML = numtemp
            if(numtemp.length == 8){
                display.style.fontSize = '3em'
                display.style.lineHeight = '45px'
            }
        } else if(numtemp.length != 0 && num == '.'){ // condição para adicionar o ponto depois de adicionado outros numeros
            numtemp = numtemp + num
            num2 = Number.parseFloat(numtemp)
            display.innerHTML = numtemp
            if(numtemp.length == 8){
                display.style.fontSize = '3em'
                display.style.lineHeight = '45px'
            }
        } else{ // se nenhuma das outras condições foram atendidas ele somente adiciona o numero no display
            numtemp = numtemp + num
            num2 = Number(numtemp)
            display.innerHTML = numtemp
            if(numtemp.length == 8){
                display.style.fontSize = '3em'
                display.style.lineHeight = '45px'
            }
        }
        console.clear()
        console.log(`numtemp ${numtemp}`)
        console.log(`num1 ${num1}`)
        console.log(`num2 ${num2}`)
        console.log(`numagora ${numagora}`)
        console.log(`operacao definida ${operacaodefinida}`)
    }
}

function executaroperacao(operacao=operacaodefinida, var1=num1, var2=num2){
    if(operacao == 'adicao'){
        resultado = var1 + var2
    } else if(operacao == 'subtracao'){
        resultado = var1 - var2
    } else if(operacao == 'multiplicacao'){
        resultado = var1 * var2
    } else if(operacao == 'divisao'){
        resultado = var1 / var2
    }

    num1 = resultado
    numtemp = ''
    operacaodefinida = ''
    numagora = 'num2'
    
    let tamanho 
    
    if(Number.isInteger(resultado)){
        tamanho = resultado.toString().length
    } else{
        tamanho = resultado.toString().length - 1
    }

    console.clear()
    console.log(`numtemp ${numtemp}`)
    console.log(`num1 ${num1}`)
    console.log(`num2 ${num2}`)
    console.log(`numagora ${numagora}`)
    console.log(`operacao definida ${operacaodefinida}`)
    if(tamanho <= 8){
        display.innerHTML = resultado
    } else {
        display.innerHTML = resultado
        display.style.lineHeight = '45px'
        display.style.fontSize = '3em'
    }
}

function definiroperacao(operacao){
    if(operacaodefinida.length == 0){
        operacaodefinida = operacao
        numagora = 'num2'
        numtemp = ''
        console.clear()
        console.log(`numtemp ${numtemp}`)
        console.log(`num1 ${num1}`)
        console.log(`num2 ${num2}`)
        console.log(`numagora ${numagora}`)
        console.log(`operacao definida ${operacaodefinida}`)
    } else{
        executaroperacao(operacaodefinida, num1, num2)
        operacaodefinida = operacao
        numagora = 'num2'
        console.clear()
        console.log(`numtemp ${numtemp}`)
        console.log(`num1 ${num1}`)
        console.log(`num2 ${num2}`)
        console.log(`numagora ${numagora}`)
        console.log(`operacao definida ${operacaodefinida}`)
    }
}

function limparnumero(quant){
    if(quant == 'todos'){
        num1 = 0
        num2 = 0
        numtemp = ''
        resultado = 0
        numagora = 'num1'
        operacaodefinida = ''
        display.innerHTML = ''
        console.clear()
        console.log(`numtemp ${numtemp}`)
        console.log(`num1 ${num1}`)
        console.log(`num2 ${num2}`)
        console.log(`numagora ${numagora}`)
        console.log(`operacao definida ${operacaodefinida}`)
    } else if(quant == 'unico'){
        numtemp = numtemp.substr(0, numtemp.length - 1)
        if(numagora == 'num1'){
            num1 = Number(numtemp)
        } else if(numagora == 'num2'){
            num2 = Number(numtemp)
        }
        display.innerHTML = numtemp
        console.clear()
        console.log(`numtemp ${numtemp}`)
        console.log(`num1 ${num1}`)
        console.log(`num2 ${num2}`)
        console.log(`numagora ${numagora}`)
        console.log(`operacao definida ${operacaodefinida}`)
    }
}
