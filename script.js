const profileBtn = document.querySelector('.profile-btn');
const sidebar = document.querySelector('.sidebar');
const profileImg = document.querySelector('.profile-img');
const sideimg = document.querySelector('.side-img')


function toggleSidebar(event) {
    event.preventDefault(); // Prevenir o comportamento padrão do link
    sidebar.classList.toggle('active');
    profileBtn.classList.toggle('hide-img');

     if (window.matchMedia("(max-width: 600px)").matches) {
        // Assim nao fica cagado quando você esta em um pc, porque essa bosta puxa tudo, nao só o sidebar
        sidebar.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
}

profileBtn.addEventListener('click', toggleSidebar)
sideimg.addEventListener('click', toggleSidebar)

