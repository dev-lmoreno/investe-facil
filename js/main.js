function showSection(section) {
    const content = document.getElementById('content');
    content.style.opacity = 0;

    fetch(`content/${section}.html`)
        .then(res => res.text())
        .then(html => {
            setTimeout(() => {
                content.innerHTML = html;
                content.style.opacity = 1;
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }, 300);
        })
        .catch(() => {
            content.innerHTML = `<p>Erro ao carregar o conteúdo de "${section}".</p>`;
            content.style.opacity = 1;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
