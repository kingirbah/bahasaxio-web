/**
 * BAHASAXIO - Global Logistics & Supply Chain Solutions
 * PT BAHASA AKSI MEGA SOLUSINDO
 * Custom JavaScript for Landing Page Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    // --- 1. NAVBAR SCROLL EFFECT ---
    // Mengubah tampilan navbar (padding dan bayangan) saat di-scroll
    const handleNavbarScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg', 'py-2', 'bg-white/95', 'backdrop-blur-md');
            navbar.classList.remove('py-4', 'bg-white');
        } else {
            navbar.classList.add('py-4', 'bg-white');
            navbar.classList.remove('shadow-lg', 'py-2', 'bg-white/95', 'backdrop-blur-md');
        }
    };

    // --- 2. SCROLL SPY ---
    // Menandai menu navigasi yang aktif berdasarkan posisi scroll pengguna
    const handleScrollSpy = () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Deteksi jika posisi scroll berada di dalam area section (dengan offset 150px)
            if (window.pageYOffset >= sectionTop - 150) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-orange-500', 'font-bold'); // Reset state
            if (link.getAttribute('href').includes(currentSectionId)) {
                link.classList.add('text-orange-500', 'font-bold'); // Set active state
            }
        });
    };

    // --- 3. FORM SUBMISSION HANDLING ---
    // Memberikan feedback saat user mengirimkan permintaan quote
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Catatan: Jika Anda menggunakan Formspree, hapus e.preventDefault()
            // agar data benar-benar terkirim ke email Anda.
            e.preventDefault(); 
            
            const submitBtn = contactForm.querySelector('button');
            const originalText = submitBtn.innerText;
            
            // Efek loading sederhana
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Thank you for contacting PT Bahasa Aksi Mega Solusindo. Our logistics expert will contact you shortly.');
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                contactForm.reset();
            }, 1500);
        });
    }

    // --- EVENT LISTENERS ---
    window.addEventListener('scroll', () => {
        handleNavbarScroll();
        handleScrollSpy();
    });

    // Jalankan sekali saat load untuk inisialisasi posisi awal
    handleNavbarScroll();
    handleScrollSpy();
});
