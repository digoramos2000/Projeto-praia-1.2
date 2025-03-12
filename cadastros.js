let funcionarios = [];
let idFuncionario = 1; // Identificador único para cada funcionário

// Verifica se já existem funcionários no localStorage e carrega os dados
if (localStorage.getItem('funcionarios')) {
    funcionarios = JSON.parse(localStorage.getItem('funcionarios'));
    // Atualiza o ID do próximo funcionário com base no último ID registrado
    idFuncionario = funcionarios.length > 0 ? funcionarios[funcionarios.length - 1].id + 1 : 1;
    atualizarListaFuncionarios(); // Exibe a lista de funcionários já cadastrados
}

// Função para cadastrar funcionário
document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const senha = document.getElementById('senha').value;
    const cargo = document.getElementById('cargo').value;

    // Cria o novo funcionário com todos os dados e um ID único
    const novoFuncionario = {
        id: idFuncionario++,
        nome: nome,
        sobrenome: sobrenome,
        senha: senha,
        cargo: cargo,
        status: "Ativo"  // Definindo status padrão como "Ativo"
    };

    // Adiciona funcionário ao array
    funcionarios.push(novoFuncionario);

    // Salva os dados no localStorage
    localStorage.setItem('funcionarios', JSON.stringify(funcionarios));

    // Atualiza lista de funcionários
    atualizarListaFuncionarios();

    // Limpa o formulário
    document.getElementById('formCadastro').reset();
});

// Função para listar os funcionários
function atualizarListaFuncionarios() {
    const lista = document.getElementById('listaFuncionarios');
    lista.innerHTML = ''; // Limpa a lista antes de atualizar

    funcionarios.forEach(func => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>ID:</strong> ${func.id} <br>
            <strong>Nome:</strong> ${func.nome} ${func.sobrenome} <br>
            <strong>Cargo:</strong> ${func.cargo} <br>
            <strong>Status:</strong> ${func.status} <br>
            <strong>Senha:</strong> ${func.senha} <br>
            <button onclick="removerFuncionario(${func.id})">Remover</button>
            <hr>
        `;
        lista.appendChild(li);
    });
}

// Função para remover um funcionário
function removerFuncionario(id) {
    // Filtra o array de funcionários, removendo o funcionário com o ID fornecido
    funcionarios = funcionarios.filter(func => func.id !== id);

    // Salva a lista atualizada de funcionários no localStorage
    localStorage.setItem('funcionarios', JSON.stringify(funcionarios));

    // Atualiza a lista de funcionários exibida
    atualizarListaFuncionarios();
}
