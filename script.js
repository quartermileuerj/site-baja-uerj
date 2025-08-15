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

// Cod para botões descrição
// Aguarda o carregamento completo do conteúdo da página
document.addEventListener('DOMContentLoaded', function() {

    // Lógica para o Modal de Sistemas (que você já tinha)
const modal = document.getElementById('modal-sistemas');
const btnAbrir = document.getElementById('abrir-modal-sistemas');
const btnFechar = document.querySelector('.fechar-modal');

if (btnAbrir) {
    btnAbrir.onclick = function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link '#'
        modal.style.display = "flex";
    }
}

if (btnFechar) {
    btnFechar.onclick = function() {
        modal.style.display = "none";
    }
}
    
    // Fecha o modal se o usuário clicar fora do conteúdo
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
    
    // Fecha o modal quando um link interno dele é clicado
document.querySelectorAll('.link-sistema').forEach(link => {
    link.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});


    // --- NOVA LÓGICA PARA OS BOTÕES DE DESCRIÇÃO (ACCORDION) ---

const botoesDescricao = document.querySelectorAll('.botao-descricao');

botoesDescricao.forEach(botao => {
    botao.addEventListener('click', function() {
            // Adiciona ou remove a classe 'ativo' do botão clicado
        this.classList.toggle('ativo');

            // Seleciona o painel de conteúdo (que é o próximo elemento irmão do botão)
        const conteudo = this.nextElementSibling;

            // Verifica se o painel já tem uma 'max-height' definida (se está aberto)
        if (conteudo.style.maxHeight) {
                // Se estiver aberto, fecha (define max-height como null/0)
            conteudo.style.maxHeight = null;
        } else {
                // Se estiver fechado, abre (define max-height com o tamanho do seu conteúdo)
            conteudo.style.maxHeight = conteudo.scrollHeight + "px";
        }
    });
});

});
// Cod para botões descrição FIM

