/*=========================================
      MOH CAFÉ | script.js
      PART 1
      Navbar • Mobile Menu • Sticky Header
      Smooth Scroll • Active Navigation
=========================================*/

"use strict";

/*=========================================
            SELECTORS
=========================================*/

const header = document.querySelector("header");

const menuBtn = document.getElementById("menu-btn");

const navLinks = document.querySelector(".nav-links");

const navItems = document.querySelectorAll(".nav-links a");

const sections = document.querySelectorAll("section");

/*=========================================
        MOBILE MENU
=========================================*/

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

document.body.classList.toggle("nav-open");

const icon = menuBtn.querySelector("i");

if(icon){

icon.classList.toggle("fa-bars");

icon.classList.toggle("fa-times");

}

});

}

/*=========================================
      CLOSE MENU AFTER CLICK
=========================================*/

navItems.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

document.body.classList.remove("nav-open");

const icon=menuBtn.querySelector("i");

if(icon){

icon.classList.remove("fa-times");

icon.classList.add("fa-bars");

}

});

});

/*=========================================
        STICKY NAVBAR
=========================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});

/*=========================================
      ACTIVE NAVIGATION
=========================================*/

function activeMenu(){

let current="";

sections.forEach(section=>{

const top=section.offsetTop-130;

const height=section.offsetHeight;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

}

window.addEventListener("scroll",activeMenu);

/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

window.scrollTo({

top:target.offsetTop-70,

behavior:"smooth"

});

}

});

});

/*=========================================
        HERO BUTTON EFFECT
=========================================*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px)";

});

});

/*=========================================
        MENU CARD HOVER
=========================================*/

document.querySelectorAll(".menu-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

/*=========================================
      SPECIAL CARD EFFECT
=========================================*/

document.querySelectorAll(".special-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="scale(1)";

});

});

/*=========================================
      CONTACT CARD EFFECT
=========================================*/

document.querySelectorAll(".contact-box").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

/*=========================================
        IMAGE ZOOM
=========================================*/

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transition=".4s";

});

});

/*=========================================
        LOGO CLICK
=========================================*/

const logo=document.querySelector(".logo");

if(logo){

logo.addEventListener("click",(e)=>{

e.preventDefault();

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*=========================================
      NAVBAR SHADOW
=========================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>150){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.12)";

}else{

header.style.boxShadow="none";

}

});

/*=========================================
      PREVENT EMPTY LINKS
=========================================*/

document.querySelectorAll('a[href="#"]').forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

});

});

/*=========================================
      PAGE LOADED
=========================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

console.log("☕ MOH CAFÉ Website Loaded Successfully");

});

/*=========================================
      END OF PART 1
=========================================*/

/*
Next:
Part 2

✓ Scroll Reveal Animation
✓ Counter Animation
✓ Gallery Lightbox
✓ Back To Top Button
✓ Image Animation
✓ Scroll Progress Bar
*/
/*=========================================
      MOH CAFÉ | script.js
      PART 2
      Scroll Reveal
      Counter Animation
      Gallery Lightbox
      Back To Top
      Scroll Progress Bar
=========================================*/

"use strict";

/*=========================================
        SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(

".heading,.hero-content,.hero-image,.about-image,.about-content,.why-box,.menu-card,.special-card,.gallery img,.review-card,.reservation,.contact-box,.newsletter,.footer-col"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.15

}

);

revealElements.forEach(el=>{

el.classList.add("fade-up");

revealObserver.observe(el);

});

/*=========================================
        COUNTER ANIMATION
=========================================*/

const counters = document.querySelectorAll(".about-stats h3");

const speed = 80;

const counterObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = parseInt(counter.innerText);

if(isNaN(target)) return;

let count = 0;

const update = ()=>{

count += Math.ceil(target / speed);

if(count >= target){

counter.innerText = target + "+";

}else{

counter.innerText = count;

requestAnimationFrame(update);

}

};

update();

counterObserver.unobserve(counter);

}

});

},

{threshold:.5}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*=========================================
        BACK TO TOP
=========================================*/

const topBtn = document.getElementById("topBtn");
const whatsappBtn = document.querySelector(".whatsapp");
const contactBtn = document.querySelector(".float-contact");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

if(topBtn) topBtn.style.display="flex";
if(whatsappBtn) whatsappBtn.style.display="flex";
if(contactBtn) contactBtn.style.display="flex";

}else{

if(topBtn) topBtn.style.display="none";
if(whatsappBtn) whatsappBtn.style.display="none";
if(contactBtn) contactBtn.style.display="none";

}

});

if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*=========================================
        GALLERY LIGHTBOX
=========================================*/

const galleryImages = document.querySelectorAll(".gallery-container img");

const lightbox = document.createElement("div");

lightbox.id="lightbox";

lightbox.style.position="fixed";

lightbox.style.left="0";

lightbox.style.top="0";

lightbox.style.width="100%";

lightbox.style.height="100%";

lightbox.style.background="rgba(0,0,0,.9)";

lightbox.style.display="none";

lightbox.style.justifyContent="center";

lightbox.style.alignItems="center";

lightbox.style.zIndex="9999";

document.body.appendChild(lightbox);

const lightboxImg = document.createElement("img");

lightboxImg.style.maxWidth="90%";

lightboxImg.style.maxHeight="90%";

lightboxImg.style.borderRadius="15px";

lightbox.appendChild(lightboxImg);

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});

/*=========================================
      SCROLL PROGRESS BAR
=========================================*/

const progress = document.createElement("div");

progress.style.position="fixed";

progress.style.top="0";

progress.style.left="0";

progress.style.height="5px";

progress.style.background="#6F3B16";

progress.style.width="0%";

progress.style.zIndex="99999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const percent=(scrollTop/height)*100;

progress.style.width=percent+"%";

});

/*=========================================
        IMAGE PARALLAX
=========================================*/

window.addEventListener("scroll",()=>{

const heroImg=document.querySelector(".hero-image img");

if(heroImg){

heroImg.style.transform=`translateY(${window.scrollY*0.08}px)`;

}

});

/*=========================================
        MENU IMAGE ZOOM
=========================================*/

document.querySelectorAll(".menu-card img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.1)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

/*=========================================
      GALLERY HOVER EFFECT
=========================================*/

galleryImages.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.filter="brightness(.85)";

});

img.addEventListener("mouseleave",()=>{

img.style.filter="brightness(1)";

});

});

/*=========================================
      BUTTON RIPPLE EFFECT
=========================================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=circle.style.height=diameter+"px";

circle.style.position="absolute";

circle.style.borderRadius="50%";

circle.style.background="rgba(255,255,255,.4)";

circle.style.left=e.offsetX-diameter/2+"px";

circle.style.top=e.offsetY-diameter/2+"px";

circle.style.pointerEvents="none";

circle.style.animation="ripple .6s linear";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

/*=========================================
      RIPPLE STYLE
=========================================*/

const rippleStyle=document.createElement("style");

rippleStyle.innerHTML=`

.btn{

position:relative;

overflow:hidden;

}

@keyframes ripple{

from{

transform:scale(0);

opacity:1;

}

to{

transform:scale(4);

opacity:0;

}

}

`;

document.head.appendChild(rippleStyle);

/*=========================================
      END OF PART 2
=========================================*/

/*
Next:
Part 3

✓ Loading Screen
✓ Testimonial Auto Slider
✓ Reservation Form Validation
✓ Newsletter Validation
✓ Typing Effect
✓ Dark Mode Toggle
✓ Utility Functions
*/
/*=========================================
      MOH CAFÉ | script.js
      PART 3
      Loading Screen
      Testimonial Slider
      Reservation Validation
      Newsletter Validation
      Typing Effect
      Dark Mode
=========================================*/

"use strict";

/*=========================================
        LOADING SCREEN
=========================================*/

window.addEventListener("load",()=>{

const loader=document.createElement("div");

loader.id="loader";

loader.innerHTML=`

<div class="loader-box">

<i class="fas fa-mug-hot"></i>

<h2>MOH CAFÉ</h2>

<p>Brewing Happiness...</p>

</div>

`;

document.body.appendChild(loader);

const style=document.createElement("style");

style.innerHTML=`

#loader{

position:fixed;

top:0;

left:0;

width:100%;

height:100%;

background:#faf7f2;

display:flex;

justify-content:center;

align-items:center;

z-index:999999;

transition:.8s;

}

.loader-box{

text-align:center;

}

.loader-box i{

font-size:70px;

color:#6F3B16;

animation:spin 2s linear infinite;

}

.loader-box h2{

margin-top:15px;

font-family:'Playfair Display',serif;

color:#6F3B16;

}

.loader-box p{

margin-top:8px;

color:#777;

}

@keyframes spin{

0%{transform:rotate(0)}

100%{transform:rotate(360deg)}

}

`;

document.head.appendChild(style);

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},700);

},1800);

});

/*=========================================
      TESTIMONIAL ADAPTIVE SLIDER / GRID
=========================================*/

const reviewContainer = document.querySelector(".review-container");
const reviewCards = document.querySelectorAll(".review-card");
let reviewInterval = null;
let currentReviewIdx = 0;

function initReviewSlider() {
  const existingDots = document.querySelector(".slider-dots");
  if (existingDots) existingDots.remove();
  
  if (reviewInterval) {
    clearInterval(reviewInterval);
    reviewInterval = null;
  }
  
  if (window.innerWidth >= 992) {
    reviewCards.forEach(card => {
      card.style.display = "block";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    });
  } else {
    const dotsContainer = document.createElement("div");
    dotsContainer.className = "slider-dots";
    
    reviewCards.forEach((card, idx) => {
      dotsContainer.innerHTML += `<span class="dot ${idx === 0 ? "active" : ""}" data-idx="${idx}"></span>`;
    });
    
    reviewContainer.after(dotsContainer);
    
    const dots = dotsContainer.querySelectorAll(".dot");
    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        const targetIdx = parseInt(dot.getAttribute("data-idx"));
        showReview(targetIdx);
      });
    });
    
    showReview(0);
    reviewInterval = setInterval(() => {
      currentReviewIdx = (currentReviewIdx + 1) % reviewCards.length;
      showReview(currentReviewIdx);
    }, 4000);
  }
}

function showReview(idx) {
  currentReviewIdx = idx;
  reviewCards.forEach((card, i) => {
    if (i === idx) {
      card.style.display = "block";
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 50);
    } else {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.display = "none";
    }
  });
  
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === idx);
  });
}

if (reviewCards.length) {
  initReviewSlider();
  window.addEventListener("resize", () => {
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(initReviewSlider, 250);
  });
}

/*=========================================
      RESERVATION FORM
=========================================*/

const reservation=document.querySelector(".reservation-form form");

if(reservation){

reservation.addEventListener("submit",(e)=>{

e.preventDefault();

const inputs=reservation.querySelectorAll("input,select,textarea");

let valid=true;

inputs.forEach(input=>{

if(input.required && input.value===""){

valid=false;

input.style.borderColor="red";

}else{

input.style.borderColor="var(--input-border)";

}

});

if(valid){

const name = reservation.querySelector('input[placeholder="Full Name"]').value;
const phone = reservation.querySelector('input[placeholder="Phone Number"]').value;
const date = reservation.querySelector('input[type="date"]').value;
const time = reservation.querySelector('select').value;
const requests = reservation.querySelector('textarea').value;

const newReservation = {
  id: 'res_' + Date.now(),
  name,
  phone,
  date,
  time,
  requests,
  status: 'Pending',
  createdAt: new Date().toISOString()
};

const reservationsList = JSON.parse(localStorage.getItem('moh_reservations') || '[]');
reservationsList.push(newReservation);
localStorage.setItem('moh_reservations', JSON.stringify(reservationsList));

alert("✅ Thank you! Your reservation request has been received.");

reservation.reset();

}else{

alert("Please complete all required fields.");

}

});

}

/*=========================================
      NEWSLETTER
=========================================*/

const newsletter=document.querySelector(".newsletter form");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

const email=newsletter.querySelector("input");

const pattern=/^[^ ]+@[^ ]+\.[a-z]{2,}$/;

if(pattern.test(email.value)){

const newSubscriber = {
  id: 'sub_' + Date.now(),
  email: email.value,
  createdAt: new Date().toISOString()
};

const subscribersList = JSON.parse(localStorage.getItem('moh_subscribers') || '[]');
subscribersList.push(newSubscriber);
localStorage.setItem('moh_subscribers', JSON.stringify(subscribersList));

alert("🎉 Successfully subscribed!");

newsletter.reset();

}else{

alert("Please enter a valid email.");

}

});

}

/*=========================================
      TYPING EFFECT
=========================================*/

const heading=document.querySelector(".hero h1");

if(heading){

const text=heading.innerText;

heading.innerHTML="";

let i=0;

function typing(){

if(i<text.length){

heading.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,45);

}

}

typing();

}

/*=========================================
      DARK MODE (PERSISTENT & CLEANED UP)
=========================================*/

const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  });
}

/*=========================================
      SCROLL ANIMATIONS (INTERSECTION OBSERVER)
=========================================*/

const animElements = document.querySelectorAll(".fade-up");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });
  
  animElements.forEach(el => observer.observe(el));
} else {
  animElements.forEach(el => el.classList.add("show"));
}

/*=========================================
      MENU CATEGORY FILTER
=========================================*/

const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");
if (filterButtons.length && menuCards.length) {
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const filter = btn.getAttribute("data-filter");
      
      menuCards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.classList.remove("hidden-filter");
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.8)";
          setTimeout(() => {
            card.classList.add("hidden-filter");
          }, 400);
        }
      });
    });
  });
}

/*=========================================
      STAFF ADMIN PORTAL LOGIC
=========================================*/
const staffLink = document.getElementById("staff-portal-link");
const adminModal = document.getElementById("admin-modal");
const adminClose = document.getElementById("admin-close");
const passcodeSubmit = document.getElementById("admin-submit-pass");
const passcodeField = document.getElementById("admin-passcode");
const authSection = document.getElementById("admin-auth");
const dashboardSection = document.getElementById("admin-dashboard");

const tabBtns = document.querySelectorAll(".admin-tab-btn");
const tabContents = document.querySelectorAll(".admin-tab-content");

if (staffLink && adminModal && adminClose) {
  staffLink.addEventListener("click", (e) => {
    e.preventDefault();
    adminModal.classList.add("show");
    document.body.style.overflow = "hidden";
    
    if (sessionStorage.getItem("admin_authenticated") === "true") {
      authSection.style.display = "none";
      dashboardSection.style.display = "block";
      renderAdminDashboard();
    } else {
      authSection.style.display = "flex";
      dashboardSection.style.display = "none";
      passcodeField.value = "";
      passcodeField.focus();
    }
  });
  
  adminClose.addEventListener("click", () => {
    adminModal.classList.remove("show");
    document.body.style.overflow = "";
  });
  
  adminModal.addEventListener("click", (e) => {
    if (e.target === adminModal) {
      adminModal.classList.remove("show");
      document.body.style.overflow = "";
    }
  });
  
  const verifyPasscode = () => {
    if (passcodeField.value === "1410") {
      sessionStorage.setItem("admin_authenticated", "true");
      authSection.style.display = "none";
      dashboardSection.style.display = "block";
      renderAdminDashboard();
    } else {
      alert("❌ Invalid passcode. Please try again.");
      passcodeField.value = "";
      passcodeField.focus();
    }
  };
  
  passcodeSubmit.addEventListener("click", verifyPasscode);
  passcodeField.addEventListener("keypress", (e) => {
    if (e.key === "Enter") verifyPasscode();
  });
  
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));
      
      btn.classList.add("active");
      const targetTab = btn.getAttribute("data-tab");
      document.getElementById(`tab-${targetTab}`).classList.add("active");
    });
  });
  
  const resSearchInput = document.getElementById("res-search");
  if (resSearchInput) {
    resSearchInput.addEventListener("input", () => {
      renderReservationsTable(resSearchInput.value);
    });
  }
  
  const newsSearchInput = document.getElementById("news-search");
  if (newsSearchInput) {
    newsSearchInput.addEventListener("input", () => {
      renderSubscribersTable(newsSearchInput.value);
    });
  }
  
  document.getElementById("btn-demo-data").addEventListener("click", () => {
    loadDemoData();
  });
  
  document.getElementById("btn-clear-res").addEventListener("click", () => {
    if (confirm("⚠️ Are you sure you want to clear ALL reservations? This cannot be undone.")) {
      localStorage.removeItem("moh_reservations");
      renderReservationsTable();
    }
  });
  
  document.getElementById("btn-clear-news").addEventListener("click", () => {
    if (confirm("⚠️ Are you sure you want to clear ALL email subscribers? This cannot be undone.")) {
      localStorage.removeItem("moh_subscribers");
      renderSubscribersTable();
    }
  });
  
  document.getElementById("btn-export-res").addEventListener("click", () => {
    exportReservationsCSV();
  });
  
  document.getElementById("btn-export-news").addEventListener("click", () => {
    exportSubscribersCSV();
  });
}

function renderAdminDashboard() {
  renderReservationsTable();
  renderSubscribersTable();
}

function renderReservationsTable(query = "") {
  const tbody = document.getElementById("res-table-body");
  if (!tbody) return;
  
  const reservationsList = JSON.parse(localStorage.getItem("moh_reservations") || "[]");
  tbody.innerHTML = "";
  
  const filteredList = reservationsList.filter(res => {
    const str = `${res.name} ${res.phone} ${res.date} ${res.time} ${res.requests}`.toLowerCase();
    return str.includes(query.toLowerCase());
  });
  
  if (filteredList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center" style="padding: 30px; color:#888;">No reservations found.</td></tr>`;
    return;
  }
  
  filteredList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  
  filteredList.forEach(res => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${escapeHtml(res.name)}</strong></td>
      <td>${escapeHtml(res.phone)}</td>
      <td>${escapeHtml(res.date)}</td>
      <td>${escapeHtml(res.time)}</td>
      <td><span title="${escapeHtml(res.requests || '')}">${escapeHtml(truncateString(res.requests || '-', 25))}</span></td>
      <td>
        <select class="status-select" data-id="${res.id}">
          <option value="Pending" ${res.status === "Pending" ? "selected" : ""}>Pending</option>
          <option value="Confirmed" ${res.status === "Confirmed" ? "selected" : ""}>Confirmed</option>
          <option value="Cancelled" ${res.status === "Cancelled" ? "selected" : ""}>Cancelled</option>
        </select>
      </td>
      <td>
        <button class="admin-btn danger delete-res-btn" data-id="${res.id}" style="padding: 5px 12px; font-size:12px;">Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
  
  tbody.querySelectorAll(".status-select").forEach(select => {
    select.addEventListener("change", (e) => {
      updateReservationStatus(e.target.getAttribute("data-id"), e.target.value);
    });
  });
  
  tbody.querySelectorAll(".delete-res-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      if (confirm("Are you sure you want to delete this reservation?")) {
        deleteReservation(e.target.getAttribute("data-id"));
      }
    });
  });
}

function renderSubscribersTable(query = "") {
  const tbody = document.getElementById("news-table-body");
  if (!tbody) return;
  
  const subscribersList = JSON.parse(localStorage.getItem("moh_subscribers") || "[]");
  tbody.innerHTML = "";
  
  const filteredList = subscribersList.filter(sub => {
    return sub.email.toLowerCase().includes(query.toLowerCase());
  });
  
  if (filteredList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3" class="text-center" style="padding: 30px; color:#888;">No subscribers found.</td></tr>`;
    return;
  }
  
  filteredList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  
  filteredList.forEach(sub => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${escapeHtml(sub.email)}</strong></td>
      <td>${new Date(sub.createdAt).toLocaleDateString()} ${new Date(sub.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</td>
      <td>
        <button class="admin-btn danger delete-sub-btn" data-id="${sub.id}" style="padding: 5px 12px; font-size:12px;">Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
  
  tbody.querySelectorAll(".delete-sub-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      if (confirm("Are you sure you want to delete this subscriber?")) {
        deleteSubscriber(e.target.getAttribute("data-id"));
      }
    });
  });
}

function updateReservationStatus(id, newStatus) {
  const list = JSON.parse(localStorage.getItem("moh_reservations") || "[]");
  const updated = list.map(res => res.id === id ? {...res, status: newStatus} : res);
  localStorage.setItem("moh_reservations", JSON.stringify(updated));
  renderReservationsTable(document.getElementById("res-search").value);
}

function deleteReservation(id) {
  const list = JSON.parse(localStorage.getItem("moh_reservations") || "[]");
  const filtered = list.filter(res => res.id !== id);
  localStorage.setItem("moh_reservations", JSON.stringify(filtered));
  renderReservationsTable(document.getElementById("res-search").value);
}

function deleteSubscriber(id) {
  const list = JSON.parse(localStorage.getItem("moh_subscribers") || "[]");
  const filtered = list.filter(sub => sub.id !== id);
  localStorage.setItem("moh_subscribers", JSON.stringify(filtered));
  renderSubscribersTable(document.getElementById("news-search").value);
}

function loadDemoData() {
  const demoRes = [
    {
      id: "demo_1",
      name: "Manuel Rodrigues",
      phone: "305-555-0199",
      date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      time: "10:00 AM",
      requests: "Prefers table near the window. Craves hot pastéis de nata!",
      status: "Confirmed",
      createdAt: new Date(Date.now() - 3600000 * 2).toISOString()
    },
    {
      id: "demo_2",
      name: "Sarah Jenkins",
      phone: "954-555-0142",
      date: new Date(Date.now() + 172800000).toISOString().split('T')[0],
      time: "12:00 PM",
      requests: "Celebration: Mum's Birthday",
      status: "Pending",
      createdAt: new Date(Date.now() - 3600000 * 12).toISOString()
    },
    {
      id: "demo_3",
      name: "Joaquim Santos",
      phone: "786-555-0177",
      date: new Date().toISOString().split('T')[0],
      time: "1:00 PM",
      requests: "Would like to try the Bacalhau à Brás",
      status: "Confirmed",
      createdAt: new Date(Date.now() - 3600000 * 24).toISOString()
    }
  ];
  
  const demoSubs = [
    { id: "demo_sub_1", email: "manuel.rod@gmail.com", createdAt: new Date(Date.now() - 86400000 * 3).toISOString() },
    { id: "demo_sub_2", email: "sjenkins@yahoo.com", createdAt: new Date(Date.now() - 86400000 * 2).toISOString() },
    { id: "demo_sub_3", email: "p.gomez@hotmail.com", createdAt: new Date(Date.now() - 3600000 * 5).toISOString() }
  ];
  
  localStorage.setItem("moh_reservations", JSON.stringify(demoRes));
  localStorage.setItem("moh_subscribers", JSON.stringify(demoSubs));
  renderAdminDashboard();
  alert("✅ Demo data loaded! You can now test dashboard actions, filters, status updates, and CSV downloads.");
}

function exportReservationsCSV() {
  const list = JSON.parse(localStorage.getItem("moh_reservations") || "[]");
  if (!list.length) {
    alert("No reservations to export.");
    return;
  }
  
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "ID,Full Name,Phone Number,Reservation Date,Reservation Time,Special Requests,Status,Created At\n";
  
  list.forEach(res => {
    const row = [
      res.id,
      `"${res.name.replace(/"/g, '""')}"`,
      res.phone,
      res.date,
      res.time,
      `"${(res.requests || '').replace(/"/g, '""')}"`,
      res.status,
      res.createdAt
    ].join(",");
    csvContent += row + "\n";
  });
  
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "moh_cafe_reservations.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function exportSubscribersCSV() {
  const list = JSON.parse(localStorage.getItem("moh_subscribers") || "[]");
  if (!list.length) {
    alert("No email subscribers to export.");
    return;
  }
  
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "ID,Email Address,Subscription Date\n";
  
  list.forEach(sub => {
    const row = [
      sub.id,
      `"${sub.email.replace(/"/g, '""')}"`,
      sub.createdAt
    ].join(",");
    csvContent += row + "\n";
  });
  
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "moh_cafe_subscribers.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function truncateString(str, num) {
  if (!str) return '';
  if (str.length <= num) return str;
  return str.slice(0, num) + '...';
}

/*=========================================
      CURRENT YEAR
=========================================*/

const year=document.querySelector(".copyright");

if(year){

year.innerHTML=year.innerHTML.replace("2026",new Date().getFullYear());

}

/*=========================================
      FLOATING BUTTON ANIMATION
=========================================*/

const whatsapp=document.querySelector(".whatsapp");

if(whatsapp){

setInterval(()=>{

whatsapp.animate([

{transform:"scale(1)"},

{transform:"scale(1.12)"},

{transform:"scale(1)"}

],{

duration:1000

});

},2500);

}

/*=========================================
      NAVBAR HIDE ON SCROLL DOWN
=========================================*/

let lastScroll=0;

window.addEventListener("scroll",()=>{

const current=window.pageYOffset;

// Toggle sticky layout
if(current>50){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

header.classList.remove("nav-hidden");

lastScroll=current;

});

/*=========================================
      PRELOAD IMAGES
=========================================*/

document.querySelectorAll("img").forEach(img=>{

const image=new Image();

image.src=img.src;

});

/*=========================================
      CONSOLE MESSAGE
=========================================*/

console.clear();

console.log("%c☕ MOH CAFÉ","font-size:28px;color:#6F3B16;font-weight:bold");

console.log("%cWebsite Designed for Client Presentation","font-size:16px;color:#C89B63;");

/*=========================================
      SCROLL ANIMATION (INTERSECTION OBSERVER)
=========================================*/

function initScrollAnimations() {
  // Select containers whose child elements have fade-up and should load one-by-one
  const containersToStagger = [
    '.hero-overlay',
    '.featured-container',
    '.about',
    '.why-container',
    '.special-container',
    '.contact-container',
    '.review-container'
  ];

  containersToStagger.forEach(containerSelector => {
    document.querySelectorAll(containerSelector).forEach(container => {
      const children = container.children;
      let delayIndex = 0;
      Array.from(children).forEach(child => {
        if (child.classList.contains('fade-up')) {
          child.style.transitionDelay = `${(delayIndex + 1) * 0.15}s`;
          delayIndex++;
        }
      });
    });
  });

  const fadeUpElements = document.querySelectorAll(".fade-up");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.08
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeUpElements.forEach(el => {
    observer.observe(el);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initScrollAnimations);
} else {
  initScrollAnimations();
}

/*=========================================
      END OF SCRIPT
=========================================*/