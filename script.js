document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('cta-button');

    // Adiciona um evento de clique ao botão
    ctaButton.addEventListener('click', function() {
        // Redireciona o usuário para a seção de contato ao clicar
        window.location.href = '#contato'; 
    });

    // Você pode adicionar mais interatividade aqui, como validação de formulários, etc.
    console.log("Site carregado e script funcionando!");
});
