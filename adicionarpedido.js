document.getElementById('itemImage').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const preview = document.getElementById('imagePreview');
        preview.innerHTML = `<img src="${e.target.result}" alt="Preview do item">`;
        preview.style.display = 'block'; // Exibe a imagem
    };

    if (file) {
        reader.readAsDataURL(file); // Lê o arquivo selecionado
    }
});

document.getElementById('addItemForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário para testarmos

    // Obter os dados do formulário
    const itemName = document.getElementById('itemName').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const itemPrice = document.getElementById('itemPrice').value;
    const itemImage = document.getElementById('itemImage').files[0];

    // Ler a imagem como DataURL para armazenar no localStorage
    const reader = new FileReader();
    reader.onload = function (e) {
        const item = {
            name: itemName,
            description: itemDescription,
            price: itemPrice,
            image: e.target.result // Salvar a imagem em formato Base64
        };

        // Recuperar os itens salvos (se existirem) ou iniciar um array vazio
        let items = JSON.parse(localStorage.getItem('menuItems')) || [];

        // Adicionar o novo item ao array
        items.push(item);

        // Salvar o array atualizado no localStorage
        localStorage.setItem('menuItems', JSON.stringify(items));

        // Exibir uma mensagem de sucesso (opcional)
        alert('Item Adicionado com Sucesso!');
        
        // Limpar o formulário
        document.getElementById('addItemForm').reset();
        document.getElementById('imagePreview').style.display = 'none'; // Esconder a pré-visualização
    };

    if (itemImage) {
        reader.readAsDataURL(itemImage); // Lê a imagem como DataURL
    }
});
