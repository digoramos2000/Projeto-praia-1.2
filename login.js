document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura o nome completo (nome + sobrenome)
    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');

    // Recupera a lista de usuários do localStorage
    const usuariosLista = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica se o nome completo e a senha estão corretos
    const usuarioExistente = usuariosLista.find(usuario => `${usuario.nome} ${usuario.sobrenome}` === nomeCompleto && usuario.senha === senha);

    if (usuarioExistente) {
        mensagem.textContent = 'Login realizado com sucesso!';
        mensagem.style.color = 'green';

        // Redireciona para a página dash.html
        window.location.href = 'pagina.html'; // Redirecionamento para a página de dashboard
    } else {
        mensagem.textContent = 'Nome de usuário ou senha incorretos!';
        mensagem.style.color = 'red';
    }
});
