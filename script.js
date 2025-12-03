document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling para os links de navegação (melhora a UX)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Ação ao enviar o formulário (apenas demonstração)
    const form = document.querySelector('#contato form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Em um site real, aqui você enviaria os dados para um servidor (backend)
            alert('Sua solicitação de orçamento foi enviada com sucesso! Entraremos em contato em breve. (Demonstração)');
            form.reset();
        });
    }

    console.log("Site Buscac carregado com interatividade.");
});
