(function(){
  'use strict';

  function applyContent(c){
    const set=(id,val,html)=>{const el=document.getElementById(id);if(!el)return;html?el.innerHTML=val||'':el.textContent=val||'';};
    set('site-name',    c.site_name);
    set('site-tagline', c.site_tagline);
    set('hero-price',   c.hero_price);
    set('hero-desc',    (c.hero_desc||'').replace(/\n/g,'<br/>'), true);
    set('about-title',  (c.about_title||'').replace(/\n/g,'<br/>'), true);
    set('about-desc',   c.about_desc);
    set('hours',        c.hours, true);
    set('hours-note',   c.hours_note);
    set('pricing',      c.pricing, true);
    set('pricing-note', c.pricing_note);
    set('booking',      c.booking, true);
    set('booking-note', c.booking_note);
    set('phone',        c.phone);
    set('line-id',      c.line_id);
    set('address',      c.address, true);
    set('mrt',          c.mrt);
    set('bus',          c.bus);
    set('contact-title',c.contact_title);
    set('contact-sub',  c.contact_sub);
    set('footer-copy',  c.footer_copy);
    if(c.stat_years){const el=document.getElementById('stat-years');if(el)el.innerHTML=c.stat_years+'<span class="stat-plus">年</span>';}
    if(c.stat_price){const el=document.getElementById('stat-price');if(el)el.innerHTML=c.stat_price+'<span class="stat-unit">元</span>';}
    document.title = c.site_name || document.title;

    // Owner photo
    const photo = document.getElementById('owner-photo');
    if(photo && c.owner_photo) photo.src = c.owner_photo;

    // Dynamic links
    const phone=(c.phone||'').replace(/-/g,'');
    const lineId=c.line_id||'';
    ['phone-link'].forEach(id=>{const el=document.getElementById(id);if(el)el.href='tel:'+phone;});
    ['line-link','line-btn'].forEach(id=>{const el=document.getElementById(id);if(el)el.href='https://line.me/ti/p/'+lineId;});
    const telBtn=document.getElementById('tel-btn');if(telBtn)telBtn.href='tel:'+phone;

    // Announcements
    const annSec=document.getElementById('announcements');
    const annList=document.getElementById('announce-list');
    if(annList && Array.isArray(c.announcements) && c.announcements.length>0){
      annList.innerHTML=c.announcements.map(a=>`<div class="announce-item"><span class="announce-icon">${a.icon||'📢'}</span><span>${a.text||''}</span></div>`).join('');
      if(annSec)annSec.style.display='';
    } else if(annSec){ annSec.style.display='none'; }

    // Services
    const svcSec=document.getElementById('services');
    const grid=document.getElementById('services-grid');
    if(grid && Array.isArray(c.services) && c.services.length>0){
      grid.innerHTML=c.services.map(s=>`<div class="service-card reveal"><span class="service-icon">${s.icon||'✂️'}</span><h3 class="service-name">${s.name||''}</h3><p class="service-price">NT$${s.price||''}</p><p class="service-note">${s.note||''}</p></div>`).join('');
      if(svcSec)svcSec.style.display='';
    } else if(svcSec){ svcSec.style.display='none'; }
  }

  // Scroll reveal
  function setupReveal(){
    const targets=document.querySelectorAll('.reveal, .about-photo-wrap, .about-text, .location-inner > *');
    targets.forEach((el,i)=>{
      if(!el.classList.contains('reveal'))el.classList.add('reveal');
      el.style.transitionDelay=(i*0.07)+'s';
    });
    const obs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});
    },{threshold:0.12});
    targets.forEach(el=>obs.observe(el));
  }

  // Mobile hamburger
  window.closeMobileMenu=function(){
    document.getElementById('mobile-menu').classList.remove('open');
  };
  document.addEventListener('DOMContentLoaded',()=>{
    const burger=document.getElementById('nav-hamburger');
    const menu=document.getElementById('mobile-menu');
    if(burger&&menu) burger.addEventListener('click',()=>menu.classList.toggle('open'));

    if(window.SITE_CONTENT) applyContent(window.SITE_CONTENT);
    setupReveal();
  });
})();
