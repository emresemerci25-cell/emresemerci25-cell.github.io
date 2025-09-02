/* ===== Menu mobile ===== */
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', ()=> nav.classList.toggle('open'));

/* ===== Services (avec images placeholders pour l’instant) ===== */
const SERVICES = [
  { img:"https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
    title:"Gestion Facebook Ads",
    desc:"Création, A/B tests, scaling et baisse des CPA sur vos comptes Meta.",
  },
  { img:"https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=800&auto=format&fit=crop",
    title:"Instagram Ads",
    desc:"Formats Reels, carrousels & UGC pour booster la conversion sur mobile.",
  },
  { img:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    title:"Acquisition clients",
    desc:"Stratégies multi-canales et funnels pour nourrir votre pipe commercial.",
  },
  { img:"https://images.unsplash.com/photo-1558898479-33c0057a5d12?q=80&w=800&auto=format&fit=crop",
    title:"Optimisation du ROI",
    desc:"Pilotage budget, enchères & créas pour maximiser le ROAS.",
  },
  { img:"https://images.unsplash.com/photo-1551281044-8e8d0a75d2d5?q=80&w=800&auto=format&fit=crop",
    title:"Tracking & Data",
    desc:"Pixels, conversions API, événements et dashboarding clair.",
  },
  { img:"https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=800&auto=format&fit=crop",
    title:"Reporting",
    desc:"Rapports hebdo clairs + recommandations actionnables.",
  },
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

/* ===== Testimonials slider ===== */
const TESTIMONIALS = [
  { img:"https://i.pravatar.cc/100?img=12", name:"Sophie L.", text:"« Grâce à l’équipe, +40% de CA en 8 semaines sur nos comptes Meta. »" },
  { img:"https://i.pravatar.cc/100?img=18", name:"Karim B.", text:"« Pilotage pro et hyper réactif. On voit enfin un ROAS propre. »" },
  { img:"https://i.pravatar.cc/100?img=7",  name:"Laura M.", text:"« Setup tracking nickel, les rapports sont limpides et orientés actions. »" },
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
   IMPORTANT : remplace les valeurs ci-dessous par celles de ton compte EmailJS :
   - PUBLIC_KEY
   - SERVICE_ID
   - TEMPLATE_ID
   Dans ton template EmailJS, crée les variables: from_name, from_email, company_name, message
*/
emailjs.init("0eZWzdJul5uTBiqDr"); // <- remplace par ta clé publique EmailJS

const form = document.getElementById('contact-form');
const formMsg = document.getElementById('form-message');

form.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const templateParams = {
    from_name: document.getElementById('name').value,
    from_email: document.getElementById('email').value,
    company_name: document.getElementById('company').value,
    message: document.getElementById('message').value
  };

  formMsg.textContent = "Envoi en cours...";
  formMsg.style.color = "#374151";

  try{
    await emailjs.send("service_sokw6ol","template_jtqrf5s", templateParams);
    formMsg.textContent = "Merci ! Votre message a été envoyé.";
    formMsg.style.color = "green";
    form.reset();
  }catch(err){
    formMsg.textContent = "Erreur d’envoi. Vérifie tes identifiants EmailJS.";
    formMsg.style.color = "crimson";
    console.error(err);
  }
});




