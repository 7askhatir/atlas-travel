/* =============================================
   TOREST — Main Application
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // NAVBAR
  // ==========================================
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navbarToggle');
  const menu = document.getElementById('navbarMenu');

  function handleScroll() {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 60);
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.classList.toggle('active', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    menu.querySelectorAll('.navbar-link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && menu) {
      menu.classList.remove('open');
      if (toggle) toggle.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Active nav link
  const page = window.location.pathname.split('/').pop() || 'transport.html';
  document.querySelectorAll('.navbar-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'transport.html')) {
      link.classList.add('active');
    }
  });

  // ==========================================
  // SCROLL REVEAL
  // ==========================================
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ==========================================
  // SMOOTH SCROLL
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = (navbar ? navbar.offsetHeight : 72) + 8;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - offset,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==========================================
  // HERO SLIDER
  // ==========================================
  (function initSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slider-dot');
    if (!slides.length) return;

    let current = 0;
    let interval;

    function goTo(index) {
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      slides[index].classList.add('active');
      dots[index].classList.add('active');
      current = index;
    }

    function next() { goTo((current + 1) % slides.length); }

    function start() { interval = setInterval(next, 5000); }
    function stop() { clearInterval(interval); }

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const idx = parseInt(dot.dataset.slide);
        goTo(idx);
        stop();
        start();
      });
    });

    start();
  })();

  // ==========================================
  // SMART BOOKING FLOW
  // ==========================================
  window.Flow = {
    currentStep: 1,
    totalSteps: 4,

    go(step) {
      this.currentStep = step;
      document.querySelectorAll('.flow-step-content').forEach(el => {
        el.classList.remove('active');
      });
      document.querySelectorAll('.flow-step').forEach(el => {
        el.classList.remove('active', 'completed');
      });

      const content = document.querySelector(`.flow-step-content[data-step="${step}"]`);
      if (content) content.classList.add('active');

      for (let i = 1; i <= this.totalSteps; i++) {
        const s = document.querySelector(`.flow-step[data-step="${i}"]`);
        if (!s) continue;
        if (i < step) s.classList.add('completed');
        else if (i === step) s.classList.add('active');
      }

      if (step === 3) this.updateSummary();
      window.scrollTo({ top: document.getElementById('booking').offsetTop - 70, behavior: 'smooth' });
    },

    next() {
      if (this.currentStep < this.totalSteps) {
        if (this.currentStep === 2 && !this.validateForm()) return;
        this.go(this.currentStep + 1);
      }
    },

    prev() {
      if (this.currentStep > 1) this.go(this.currentStep - 1);
    },

    selectService(el, service) {
      document.querySelectorAll('.service-option').forEach(o => o.classList.remove('selected'));
      el.classList.add('selected');
    },

    selectVehicle(el, vehicle) {
      document.querySelectorAll('.vehicle-option').forEach(o => o.classList.remove('selected'));
      el.classList.add('selected');
    },

    changePassengers(delta) {
      const el = document.getElementById('passengerCount');
      let val = parseInt(el.textContent) + delta;
      val = Math.max(1, Math.min(8, val));
      el.textContent = val;
    },

    vehiclePrices: {
      standard: 45,
      suv: 70,
      minivan: 90,
      luxury: 120
    },

    validateForm() {
      let valid = true;
      const fields = [
        { id: 'pickup', name: 'Pickup location' },
        { id: 'destination', name: 'Destination' },
        { id: 'datetime', name: 'Date & time' }
      ];

      fields.forEach(f => {
        const input = document.getElementById(f.id);
        if (!input) return;
        if (!input.value.trim()) {
          input.classList.add('error');
          valid = false;
          input.addEventListener('input', function onFix() {
            this.classList.remove('error');
            this.removeEventListener('input', onFix);
          }, { once: true });
        } else {
          input.classList.remove('error');
        }
      });

      if (!valid) {
        const firstErr = document.querySelector('.form-input.error');
        if (firstErr) firstErr.focus();
      }

      return valid;
    },

    updateSummary() {
      const pickup = document.getElementById('pickup')?.value || '—';
      const dest = document.getElementById('destination')?.value || '—';
      const dt = document.getElementById('datetime')?.value || '—';
      const passengers = document.getElementById('passengerCount')?.textContent || '—';
      const vehicleEl = document.querySelector('.vehicle-option.selected');
      const vehicle = vehicleEl ? vehicleEl.querySelector('.vehicle-option-name')?.textContent || 'Standard' : 'Standard';
      const vehicleKey = vehicleEl ? vehicleEl.dataset.vehicle : 'standard';

      const price = this.vehiclePrices[vehicleKey] || 45;
      const total = price + (parseInt(passengers) > 4 ? 15 : 0);

      document.getElementById('summaryPickup').textContent = pickup;
      document.getElementById('summaryDest').textContent = dest;
      document.getElementById('summaryPassengers').textContent = passengers;

      if (dt !== '—') {
        try {
          const d = new Date(dt);
          document.getElementById('summaryDatetime').textContent = d.toLocaleString('en-GB', {
            day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
          });
        } catch (_) {
          document.getElementById('summaryDatetime').textContent = dt;
        }
      } else {
        document.getElementById('summaryDatetime').textContent = '—';
      }

      document.getElementById('summaryVehicle').textContent = vehicle;
      document.getElementById('summaryPrice').textContent = `€${total}`;
    },

    submitWhatsApp() {
      const pickup = document.getElementById('pickup')?.value || '';
      const dest = document.getElementById('destination')?.value || '';
      const dt = document.getElementById('datetime')?.value || '';
      const pax = document.getElementById('passengerCount')?.textContent || '';
      const vehicleEl = document.querySelector('.vehicle-option.selected');
      const vehicle = vehicleEl ? vehicleEl.querySelector('.vehicle-option-name')?.textContent || 'Standard' : 'Standard';

      const msg = `Hi! I'd like to book a transport:%0A` +
        `📍 Pickup: ${pickup}%0A` +
        `🏁 Destination: ${dest}%0A` +
        `📅 When: ${dt ? new Date(dt).toLocaleString('en-GB') : '—'}%0A` +
        `👥 Passengers: ${pax}%0A` +
        `🚗 Vehicle: ${vehicle}`;

      window.open(`https://wa.me/212673396332?text=${msg}`, '_blank');
    },

    showSuccess() {
      alert('✅ Thank you! We\'ll call you within 5 minutes at the number provided. You can also reach us anytime on WhatsApp.');
      this.go(1);
      document.getElementById('pickup').value = '';
      document.getElementById('destination').value = '';
      document.getElementById('passengerCount').textContent = '2';
      document.querySelectorAll('.vehicle-option').forEach((o, i) => o.classList.toggle('selected', i === 0));
    }
  };

  // ==========================================
  // ACTIVITY FILTERS
  // ==========================================
  window.Filter = {
    set(btn, filter) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('.activity-card').forEach(card => {
        if (filter === 'all') {
          card.style.display = '';
          return;
        }
        const cats = (card.dataset.category || '').toLowerCase();
        card.style.display = cats.includes(filter) ? '' : 'none';
      });
    }
  };

  // ==========================================
  // REVIEWS CAROUSEL
  // ==========================================
  window.Reviews = {
    index: 0,

    getTrack() {
      return document.getElementById('reviewsTrack');
    },

    getVisible() {
      const w = window.innerWidth;
      if (w <= 768) return 1;
      if (w <= 1024) return 2;
      return 3;
    },

    move() {
      const track = this.getTrack();
      if (!track) return;
      const cards = track.querySelectorAll('.review-card');
      if (!cards.length) return;
      const gap = 24;
      const cardW = cards[0].offsetWidth;
      const visible = this.getVisible();
      const max = Math.max(0, cards.length - visible);
      this.index = Math.max(0, Math.min(this.index, max));
      const x = -(this.index * (cardW + gap));
      track.style.transform = `translateX(${x}px)`;
    },

    next() {
      const visible = this.getVisible();
      const cards = this.getTrack()?.querySelectorAll('.review-card');
      const max = cards ? Math.max(0, cards.length - visible) : 0;
      this.index = Math.min(this.index + 1, max);
      this.move();
    },

    prev() {
      this.index = Math.max(this.index - 1, 0);
      this.move();
    }
  };

  window.addEventListener('resize', () => window.Reviews?.move());

  // ==========================================
  // FAQ ACCORDION
  // ==========================================
  window.FAQ = {
    toggle(btn) {
      const item = btn.closest('.faq-item');
      const open = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

      if (!open) item.classList.add('open');
    }
  };

  // ==========================================
  // SET DEFAULT DATETIME
  // ==========================================
  const dtInput = document.getElementById('datetime');
  if (dtInput) {
    const now = new Date();
    now.setHours(now.getHours() + 2);
    dtInput.value = now.toISOString().slice(0, 16);
    dtInput.min = now.toISOString().slice(0, 16);
  }

  // ==========================================
  // PARALLAX HERO
  // ==========================================
  const hero = document.querySelector('.hero');
  const heroSlides = document.querySelectorAll('.hero-slide');
  if (hero && heroSlides.length) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      const h = hero.offsetHeight;
      if (y <= h) {
        heroSlides.forEach(slide => {
          slide.style.transform = `translateY(${y * 0.25}px) scale(1.05)`;
        });
      }
    }, { passive: true });
  }

  // ==========================================
  // AUTO-SUGGEST (mock)
  // ==========================================
  const locations = [
    'Marrakech Airport', 'Marrakech Medina', 'Essaouira', 'Agadir',
    'Merzouga', 'Fes', 'Casablanca', 'Rabat', 'Tangier',
    'Atlas Mountains', 'Ourika Valley', 'Taghazout', 'Ouarzazate',
    'Chefchaouen', 'Meknes', 'Ifrane', 'Dakhla'
  ];

  function setupAutocomplete(inputId, suggestionsId) {
    const input = document.getElementById(inputId);
    const box = document.getElementById(suggestionsId);
    if (!input || !box) return;

    input.addEventListener('input', () => {
      const val = input.value.toLowerCase().trim();
      if (!val || val.length < 1) { box.innerHTML = ''; box.style.display = 'none'; return; }

      const matches = locations.filter(l => l.toLowerCase().includes(val)).slice(0, 5);
      if (!matches.length) { box.innerHTML = ''; box.style.display = 'none'; return; }

      box.innerHTML = matches.map(m =>
        `<div class="suggestion-item" data-value="${m}">${m}</div>`
      ).join('');
      box.style.display = 'block';

      box.querySelectorAll('.suggestion-item').forEach(el => {
        el.addEventListener('click', () => {
          input.value = el.dataset.value;
          box.innerHTML = '';
          box.style.display = 'none';
        });
      });
    });

    input.addEventListener('blur', () => {
      setTimeout(() => { box.innerHTML = ''; box.style.display = 'none'; }, 200);
    });
  }

  setupAutocomplete('pickup', 'pickupSuggestions');
  setupAutocomplete('destination', 'destSuggestions');

  // Add basic suggestion styles
  const style = document.createElement('style');
  style.textContent = `
    .suggestions {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      box-shadow: var(--shadow-md);
      z-index: 100;
      margin-top: 2px;
      overflow: hidden;
    }
    .suggestion-item {
      padding: 10px 14px;
      font-size: 0.85rem;
      cursor: pointer;
      transition: background 0.15s;
    }
    .suggestion-item:hover {
      background: var(--secondary-light);
      color: var(--secondary);
    }
    .form-group { position: relative; }
  `;
  document.head.appendChild(style);

});