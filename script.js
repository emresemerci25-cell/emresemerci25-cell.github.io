// === INIT EMAILJS ===
emailjs.init("TON_PUBLIC_KEY"); // Remplace par ta clé publique EmailJS

// === SERVICES ===
const services = [
  { img: "https://via.placeholder.com/280x150.png?text=Facebook+Ads", title: "Gestion Facebook Ads", description: "Création et optimisation de campagnes publicitaires pour booster vos ventes et générer des leads qualifiés.", contact: "#contact" },
  { img: "https://via.placeholder.com/280x150.png?text=Instagram+Ads", title: "Instagram Ads", description: "Stratégies publicitaires ciblées sur Instagram pour augmenter la visibilité et l'engagement.", contact: "#contact" },
  { img: "https://via.placeholder.com/280x150.png?text=Acquisition", title: "Acquisition clients", description: "Campagnes multi-plateformes pour attirer de nouveaux clients et fidéliser votre audience.", contact: "#contact" },
  { img: "https://via.placeholder.com/280x150.png?text=ROI", title: "Optimisation de ROI", description: "Analyse et ajustement continu des campagnes pour maximiser le retour sur investissement.", contact: "#contact" },
  { img: "https://via.placeholder.com/280x150.png?text=Reporting", title: "Reporting détaillé", description: "Rapports clairs et détaillés pour suivre vos performances marketing.", contact: "#contact" }
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
    setTimeout(()=>{card.style.opacity="1"; card.style.transform="translateY(0)";},100);
  });
}
displayServices(services);

// === TESTIMONIALS ===
const testimonials = [
  { img:"https://via.placeholder.com/60.png?text=S", text:'"Grâce à Agence SMMA Pro, nos ventes ont augmenté de 40% !" - Sophie L.'},
  { img:"https://via.placeholder.com/60.png?text=K", text:'"Professionnels et réactifs, ils ont transformé notre présence en ligne." - Karim B.'},
  { img:"https://via.placeholder.com/60.png?text=L", text:'"Une équipe passionnée et efficace, résultats rapides." - Laura M.'}
];

const testimonialSlider = document.getElementById('testimonial-slider');
let index = 0;
function showTestimonial(){
  testimonialSlider.innerHTML = '';
  const card = document.createElement('div');
  card.className = 'testimonial-card';
  card.innerHTML = `<img src="${testimonials[index].img}" alt="Témoignage" class="testimonial-img"><p>${testimonials[index].text}</p>`;
  testimonialSlider.appendChild(card);
  setTimeout(()=>{card.style.opacity="1"; card.style.transform="translateY(0)";},100);
  index = (index+1) % testimonials.length;
}
showTestimonial();
setInterval(showTestimonial,5000);

// === FORMULAIRE CONTACT ===
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const company = document.getElementById('company').value;
  const message = document.getElementById('message').value;
  const formMessage = document.getElementById('form-message');

  emailjs.send('SERVICE_ID','TEMPLATE_ID',{
    from_name: name,
    from_email: email,
    company_name: company,
    message: message
  }).then(()=>{
    formMessage.style.color="green";
    formMessage.innerText="Message envoyé avec succès !";
    document.getElementById('contact-form').reset();
  }).catch(()=>{
    formMessage.style.color="red";
    formMessage.innerText="Erreur, veuillez réessayer plus tard.";
  });
});


