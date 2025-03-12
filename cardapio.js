document.addEventListener('DOMContentLoaded', function () {
    // Recuperar os itens do menu do localStorage
    const items = JSON.parse(localStorage.getItem('menuItems')) || [];

    // Obter o elemento onde os itens serão exibidos
    const menuItemsContainer = document.getElementById('menuItems');

    if (items.length === 0) {
        menuItemsContainer.innerHTML = '<p>Nenhum item adicionado ao cardápio ainda.</p>';
    } else {
        // Loop para exibir os itens
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('menu-item');

            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="item-image" />
                <div class="item-info">
                    <h3 class="item-name">${item.name}</h3>
                    <p class="item-description">${item.description}</p>
                    <p class="item-price">R$${item.price}</p>
                </div>
            `;

            menuItemsContainer.appendChild(itemElement);
        });
    }
});

// Função para mostrar as opções de acordo com a categoria escolhida
function mostrarOpcoes() {
    const categoria = document.getElementById('categoria').value;
    const opcoesCardapio = document.getElementById('opcoes-cardapio');
    
    let opcoes = '';

    if (categoria === 'pratos') {
        opcoes = `
            <h2>Pratos</h2>
            <ul>
                <li>Feijoada</li>
                <li>Arroz com Peixe</li>
                <li>Frango à Parmegiana</li>
            </ul>
        `;
    } else if (categoria === 'lanches') {
        opcoes = `
            <h2>Lanches</h2>
            <ul>
                <li>X-Burger</li>
                <li>X-Salada</li>
                <li>X-Tudo</li>
            </ul>
        `;
    } else if (categoria === 'bebidas') {
        opcoes = `
            <h2>Bebidas</h2>
            <ul>
                <li>Coca-Cola</li>
                <li>Suco de Laranja</li>
                <li>Água Mineral</li>
            </ul>
        `;
    }

    // Exibe as opções no HTML
    opcoesCardapio.innerHTML = opcoes;
}

// Chama a função quando o formulário é enviado
window.onload = () => {
    document.getElementById('menu-form').addEventListener('submit', function(e) {
        e.preventDefault(); // Evita o envio do formulário
        mostrarOpcoes(); // Mostra as opções de acordo com a categoria escolhida
    });
}
