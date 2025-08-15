// --- CÓDIGO PARA CONTROLAR A MODAL DE SISTEMAS ---
// Pega os elementos do HTML que vamos usar para a interatividade para modal sistema
const modal = document.getElementById("modal-sistemas");
const btnAbrirModal = document.getElementById("abrir-modal-sistemas");
const btnFecharModal = document.querySelector(".fechar-modal");
const linksInternos = document.querySelectorAll(".link-sistema");

// Adiciona um evento de clique ao botão "Sistemas" no menu para abrir a modal
btnAbrirModal.onclick = function(event) {
    // Impede o comportamento padrão do link (que seria rolar para o topo)
    event.preventDefault(); 
    // Altera o estilo da modal de 'none' para 'flex' para exibi-la
    modal.style.display = "flex"; 
}

// Adiciona um evento de clique ao 'X' para fechar a modal
btnFecharModal.onclick = function() {
    modal.style.display = "none";
}

// Adiciona um evento de clique a cada link DENTRO da modal
linksInternos.forEach(link => {
    link.onclick = function() {
        // Ao clicar em um link (ex: Estrutura), a modal é fechada.
        // A rolagem suave para a seção correta (#estrutura) é feita pelo próprio link (href).
        modal.style.display = "none";
    }
});

// Adiciona um evento de clique na janela inteira
window.onclick = function(event) {
    // Se o local clicado (event.target) for a área do fundo da modal...
    if (event.target == modal) {
        // ...fecha a modal.
        modal.style.display = "none";
    }
}
// Fim do sistema 

// --- CÓDIGO PARA CONTROLAR A MODAL SOBRE ---

// Fim do modal sobre

// CÓDIGO PARA INICIAR O MAPA
var map = L.map('mapa-osm').setView([-22.902685362332065, -43.22277031838951], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-22.902685362332065, -43.22277031838951]).addTo(map)
    .bindPopup('<b>QM Baja UERJ</b><br>Estamos aqui!')
    .openPopup();
