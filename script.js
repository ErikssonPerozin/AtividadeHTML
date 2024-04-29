// Função para alternar entre as guias de conteúdo
function mostrarConteudo(id) {
    // Oculta todos os conteúdos
    document.querySelectorAll('.content').forEach(function(content) {
        content.style.display = 'none';
    });

    // Mostra o conteúdo associado ao ID especificado
    var conteudo = document.getElementById(id);
    if (conteudo) {
        conteudo.style.display = 'block';
    }
}

// Adiciona um evento de clique a todos os botões do menu
document.querySelectorAll('nav a').forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link

        // Obtém o ID do conteúdo associado ao botão clicado
        var conteudoId = this.getAttribute('id').replace('btn', 'conteudo');

        // Mostra o conteúdo associado ao botão clicado
        mostrarConteudo(conteudoId);
    });
});

// Mostra o conteúdo inicial ao carregar a página
mostrarConteudo('conteudoInicio');
