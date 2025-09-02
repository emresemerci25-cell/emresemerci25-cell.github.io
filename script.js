// === INIT EMAILJS ===
emailjs.init("TON_PUBLIC_KEY"); // Remplace par ton public key EmailJS

// === SERVICES SMMA ===
const services = [
    { 
        title: "Gestion Facebook Ads", 
        description: "Création et optimisation de campagnes publicitaires pour booster vos ventes et générer des leads qualifiés.", 
        contact: "#contact" 
    },
    { 
        title: "Instagram Ads", 
        description: "Stratégies publicitaires ciblées sur Instagram pour augmenter la visibilité et l'engagement de vos publications.", 
        contact: "#contact" 
    },
    { 
        title: "Acquisition clients", 
        description: "Campagnes multi-plateformes pour attirer de nouveaux clients et fidéliser votre audience existante.", 
        contact: "#contact" 
    },
    { 
        title: "Optimisation de ROI", 
        description: "Analyse et ajustement continu des campagnes pour maximiser le retour sur investissement publicitaire.", 
        contact: "#contact" 
    },
    { 
        title: "Reporting détaillé", 
        description: "Rapports clairs et détaillés pour suivre vos performances marketing et prendre de meilleures décisions.", 
        contact: "#contact" 
    }
];

const companyList = document.getElementById('company-list');

function displayServices(list) {
    companyList.innerHTML = '';
    list.forEach(service => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <a href="${service.contact}" class="btn-contact">Contacter</a>
        `;
        companyList.appendChild(card);
    });
}
displayServices(services);

// === ANIMATION SERVICES AU SCROLL ===
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom){
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        } else {
            card.style.opacity = 0;
            card.style.transform = 'translateY(50px)';
        }
    });
});

// === FORMULAIRE CONTACT AVEC EMAILJS ===
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', e => {
    e.preventDefault();

    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        company_name: document.getElementById('company').value,
        message: document.getElementById('message').value
    };

    emailjs.send('TON_SERVICE_ID','TON_TEMPLATE_ID', templateParams)
        .then(response => {
            formMessage.style.color = 'green';
            formMessage.textContent = "Merci ! Votre message a été envoyé.";
            form.reset();
        }, error => {
            formMessage.style.color = 'red';
            formMessage.textContent = "Une erreur est survenue, réessayez.";
        });
});

// === SMOOTH SCROLL MENU ===
document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
