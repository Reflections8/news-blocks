function linksDef() {
    const links = document.querySelectorAll('.n');

    if(links.length > 0) {

    }
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
        })
    });
}

linksDef();
