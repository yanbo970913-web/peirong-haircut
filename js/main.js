(function () {
  'use strict';

  function applyContent(c) {
    const set = (id, val, isHTML) => {
      const el = document.getElementById(id);
      if (!el) return;
      if (isHTML) el.innerHTML = val || '';
      else el.textContent = val || '';
    };

    set('site-name',    c.site_name, false);
    set('site-tagline', c.site_tagline, false);
    set('hero-price',   c.hero_price, false);
    set('hero-desc',    (c.hero_desc || '').replace(/\n/g, '<br/>'), true);
    set('hours',        c.hours, true);
    set('hours-note',   c.hours_note, false);
    set('pricing',      c.pricing, true);
    set('pricing-note', c.pricing_note, false);
    set('booking',      c.booking, true);
    set('booking-note', c.booking_note, false);
    set('phone',        c.phone, false);
    set('line-id',      c.line_id, false);
    set('address',      c.address, true);
    set('mrt',          c.mrt, false);
    set('bus',          c.bus, false);
    set('contact-title',c.contact_title, false);
    set('contact-sub',  c.contact_sub, false);
    set('footer-copy',  c.footer_copy, false);
    document.title = c.site_name || document.title;

    // Dynamic links
    const phone = (c.phone || '').replace(/-/g, '');
    const lineId = c.line_id || '';
    const phoneLink = document.getElementById('phone-link');
    const lineLink  = document.getElementById('line-link');
    const linBtn    = document.getElementById('line-btn');
    const telBtn    = document.getElementById('tel-btn');
    if (phoneLink) phoneLink.href = 'tel:' + phone;
    if (lineLink)  lineLink.href  = 'https://line.me/ti/p/' + lineId;
    if (linBtn)    linBtn.href    = 'https://line.me/ti/p/' + lineId;
    if (telBtn)    telBtn.href    = 'tel:' + phone;

    // Announcements
    const list = document.getElementById('announce-list');
    if (list && Array.isArray(c.announcements) && c.announcements.length > 0) {
      list.innerHTML = c.announcements.map(a =>
        `<div class="announce-item"><span class="announce-icon">${a.icon || '📢'}</span><span class="announce-text">${a.text || ''}</span></div>`
      ).join('');
      list.closest('section').style.display = '';
    } else if (list) {
      list.closest('section').style.display = 'none';
    }

    // Services
    const grid = document.getElementById('services-grid');
    if (grid && Array.isArray(c.services) && c.services.length > 0) {
      grid.innerHTML = c.services.map(s =>
        `<div class="service-card">
          <span class="service-icon">${s.icon || '✂️'}</span>
          <h3 class="service-name">${s.name || ''}</h3>
          <p class="service-price">NT$${s.price || ''}</p>
          <p class="service-note">${s.note || ''}</p>
        </div>`
      ).join('');
      grid.closest('section').style.display = '';
    } else if (grid) {
      grid.closest('section').style.display = 'none';
    }
  }

  // Scroll reveal
  function setupReveal() {
    const targets = document.querySelectorAll(
      '.info-card, .service-card, .location-inner > *, .contact-card, .section-label, .announce-item'
    );
    targets.forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = (i * 0.06) + 's';
    });
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    targets.forEach(el => obs.observe(el));
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (window.SITE_CONTENT) applyContent(window.SITE_CONTENT);
    setupReveal();
  });
})();
