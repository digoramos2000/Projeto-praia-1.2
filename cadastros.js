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
                    <p class="item-price">R$${item.price.toFixed(2)}</p>
                </div>
            `;

            menuItemsContainer.appendChild(itemElement);
        });
    }
});

// Função para adicionar novos itens ao menu
function addMenuItem(name, description, price, image) {
    const newItem = {
        name: name,
        description: description,
        price: parseFloat(price),
        image: image
    };

    const items = JSON.parse(localStorage.getItem('menuItems')) || [];
    items.push(newItem);
    localStorage.setItem('menuItems', JSON.stringify(items));
}
