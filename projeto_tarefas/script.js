let btnadicionar = document.getElementById('btnadicionar');
let btnremover = document.getElementsByClassName('btnremover');
let tarefas = document.getElementById('tarefas');
let txttarefa = document.getElementById('txttarefa');
let idbtn = 0
let idli = 0
txttarefafocus = false

btnadicionar.addEventListener('click', adicionar);

document.addEventListener('keypress', function(value){
    if(value.key == 'Enter'){
        if(txttarefafocus == true){
            btnadicionar.click()
        }
    }
})


txttarefa.addEventListener('focus', function(){  
    txttarefafocus = true
})

function adicionar(){
    let num = document.getElementById('num');

    if(txttarefa.value.length > 0){
        let tarefa = document.createElement('li');          
        let texto = document.createElement('p');
        let btnremover = document.createElement('input');
        btnremover.setAttribute('type', 'button');
        btnremover.setAttribute('class', 'btnremover');
        btnremover.setAttribute('id', idbtn)
        btnremover.value = 'X';
        tarefa.setAttribute('id', idli)
        texto.innerText = txttarefa.value;
        tarefa.appendChild(texto);
        tarefa.appendChild(btnremover);
        tarefas.appendChild(tarefa);
        txttarefa.value = '';
        txttarefa.focus()
        idbtn ++
        idli ++
    };

    for(let i = 0; i < btnremover.length; i++){
        btnremover[i].addEventListener('click', function(){
            let li = document.getElementById(this.id)
            tarefas.removeChild(li)
        });
    };
};

