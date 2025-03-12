document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura o nome completo (nome + sobrenome)
    const nomeCompleto = document.getElementById('nomeCompleto').value.trim();
    const senha = document.getElementById('senha').value;
    const mensagemErro = document.getElementById('mensagemErro');

    // Verifica se a lista de usuários está no localStorage
    const usuariosLista = JSON.parse(localStorage.getItem('usuarios')) || [];

    console.log('Usuários no localStorage:', usuariosLista); // Verifique o que está armazenado

    // Verifica se o nome completo (nome + sobrenome) existe no banco de dados
    const usuarioExistente = usuariosLista.find(usuario => `${usuario.nome} ${usuario.sobrenome}`.trim() === nomeCompleto);

    if (usuarioExistente) {
        // Verifica se a senha está correta
        if (usuarioExistente.senha === senha) {
            mensagemErro.textContent = 'Login realizado com sucesso!';
            mensagemErro.style.color = 'green';

            // Redireciona para a página de dashboard
            window.location.href = 'pagina.html'; // Verifique se a página existe e o caminho está correto
        } else {
            mensagemErro.textContent = 'Senha incorreta!';
            mensagemErro.style.color = 'red';
        }
    } else {
        mensagemErro.textContent = 'Usuário não encontrado!';
        mensagemErro.style.color = 'red';
    }
});
