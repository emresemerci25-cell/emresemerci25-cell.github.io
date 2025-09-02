const searchBtn = document.getElementById("searchBtn");
const companyInput = document.getElementById("companyInput");
const results = document.getElementById("results");

// Données exemple
const fakeData = [
    {name: "Entreprise A", website: "https://entrepriseA.com"},
    {name: "Entreprise B", website: "https://entrepriseB.com"},
    {name: "Entreprise C", website: "https://entrepriseC.com"}
];

searchBtn.addEventListener("click", () => {
    const query = companyInput.value.toLowerCase();
    results.innerHTML = "";

    const filtered = fakeData.filter(item => item.name.toLowerCase().includes(query));

    if(filtered.length === 0){
        results.innerHTML = "<p>Aucun résultat trouvé</p>";
        return;
    }

    filtered.forEach(item => {
        results.innerHTML += `<p>${item.name} - <a href="${item.website}" target="_blank">Site</a></p>`;
    });
});
