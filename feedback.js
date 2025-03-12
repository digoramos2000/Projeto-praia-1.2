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
