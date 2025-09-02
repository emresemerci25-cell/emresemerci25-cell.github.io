// === INIT EMAILJS ===
emailjs.init("TON_PUBLIC_KEY"); // Remplace par ta clé publique EmailJS

// === SERVICES SMMA ===
const services = [
    { img: "images/facebook-ads.png", title: "Gestion Facebook Ads", description: "Création et optimisation de campagnes publicitaires pour booster vos ventes et générer des leads qualifiés.", contact: "#contact" },
    { img: "images/instagram-ads.png", title: "Instagram Ads", description: "Stratégies publicitaires ciblées sur Instagram pour augmenter la visibilité et l'engagement de vos publications.", contact: "#contact" },
    { img: "images/acquisition.png", title: "Acquisition clients", description: "Campagnes multi-plateformes pour attirer de nouveaux clients et fidéliser votre audience existante.", contact: "#contact" },
    { img: "images/roi.png", title: "Optimisation de ROI", description: "Analyse et ajustement continu des campagnes pour maximiser le retour sur investissement publicitaire.", contact: "#contact" },
    { img: "images/reporting.png", title: "Reporting détaillé", description: "Rapports clairs et détaillés pour suivre vos performances marketing et prendre de meilleures décisions.", contact: "#contact" }
];

const companyList = document.getElementById('company-list');
function displayServices(list){
    companyList.innerHTML = '';
    list.forEach(service => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${service.img}" alt="${service.title}">
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <a href="${service.contact}" class="btn-contact">Contacter</a>
        `;
        companyList.appendChild(card);
    });
}
displayServices(services);

// === ANIMATION SERVICES AU SCROLL ===
const cards =


