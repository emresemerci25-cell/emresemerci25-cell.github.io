/* ===== Menu mobile ===== */
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', ()=> nav.classList.toggle('open'));

/* ===== Services (images business, no salade) ===== */
const SERVICES = [
  { img:"https://images.unsplash.com/photo-1551281044-8e8d0a75d2d5?q=80&w=800&auto=format&fit=crop",
    title:"Gestion Facebook Ads",
    desc:"Création, A/B tests, scaling et baisse des CPA sur vos comptes Meta." },
  { img:"https://images.unsplash.com/photo-1596524430615-b46475ddff6a?q=80&w=800&auto=format&fit=crop",
    title:"Instagram Ads",
    desc:"Formats Reels, carrousels & UGC pour booster la conversion sur mobile." },
  { img:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    title:"Acquisition clients",
    desc:"Stratégies multi-canales et funnels pour nourrir votre pipe commercial." },
  { img:"https://images.unsplash.com/photo-1581092160562-040f07c96f4b?q=80&w=800&auto=format&fit=crop",
    title:"Optimisation du ROI",
    desc:"Pilotage budget, enchères & créas pour maximiser le ROAS." },
  { img:"https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
    title:"Tracking & Data",
    desc:"Pixels, conversions API, événements et dashboarding clair." },
  { img:"https://images.unsplash.com/photo-1590402494682-cd06e3f7c7f3?q=80&w=800&auto=format&fit=crop",
    title:"Reporting",
    desc:"Rapports hebdo clairs + recommandations actionnables." },
];

const serviceList = document.getElementById('service-list');
serviceList.innerHTML = SERVICES.map(s => `
  <article class="card">
    <img src="${s.img}" alt="${s.title}">
    <h3>${s.title}</h3>
    <p>${s.desc}</p>
    <a class="btn btn-ghost" href="#contact">Contacter</a>
  </article>
`).join('');

/* Apparition des cards au scroll */
const onScrollReveal = () => {
  document.querySelectorAll('.card').forEach(card=>{
    const top = card.getBoundingClientRect().top;
    if(top < window.innerHeight * 0.88){
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });
};
onScrollReveal();
window.addEventListener('scroll', onScrollReveal);

/* ===== Testimonials slider ===== */
const TESTIMONIALS = [
  { img:"https://i.pravatar.cc/100?img=12", name:"Sophie L.", text:"« +40% de CA en 8 semaines sur nos comptes Meta. »" },
  { img:"https://i.pravatar.cc/100?img=18", name:"Karim B.",  text:"« Pilotage pro et réactif. On tient un ROAS propre. »" },
  { img:"https://i.pravatar.cc/100?img=7",  name:"Laura M.",  text:"« Setup tracking nickel, rapports limpides. »" },
];

const testi = document.getElementById('testimonial');
const dots = document.getElementById('dots');
let step = 0;

function renderTestimonial(i){
  const t = TESTIMONIALS[i];
  testi.innerHTML = `
    <div class="testi-row">
      <img src="${t.img}" alt="${t.name}">
      <div>
        <strong>${t.name}</strong><br/>
        <span class="testi-text">${t.text}</span>
      </div>
    </div>
  `;
  dots.innerHTML = TESTIMONIALS.map((_,idx)=>`<button class="dot ${idx===i?'active':''}" data-i="${idx}" aria-label="Slide ${idx+1}"></button>`).join('');
}
renderTestimonial(step);
setInterval(()=>{ step = (step+1)%TESTIMONIALS.length; renderTestimonial(step); }, 5000);
dots.addEventListener('click', (e)=>{ if(e.target.matches('.dot')){ step=+e.target.dataset.i; renderTestimonial(step);} });

/* ===== Smooth scroll ===== */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id.length>1){
      e.preventDefault();
      document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
      nav.classList.remove('open');
    }
  });
});

/* ===== EmailJS (formulaire) =====
   1) Crée un compte emailjs.com
   2) Récupère PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID
   3) Dans ton template, ajoute les variables : from_name, from_email, company_name, message
   4) Mets emresemerci25@gmail.com comme destinataire dans le template
*/
emailjs.init(0eZWzdJul5uTBiqDr); // <- remplace par ta clé publique

const form = document.getElementById('contact-form');
const formMsg = document.getElementById('form-message');

form.addEventListener('submit', async (e)=>{
  e.preventDefault();
  formMsg.textContent = "Envoi en cours...";
  formMsg.style.color = "#374151";

  const templateParams = {
    from_name: document.getElementById('name').value,
    from_email: document.getElementById('email').value,
    company_name: document.getElementById('company').value,
    message: document.getElementById('message').value
  };

  try{
    await emailjs.send(service_sokw6ol,template_jtqrf5s, templateParams);
    formMsg.textContent = "Merci ! Votre message a été envoyé.";
    formMsg.style.color = "green";
    form.reset();
  }catch(err){
    formMsg.textContent = "Erreur d’envoi. Vérifie tes identifiants EmailJS.";
    formMsg.style.color = "crimson";
    console.error(err);
  }
});

