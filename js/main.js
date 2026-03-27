// ========== MOBILE MENU TOGGLE ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ========== ACTIVE LINK ON SCROLL ==========
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let scrollPos = window.scrollY + 120;
    
    sections.forEach(section => {
        let top = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        
        if (scrollPos >= top && scrollPos < top + height && id) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ========== SMOOTH SCROLLING ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== CONTACT FORM HANDLER ==========
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name')?.value || '';
        const email = document.getElementById('email')?.value || '';
        const phone = document.getElementById('phone')?.value || '';
        const service = document.getElementById('service')?.value || '';
        const area = document.getElementById('area')?.value || '';
        const message = document.getElementById('message')?.value || '';
        
        if (!name || !email || !phone) {
            formStatus.textContent = '❌ Please fill in all required fields (Name, Email, Phone).';
            formStatus.style.color = '#E67E22';
            return;
        }
        
        if (!email.includes('@')) {
            formStatus.textContent = '❌ Please enter a valid email address.';
            formStatus.style.color = '#E67E22';
            return;
        }
        
        // Simulate form submission
        formStatus.innerHTML = '✅ Thank you! We\'ll contact you within 1 hour. <i class="fas fa-smile-wink"></i>';
        formStatus.style.color = '#0B5E7E';
        
        // Clear form
        contactForm.reset();
        
        setTimeout(() => {
            formStatus.textContent = '';
        }, 5000);
    });
}

// ========== ANIMATION ON SCROLL ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate service cards, gallery items, testimonials, and features
document.querySelectorAll('.service-card, .gallery-item, .testimonial-card, .feature, .area-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========== PHONE NUMBER CLICK TRACKING ==========
const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
phoneLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone number clicked - tracking for analytics');
    });
});

// ========== GALLERY IMAGE CLICK ==========
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const title = item.querySelector('h4')?.innerText || 'Project';
        if (img) {
            console.log(`Gallery image clicked: ${title}`);
            // You can implement a lightbox modal here
        }
    });
});

// ========== DYNAMIC YEAR IN FOOTER ==========
const yearSpan = document.querySelector('.footer-bottom p');
if (yearSpan) {
    const year = new Date().getFullYear();
    yearSpan.innerHTML = yearSpan.innerHTML.replace('2025', year);
}

console.log('Premium Plumbing SA Website Loaded - Portfolio Project | Serving South Africa');