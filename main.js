const form = document.getElementById('form-novo');
const atividades = [];
const notas = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
}); 

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelContato = document.getElementById('telefone');

    if (notas.includes(parseFloat(inputTelContato.value))) {
        alert(`O número ${inputTelContato.value} já foi adicionado`);
    } else {
        atividades.push(inputNomeContato.value);
        notas.push(parseFloat(inputTelContato.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}