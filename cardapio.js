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
