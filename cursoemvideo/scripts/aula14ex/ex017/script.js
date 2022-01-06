var btn = document.getElementById('btn')

btn.addEventListener('click', click)


function click(){
    var num = document.getElementById('num').value
    if(num.length == 0){
        alert('Por favor, digite um número!!')
    } else{
        let cont = 1
        var select = document.getElementById('tabuada')
        select.innerHTML = ''
        while(cont <= 10){
            let option = document.createElement('option')
            let nnum = Number(num)
            option.innerHTML = `${nnum} x ${cont} = ${nnum*cont} `
            select.appendChild(option)
            cont++
        }
    }
}
