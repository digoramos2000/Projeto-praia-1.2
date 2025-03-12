// Função para alternar o menu hambúrguer
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('nav-active');
    
    // Adiciona animação de transição para o menu hambúrguer
    const bars = document.querySelectorAll('.menu-hamburger .bar');
    bars.forEach(bar => {
        bar.classList.toggle('toggle');
    });
}

// Função que será chamada quando o cliente enviar o feedback
function enviarFeedback() {
    // Pegando o feedback do textarea
    const feedbackTexto = document.getElementById('feedback-text').value;
    
    // Se o feedback não estiver vazio
    if (feedbackTexto.trim() !== '') {
        // Criando um novo elemento de feedback
        const feedbackDiv = document.createElement('div');
        feedbackDiv.classList.add('feedback-item');
        
        // Adicionando o feedback dentro do novo elemento
        feedbackDiv.innerHTML = `
            <p>${feedbackTexto}</p>
            <small>Feedback enviado com sucesso!</small>
        `;
        
        // Adicionando o feedback na lista de feedbacks
        document.getElementById('feedback-container').appendChild(feedbackDiv);
        
        // Salvando no localStorage
        let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
        feedbacks.push(feedbackTexto);
        localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

        // Limpando o textarea após o envio
        document.getElementById('feedback-text').value = '';
    } else {
        alert('Por favor, digite um feedback!');
    }
}

// Função para carregar os feedbacks salvos
function carregarFeedbacks() {
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    const feedbackContainer = document.getElementById('feedback-container');

    // Adicionando os feedbacks na página
    feedbacks.forEach(feedback => {
        const feedbackDiv = document.createElement('div');
        feedbackDiv.classList.add('feedback-item');
        feedbackDiv.innerHTML = `
            <p>${feedback}</p>
            <small>Feedback enviado com sucesso!</small>
        `;
        feedbackContainer.appendChild(feedbackDiv);
    });
}

// Carregar os feedbacks ao carregar a página
window.onload = carregarFeedbacks;

// Adicionar o evento de clique no menu hambúrguer
const menuHamburger = document.querySelector('.menu-hamburger');
menuHamburger.addEventListener('click', toggleMenu);

// Função para redirecionar para a página de Anotação de Pedidos
function irParaAnotacaoPedidos() {
    window.location.href = 'anotacao.html';
}

// Adicionar o evento de clique para o link "Anotação de Pedidos"
const anotacaoLink = document.querySelector('#anotacao-link');
anotacaoLink.addEventListener('click', irParaAnotacaoPedidos);
