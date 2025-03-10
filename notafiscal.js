// Função para voltar para o dash.html
function voltarParaDashboard() {
    window.location.href = 'pagina.html';
}

// Adiciona itens à lista de itens na nota fiscal
const listaItens = document.getElementById('listaItens');
const totalNota = document.getElementById('totalNota');
const nomeCliente = document.getElementById('nomeCliente');
const numeroMesa = document.getElementById('numeroMesa');
const nomeItem = document.getElementById('nomeItem');
const quantidadeItem = document.getElementById('quantidadeItem');
const precoItem = document.getElementById('precoItem');

let itens = [];  // Armazena os itens adicionados

document.getElementById('adicionarItem').addEventListener('click', () => {
    const nome = nomeItem.value.trim();
    const quantidade = parseInt(quantidadeItem.value.trim());
    const preco = parseFloat(precoItem.value.trim());

    // Valida os campos
    if (nome && quantidade && preco > 0) {
        // Adiciona o item à lista de itens
        const item = { nome, quantidade, preco, total: quantidade * preco };
        itens.push(item);

        // Atualiza a lista de itens na interface
        atualizarListaItens();
        atualizarTotalNota();

        // Limpa os campos de entrada
        nomeItem.value = '';
        quantidadeItem.value = '';
        precoItem.value = '';
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
});

// Atualiza a lista de itens no HTML
function atualizarListaItens() {
    listaItens.innerHTML = '';
    itens.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.quantidade} x ${item.nome} - R$ ${item.preco.toFixed(2)} (Total: R$ ${item.total.toFixed(2)})`;
        listaItens.appendChild(li);
    });
}

// Atualiza o total da nota fiscal
function atualizarTotalNota() {
    const total = itens.reduce((acc, item) => acc + item.total, 0);
    totalNota.textContent = total.toFixed(2);
}

// Gera o PDF da nota fiscal
document.getElementById('gerarPDF').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const nome = nomeCliente.value.trim();
    const mesa = numeroMesa.value.trim();
    const data = new Date().toLocaleString();

    if (!nome || !mesa || itens.length === 0) {
        alert('Por favor, preencha todos os campos e adicione ao menos um item.');
        return;
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('NOTA FISCAL', 80, 15);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Data: ${data}`, 20, 25);
    doc.text(`Cliente: ${nome}`, 20, 35);
    doc.text(`Mesa: ${mesa}`, 20, 45);

    doc.setFont('helvetica', 'bold');
    doc.text('Itens:', 20, 55);

    let yPosition = 65;
    doc.setFont('helvetica', 'normal');
    itens.forEach((item, index) => {
        doc.text(`${index + 1}. ${item.quantidade} x ${item.nome} - R$ ${item.preco.toFixed(2)} (Total: R$ ${item.total.toFixed(2)})`, 20, yPosition);
        yPosition += 10;
    });

    doc.setFont('helvetica', 'bold');
    doc.text(`Total: R$ ${totalNota.textContent}`, 20, yPosition + 10);
    doc.text('Obrigado pela preferência!', 20, yPosition + 20);

    doc.save(`nota_fiscal_${nome.replace(/\s+/g, '_')}.pdf`);
});
