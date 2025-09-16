const profileBtn = document.querySelector('.profile-btn');
const sidebar = document.querySelector('.sidebar');
const profileImg = document.querySelector('.profile-img');

profileBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show');      // abre/fecha sidebar
    profileBtn.classList.toggle('hide-img'); // esconde/mostra imagem
});