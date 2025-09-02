const companies = [
    { name: "Le Gourmet Restaurant", type: "Restauration", contact: "contact@gourmet.com", description: "Restaurant haut de gamme, spécialiste des plats français et événements privés." },
    { name: "Fitness Pro", type: "Sport", contact: "contact@fitnesspro.com", description: "Salle de sport premium, coaching personnalisé et programmes nutrition." },
    { name: "Tech Solutions", type: "Informatique", contact: "contact@techsolutions.com", description: "Agence IT proposant sites web, applications et maintenance informatique." },
    { name: "Agence Marketing X", type: "Marketing", contact: "contact@marketingx.com", description: "Stratégie digitale, publicité et branding pour entreprises ambitieuses." },
    { name: "Salon Beauté Elite", type: "Beauté", contact: "contact@salonbeaute.com", description: "Salon spécialisé dans soins haut de gamme et produits naturels." },
    { name: "Auto Express", type: "Automobile", contact: "contact@autoexpress.com", description: "Garage et vente de véhicules d'occasion avec garantie." },
    { name: "Cafe Digital", type: "Café / Coworking", contact: "contact@cafedigital.com", description: "Espace coworking et café branché pour entrepreneurs et freelances." }
];

const companyList = document.getElementById('company-list');
const searchInput = document.getElementById('search');

function displayCompanies(list) {
    companyList.innerHTML = '';
    if(list.length === 0){
        companyList.innerHTML = '<p style="text-align:center; width:100%;">Aucune entreprise trouvée</p>';
        return;
    }
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

// Affichage initial
displayCompanies(companies);

// Recherche dynamique
searchInput.addEventListener('keyup', () => {
    const value = searchInput.value.toLowerCase();
    const filtered = companies.filter(c => 
        c.name.toLowerCase().includes(value) || 
        c.type.toLowerCase().includes(value) || 
        c.description.toLowerCase().includes(value)
    );
    displayCompanies(filtered);
});

