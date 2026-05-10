/* ═══════════════════════════════════════════
   VoyageLuxe — script.js
═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── NAVBAR ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  /* ── HAMBURGER ── */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (hamburger) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
  }

  /* ── HERO SLIDESHOW ── */
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('slideDots');
  let currentSlide = 0;
  let slideInterval;

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    document.querySelectorAll('.dot')[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    document.querySelectorAll('.dot')[currentSlide].classList.add('active');
  }

  function startSlider() {
    slideInterval = setInterval(() => goToSlide(currentSlide + 1), 3000);
  }

  startSlider();

  // Pause on hover
  const hero = document.querySelector('.hero');
  hero.addEventListener('mouseenter', () => clearInterval(slideInterval));
  hero.addEventListener('mouseleave', startSlider);

  /* ── DESTINATION CARDS ── */
  const indiaGrid = document.getElementById('indiaGrid');
  const intlGrid = document.getElementById('intlGrid');

  function renderDestCards(list, container) {
    container.innerHTML = list.map(dest => `
      <div class="dest-card" data-name="${dest.name}">
        <img src="${dest.image}" alt="${dest.name}" loading="lazy"
             onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80'">
        <span class="dest-badge-pill">${dest.badge}</span>
        <div class="dest-ov">
          <div>
            <h3>${dest.emoji} ${dest.name}</h3>
            <p>${dest.tagline}</p>
            <span class="dest-explore">Explore destination ↗</span>
          </div>
        </div>
      </div>
    `).join('');

    // Click to open modal
    container.querySelectorAll('.dest-card').forEach(card => {
      card.addEventListener('click', () => {
        const name = card.dataset.name;
        const dest = [...destinations.india, ...destinations.international].find(d => d.name === name);
        if (dest) openModal(dest);
      });
    });
  }

  if (indiaGrid) renderDestCards(destinations.india, indiaGrid);
  if (intlGrid) renderDestCards(destinations.international, intlGrid);

  /* ── DESTINATION TABS ── */
  document.querySelectorAll('.dest-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.dest-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      if (tab.dataset.tab === 'india') {
        indiaGrid.style.display = '';
        intlGrid.style.display = 'none';
      } else {
        indiaGrid.style.display = 'none';
        intlGrid.style.display = '';
      }
    });
  });

  /* ── DESTINATION MODAL ── */
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalHero = document.getElementById('modalHero');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');

  function openModal(dest) {
    // Hero
    modalHero.innerHTML = `
      <img src="${dest.image}" alt="${dest.name}" class="modal-hero-img"
           onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'">
      <div class="modal-hero-ov">
        <div>
          <div class="modal-hero-title">${dest.emoji} ${dest.name}</div>
          <div class="modal-hero-tagline">${dest.tagline} &nbsp;·&nbsp; Best time: ${dest.best_time}</div>
        </div>
      </div>
    `;

    // Photos
    const photoHtml = dest.photos.slice(0,6).map(p => `
      <img src="${p}" class="modal-photo" loading="lazy" alt="${dest.name}"
           onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80'">
    `).join('');

    // Attractions
    const attractHtml = dest.attractions.map(a => `<li>${a}</li>`).join('');

    // Food
    const foodHtml = dest.food.map(f => `<span class="food-tag">${f}</span>`).join('');

    // Stay types
    const stayHtml = dest.stay_types.map(s => `<li>${s}</li>`).join('');

    modalBody.innerHTML = `
      <p style="font-size:15px;color:#555;margin-bottom:22px;line-height:1.75">${dest.description}</p>

      <div class="modal-photos">${photoHtml}</div>

      <div class="modal-sections">
        <div class="modal-section">
          <h4>🗺️ Top Attractions</h4>
          <ul class="modal-list">${attractHtml}</ul>
        </div>
        <div class="modal-section">
          <h4>🏡 Types of Stays</h4>
          <ul class="modal-list">${stayHtml}</ul>
        </div>
      </div>

      <div class="modal-section" style="margin-bottom:22px">
        <h4>🍽️ Must-Try Food & Drink</h4>
        <div class="modal-food-tags">${foodHtml}</div>
      </div>

      <div class="modal-cta">
        <a href="https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%2C+I%27d+like+to+plan+a+trip+to+${encodeURIComponent(dest.name)}"
           class="modal-wa-btn" target="_blank">
          <i class="fa-brands fa-whatsapp"></i> Plan My Trip to ${dest.name}
        </a>
      </div>
    `;

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', e => { if (e.target === modalBackdrop) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* ── ENQUIRY FORM ── */
  const form = document.getElementById('enquiryForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value.trim();
      const phone = form.querySelector('[name="phone"]').value.trim();
      const dest = form.querySelector('[name="destination"]').value || 'a destination';
      const checkin = form.querySelector('[name="checkin"]').value || 'flexible dates';
      const guests = form.querySelector('[name="guests"]').value || '';
      const message = form.querySelector('[name="message"]').value.trim();

      const waText = `Hi VoyageLuxe! 👋\n\nI'd like to plan a stay.\n\n` +
        `*Name:* ${name}\n*Phone:* ${phone}\n*Destination:* ${dest}\n` +
        `*Check-in:* ${checkin}\n*Guests:* ${guests}` +
        (message ? `\n*Message:* ${message}` : '');

      window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(waText)}`, '_blank');

      const msg = document.getElementById('formMsg');
      msg.textContent = '✓ WhatsApp opened with your details! We\'ll reply within 2 hours.';
      msg.className = 'form-msg show';
      form.reset();
      setTimeout(() => msg.classList.remove('show'), 5000);
    });
  }

  /* ── SMOOTH SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  /* ── SCROLL REVEAL ── */
  const revealTargets = document.querySelectorAll('.dest-card, .step-card, .type-card, .testi-card, .about-grid, .stat-item, .contact-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  revealTargets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });

});