const companies = [
    { name: "Restaurant Le Gourmet", type: "Restauration", contact: "contact@gourmet.com" },
    { name: "Fitness Pro", type: "Sport", contact: "contact@fitnesspro.com" },
    { name: "Tech Solutions", type: "Informatique", contact: "contact@techsolutions.com" },
    { name: "Agence Marketing", type: "Marketing", contact: "contact@marketing.com" },
    { name: "Salon Beauté", type: "Beauté", contact: "contact@salonbeaute.com" }
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
        c.name.toLowerCase().includes(value) || c.type.toLowerCase().includes(value)
    );
    displayCompanies(filtered);
});
