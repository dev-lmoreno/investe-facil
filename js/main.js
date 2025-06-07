function showSection(section) {
    const content = document.getElementById('content');
    content.style.opacity = 0;

    fetch(`content/${section}.html`)
        .then(res => res.text())
        .then(html => {
            setTimeout(() => {
                content.innerHTML = html;
                content.style.opacity = 1;
                content.scrollTop = 0;
            }, 300);
        })
        .catch(() => {
            content.innerHTML = `<p>Erro ao carregar o conteúdo de "${section}".</p>`;
            content.style.opacity = 1;
            content.scrollTop = 0;
        });
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
