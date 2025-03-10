// Arrays para armazenar as mesas e pedidos
let mesas = [];
let pedidos = {};

// Função para carregar as mesas na tela
function carregarMesas() {
    const mesasContainer = document.querySelector('.mesas');
    mesasContainer.innerHTML = '';

    mesas.forEach((mesa) => {
        const mesaDiv = document.createElement('div');
        mesaDiv.classList.add('mesa');
        
        if (pedidos[mesa]?.length > 0) {
            mesaDiv.classList.add('pedido'); // Marca a mesa como tendo pedido
        }

        mesaDiv.innerHTML = `
            <h4>Mesa ${mesa}</h4>
            <p>${pedidos[mesa]?.length > 0 ? 'Pedido(s) em andamento' : 'Sem pedidos'}</p>
        `;

        // Adiciona evento de clique para selecionar a mesa
        mesaDiv.addEventListener('click', () => selecionarMesa(mesa));

        mesasContainer.appendChild(mesaDiv);
    });
}

// Função para adicionar uma nova mesa
document.querySelector('.addMesa').addEventListener('click', () => {
    const novaMesa = mesas.length + 1;
    mesas.push(novaMesa);
    pedidos[novaMesa] = [];
    carregarMesas();
});

// Função para remover a última mesa
document.querySelector('.removeMesa').addEventListener('click', () => {
    if (mesas.length > 0) {
        const mesaRemovida = mesas.pop();
        delete pedidos[mesaRemovida]; // Remove os pedidos associados à mesa
        carregarMesas();
    }
});

// Função para selecionar a mesa e exibir os pedidos
function selecionarMesa(mesa) {
    const pedidoSection = document.querySelector('.pedido-section');
    pedidoSection.style.display = 'block';
    document.querySelector('#mesaNome').innerText = `Mesa ${mesa}`;

    const pedidoList = document.querySelector('.pedido-list');
    pedidoList.innerHTML = '';

    pedidos[mesa].forEach((pedido, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${pedido}
            <button onclick="deletarPedido(${mesa}, ${index})">X</button>
        `;
        pedidoList.appendChild(li);
    });

    // Lida com a adição de novos pedidos
    document.querySelector('#addPedidoBtn').onclick = () => {
        const novoPedido = document.querySelector('#novoPedidoInput').value.trim();
        if (novoPedido) {
            pedidos[mesa].push(novoPedido);
            document.querySelector('#novoPedidoInput').value = ''; 
            carregarMesas();
            selecionarMesa(mesa);
        }
    };
}

// Função para deletar um pedido
function deletarPedido(mesa, index) {
    pedidos[mesa].splice(index, 1);
    carregarMesas();
    selecionarMesa(mesa);
}

// Inicializa a interface
carregarMesas();
