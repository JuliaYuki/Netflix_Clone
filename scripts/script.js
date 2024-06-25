document.querySelectorAll('.social-media .items').forEach(item => {
    item.addEventListener('click', function() {
        const platform = this.getAttribute('data-platform');
        const url = this.getAttribute('data-url');
        window.open(url, '_blank');
    });
});

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault()
        alert('Página em construção!')
    })
})

document.querySelectorAll('.card-episodio').forEach(item => {
    item.addEventListener('click', function() {
        const episode = this.getAttribute('data-episode')
        alert(`Episódio ${episode} clicado`)
    })
})
