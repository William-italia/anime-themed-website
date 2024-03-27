const menuAside = document.querySelector('.menu-aside');

// Obtém uma referência para todos os botões que irão acionar a mudança de visibilidade do menu
const toggleMenuButtons = document.querySelectorAll('#toggle-menu');

// Adiciona um ouvinte de evento de clique a todos os botões
toggleMenuButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Verifica se a classe 'hidden' está presente no menu aside
        const isHidden = menuAside.classList.contains('hidden');

        // Se estiver escondido, mostra-o; caso contrário, esconde-o
        if (isHidden) {
            menuAside.classList.remove('hidden');
        } else {
            menuAside.classList.add('hidden');
        }
    });
});