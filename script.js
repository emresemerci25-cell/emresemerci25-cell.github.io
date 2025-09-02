const companies = [
    { name: "Restaurant Le Gourmet", type: "Restauration", contact: "contact@gourmet.com", description: "Restaurant haut de gamme pour événements privés." },
    { name: "Fitness Pro", type: "Sport", contact: "contact@fitnesspro.com", description: "Salle de sport premium avec coaching personnalisé." },
    { name: "Tech Solutions", type: "Informatique", contact: "contact@techsolutions.com", description: "Agence IT proposant sites web et apps." },
    { name: "Marketing X", type: "Marketing", contact: "contact@marketingx.com", description: "Stratégie digitale et branding pour entreprises." },
    { name: "Salon Beauté Elite", type: "Beauté", contact: "contact@salonbeaute.com", description: "Soins haut de gamme et produits naturels." }
];

const companyList = document.getElementById('company-list');

function displayCompanies(list) {
    companyList.innerHTML = '';
    list.forEach(company => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${company.name}</h3>
            <p><strong>Type :</strong> ${company.type}</p>
            <p><strong>Contact :</strong> ${company.contact}</p>
            <p>${company.description}</p>
        `;
        companyList.appendChild(card);
    });
}

displayCompanies(companies);

// Formulaire contact
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Merci ! Votre message a été envoyé.');
    form.reset();
});
