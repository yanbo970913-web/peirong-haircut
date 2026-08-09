/**
 * main.js — 動態載入內容 + 動畫
 */
(function () {
  'use strict';

  /* ── 注入內容 ──────────────────────────────────────────── */
  function applyContent(c) {
    const set = (id, html, isHTML = true) => {
      const el = document.getElementById(id);
      if (!el) return;
      if (isHTML) el.innerHTML = html;
      else el.textContent = html;
    };

    set('site-name',      c.site_name, false);
    set('site-tagline',   c.site_tagline, false);
    set('hero-price',     c.hero_price, false);
    set('hero-desc',      (c.hero_desc || '').replace(/\n/g, '<br/>'));
    set('hours',          c.hours);
    set('hours-note',     c.hours_note, false);
    set('pricing',        c.pricing);
    set('pricing-note',   c.pricing_note, false);
    set('booking',        c.booking);
    set('booking-note',   c.booking_note, false);
    set('phone',          c.phone, false);
    set('line-id',        c.line_id, false);
    set('address',        c.address);
    set('mrt',            c.mrt, false);
    set('bus',            c.bus, false);
    set('contact-title',  c.contact_title, false);
    set('contact-sub',    c.contact_sub, false);
    set('footer-copy',    c.footer_copy, false);

    // Update dynamic links
    const phoneLink = document.querySelector('a[href^="tel:"]');
    if (phoneLink) phoneLink.href = 'tel:' + c.phone.replace(/-/g, '');

    const lineLinks = document.querySelectorAll('a[href*="line.me"]');
    lineLinks.forEach(l => {
      l.href = 'https://line.me/ti/p/' + c.line_id;
    });

    document.title = c.site_name;
  }

  /* ── 滾動動畫 ──────────────────────────────────────────── */
  function setupReveal() {
    const targets = document.querySelectorAll(
      '.info-card, .location-inner > *, .contact-card, .section-label'
    );
    targets.forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = (i * 0.07) + 's';
    });

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });

    targets.forEach(el => obs.observe(el));
  }

  /* ── INIT ──────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    if (window.SITE_CONTENT) applyContent(window.SITE_CONTENT);
    setupReveal();
  });
})();
