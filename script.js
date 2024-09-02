document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        const offset = -index * 100;
        document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', prevSlide);

    showSlide(currentSlide);

    // Navegação automática opcional
    setInterval(nextSlide, 6000); // Troca de slide a cada 6 segundos

    // Mensagem de sucesso após envio do formulário
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio real do formulário para fins de demonstração
        formMessage.textContent = 'Sua mensagem foi enviada com sucesso!';
        form.reset(); // Limpa o formulário após o envio
    });

    // Menu Hamburger
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('mobile-active');
    });
});
