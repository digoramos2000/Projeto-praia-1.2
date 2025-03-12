// script.js
document.addEventListener('DOMContentLoaded', () => {
    const mesasContainer = document.querySelector('.mesas');
  
    // Criar 20 mesas
    for (let i = 1; i <= 20; i++) {
      const mesa = document.createElement('div');
      mesa.classList.add('mesa', 'disponivel'); // Mesa disponível inicialmente
      mesa.textContent = `Mesa ${i}`;
  
      // Alternar entre ocupada e disponível ao clicar
      mesa.addEventListener('click', () => {
        if (mesa.classList.contains('disponivel')) {
          mesa.classList.remove('disponivel');
          mesa.classList.add('ocupada');
          mesa.textContent = `Mesa ${i} - Ocupada`;
        } else {
          mesa.classList.remove('ocupada');
          mesa.classList.add('disponivel');
          mesa.textContent = `Mesa ${i} - Disponível`;
        }
      });
  
      mesasContainer.appendChild(mesa);
    }
  });
  