let containerTarefas = document.querySelector('.container-tarefas');
let campoTarefa = document.querySelector('#campoTarefa');
let botaoAdicionar = document.querySelector('#adicionarTarefa');
let tarefa, separador, checkbox, descricaoTarefa, btnApagarTarefa;

botaoAdicionar.addEventListener('click', function (){
    criaElementos();
    adicionaElementos();
    marcarTarefaConcluida(checkbox, descricaoTarefa);
    removerTarefa(btnApagarTarefa, tarefa);
    campoTarefa.value = '';
});

function marcarTarefaConcluida(botao, tarefa){
    botao.addEventListener('click', () => tarefa.classList.toggle('tarefa-concluida'));
}

function removerTarefa (botao, elementoPai){
    botao.addEventListener('click', function (){
        elementoPai.remove();
    });
}

function criaElementos(){
    tarefa = document.createElement('div');
    separador = document.createElement('div');
    checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    descricaoTarefa = document.createElement('span');
    btnApagarTarefa = document.createElement('button');
    btnApagarTarefa.innerHTML = 'X';
}

function adicionaElementos(){
    descricaoTarefa.innerHTML = campoTarefa.value;
    tarefa.classList.add('estilo-tarefa');
    containerTarefas.appendChild(tarefa);
    tarefa.appendChild(separador);
    checkbox.classList.add('botao-check');
    separador.appendChild(checkbox);
    separador.appendChild(descricaoTarefa);
    btnApagarTarefa.classList.add('botao-apagar');
    tarefa.appendChild(btnApagarTarefa);
}
