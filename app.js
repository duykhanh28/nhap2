// Xử lý sự kiện click cho nút toggle navbar
document.addEventListener('DOMContentLoaded', function() {
    let navbarToggler = document.querySelector('.navbar-toggler');
    let navbarMenu = document.querySelector('#navbarSupportedContent');

    navbarToggler.addEventListener('click', function() {
        navbarMenu.classList.toggle('show');
    });
});
