const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const scrollTopButton = document.getElementById('scrollTop');

// гамбергер 
menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    mainNav.classList.toggle('active');
});

// при прокрутке появляеться кнопка
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
});
// кнопка наверх
scrollTopButton.addEventListener('click', function() {
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });
});