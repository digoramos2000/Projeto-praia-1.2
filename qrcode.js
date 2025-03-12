function gerarQRCode() {
    console.log("Botão clicado!"); // Para verificar se a função foi chamada
    const url = 'cardapio.html'; // Caminho para o seu arquivo cardapio.html
    const qrcodeContainer = document.getElementById('qrcode');
    
    // Limpa o QR Code anterior, se houver
    qrcodeContainer.innerHTML = ''; 

    // Cria o QR Code com o URL desejado
    QRCode.toCanvas(qrcodeContainer, url, function (error) {
        if (error) {
            console.error(error);
        } else {
            console.log('QR Code gerado!');
        }
    });
}
