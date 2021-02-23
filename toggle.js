const button = document.getElementById('hamburger');
const links = document.getElementById('links');

button.addEventListener('click', () => {
    links.classList.toggle('active')
})
