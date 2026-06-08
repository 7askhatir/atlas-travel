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
  const overlay = document.getElementById('navbarOverlay');

  function handleScroll() {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 60);
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  function closeMenu() {
    menu.classList.remove('open');
    toggle.classList.remove('active');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function openMenu() {
    menu.classList.add('open');
    toggle.classList.add('active');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.contains('open') ? closeMenu() : openMenu();
    });

    menu.querySelectorAll('.navbar-link').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  if (overlay) overlay.addEventListener('click', closeMenu);

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu?.classList.contains('open')) closeMenu();
  });

  // Active nav link on scroll
  (function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.navbar-link[href^="#"]');
    if (!sections.length || !links.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        links.forEach(l => {
          l.classList.remove('active');
          if (l.getAttribute('href') === '#' + e.target.id) l.classList.add('active');
        });
      });
    }, { threshold: 0.2, rootMargin: '-20% 0px -20% 0px' });
    sections.forEach(s => observer.observe(s));
  })();

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
      if (id === '#' || !id) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = (navbar ? navbar.offsetHeight : 76) + 10;
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
  // ==========================================
  // TRANSFER PRICES DATA - flat key-value lookup
  // Key format: "{normalized-pickup}-{normalized-destination}"
  // ==========================================
  window.transferPrices = {
    'essaouira-airport': { car: 15, minibus: 20 },
    'essaouira-marrakech': { car: 70, minibus: 80 },
    'essaouira-agadir': { car: 80, minibus: 90 },
    'essaouira-casablanca': { car: 150, minibus: 200 },
    'agadir-casablanca': { car: 250, minibus: 300 },
    'marrakech-agadir': { car: 120, minibus: 140 },
    'marrakech-casablanca': { car: 120, minibus: 150 },
    'marrakech-rabat': { car: 180, minibus: 220 },
    'marrakech-airport': { car: 15 },
    'marrakech-palmeraie': { car: 20 },
    'marrakech-ourika': { car: 70 },
    'marrakech-oukaimeden': { car: 90 },
    'marrakech-imlil': { car: 90 },
    'marrakech-ouirgane': { car: 70 },
    'marrakech-lalla-takerkoust': { car: 70 },
    'marrakech-agafay': { car: 70 },
    'marrakech-essaouira': { car: 90 },
    'marrakech-agadir-airport': { car: 120 },
    'marrakech-taghazout': { car: 150 },
    'marrakech-imsouane': { car: 160 },
    'marrakech-sidi-ifni': { car: 250 },
    'marrakech-taroudant': { car: 170 },
    'marrakech-ouzoud': { car: 120 },
    'marrakech-ouarzazate': { car: 140 },
    'marrakech-merzouga': { car: 400 },
    'marrakech-casablanca-airport': { car: 120 },
    'marrakech-fes': { car: 350 },
    'marrakech-chefchaouen': { car: 450 },
    'marrakech-tanger': { car: 450 },
    'agadir-airport': { car: 20 },
    'agadir-taghazout': { car: 40 },
    'agadir-imsouane': { car: 65 },
    'agadir-taroudant': { car: 90 },
    'agadir-tiznit': { car: 100 },
    'agadir-sidi-ifni': { car: 120 },
    'agadir-tafraoute': { car: 160 },
    'agadir-essaouira': { car: 80 },
    'agadir-essaouira-airport': { car: 90 },
    'essaouira-sidi-kaouki': { car: 25 },
    'essaouira-imsouane': { car: 70 },
    'essaouira-taghazout': { car: 70 },
    'essaouira-agadir-airport': { car: 90 },
    'essaouira-taroudant': { car: 180 },
    'essaouira-sidi-ifni': { car: 250 },
    'essaouira-safi': { car: 90 },
    'essaouira-oualidia': { car: 130 },
    'essaouira-el-jadida': { car: 150 },
    'essaouira-casablanca-airport': { car: 170 },
    'essaouira-rabat': { car: 250 },
    'essaouira-fes': { car: 420 },
    'essaouira-tanger': { car: 500 }
  };

  window.getTransferPrice = function(pickup, dest) {
    if (!pickup || !dest) return null;
    var n = function(s) {
      return s.toLowerCase().trim()
        .replace(/[–\-—]/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/\([^)]*\)/g, '')
        .replace(/['\u2019]/g, '')
        .replace(/\bcascades\s+d/g, '')
        .replace(/\bde\b/g, '')
        .replace(/\bla\b/g, '')
        .replace(/\ble\b/g, '')
        .replace(/\bd\b/g, '')
        .replace(/\bhassan\b.*$/, '')
        .replace(/\bmenara\b/g, '')
        .replace(/\bmedina\b/g, '')
        .replace(/\bcentre\b/g, '')
        .replace(/\bcenter\b/g, '')
        .replace(/massira\b/g, '')
        .replace(/\bmohammed\b.*$/, '')
        .replace(/\bv\b/g, '')
        .replace(/\bcity\b/g, '')
        .replace(/\bairport\b/g, ' airport ')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/\s+/g, '-');
    };
    var p = n(pickup);
    var d = n(dest);
    // Build candidate keys
    var pBase = p.replace(/-airport$/, '');
    var dBase = d.replace(/-airport$/, '');
    var candidates = [
      p + '-' + d,
      d + '-' + p,
      pBase + '-' + d,
      d + '-' + pBase,
      p + '-' + dBase,
      dBase + '-' + p,
      pBase + '-' + dBase,
      dBase + '-' + pBase
    ];
    // Handle "X" + "X Airport" → "X-airport" pattern
    if (pBase === dBase && p !== d) {
      var ct = p.indexOf('airport') > -1 ? d : p;
      candidates.push(ct + '-airport');
      candidates.push('airport-' + ct);
    }
    for (var i = 0; i < candidates.length; i++) {
      if (window.transferPrices[candidates[i]]) return window.transferPrices[candidates[i]];
    }
    return null;
  };

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

    prefill(pickup, dest) {
      if (pickup) { const el = document.getElementById('pickup'); if (el) el.value = pickup; }
      if (dest) { const el = document.getElementById('destination'); if (el) el.value = dest; }
      this.go(2);
      setTimeout(() => {
        const fe = document.getElementById('flowName');
        if (fe && !fe.value) fe.focus();
      }, 500);
    },

    validateForm() {
      let valid = true;
      const fields = [
        { id: 'flowName', name: Lang.t('validate.name') },
        { id: 'flowPhone', name: 'Phone' },
        { id: 'flowEmail', name: 'Email' },
        { id: 'pickup', name: Lang.t('validate.pickup') },
        { id: 'destination', name: Lang.t('validate.destination') },
        { id: 'datetime', name: Lang.t('validate.datetime') }
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
      const name = document.getElementById('flowName')?.value || '—';
      const phone = document.getElementById('flowPhone')?.value || '—';
      const email = document.getElementById('flowEmail')?.value || '—';
      const pickup = document.getElementById('pickup')?.value || '—';
      const dest = document.getElementById('destination')?.value || '—';
      const dt = document.getElementById('datetime')?.value || '—';
      const passengers = document.getElementById('passengerCount')?.textContent || '—';
      const vehicleEl = document.querySelector('.vehicle-option.selected');
      const vehicle = vehicleEl ? vehicleEl.querySelector('.vehicle-option-name')?.textContent || Lang.t('flow.vehicle.standard') : Lang.t('flow.vehicle.standard');
      const vehicleKey = vehicleEl ? vehicleEl.dataset.vehicle : 'standard';

      const price = this.vehiclePrices[vehicleKey] || 45;
      const total = price + (parseInt(passengers) > 4 ? 15 : 0);

      document.getElementById('summaryName').textContent = name;
      document.getElementById('summaryPhone').textContent = phone;
      document.getElementById('summaryEmail').textContent = email;
      document.getElementById('summaryPickup').textContent = pickup;
      document.getElementById('summaryDest').textContent = dest;
      document.getElementById('summaryPassengers').textContent = passengers;

      if (dt !== '—') {
        try {
          const d = new Date(dt);
          document.getElementById('summaryDatetime').textContent = d.toLocaleString((Lang.current === 'fr' ? 'fr-FR' : 'en-GB'), {
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
      const name = document.getElementById('flowName')?.value || '';
      const phone = document.getElementById('flowPhone')?.value || '';
      const email = document.getElementById('flowEmail')?.value || '';
      const pickup = document.getElementById('pickup')?.value || '';
      const dest = document.getElementById('destination')?.value || '';
      const dt = document.getElementById('datetime')?.value || '';
      const pax = document.getElementById('passengerCount')?.textContent || '';
      const vehicleEl = document.querySelector('.vehicle-option.selected');
      const vehicle = vehicleEl ? vehicleEl.querySelector('.vehicle-option-name')?.textContent || Lang.t('flow.vehicle.standard') : Lang.t('flow.vehicle.standard');

      const when = dt ? new Date(dt).toLocaleString((Lang.current === 'fr' ? 'fr-FR' : 'en-GB')) : '—';
      const msg = Lang.t('whatsapp.flow.header').replace(/\n/g,'%0A') +
        Lang.t('whatsapp.flow.name') + name + '%0A' +
        Lang.t('whatsapp.flow.phone') + phone + '%0A' +
        Lang.t('whatsapp.flow.email') + email + '%0A' +
        Lang.t('whatsapp.flow.pickup') + pickup + '%0A' +
        Lang.t('whatsapp.flow.destination') + dest + '%0A' +
        Lang.t('whatsapp.flow.when') + when + '%0A' +
        Lang.t('whatsapp.flow.passengers') + pax + '%0A' +
        Lang.t('whatsapp.flow.vehicle') + vehicle;
      window.open(`https://wa.me/212673396332?text=${msg}`, '_blank');
    },

    showSuccess() {
      alert(Lang.t('success.message'));
      this.go(1);
      document.getElementById('flowName').value = '';
      document.getElementById('flowPhone').value = '';
      document.getElementById('flowEmail').value = '';
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
    'Marrakech Airport', 'Marrakech Medina', 'Marrakech Palmeraie',
    'Essaouira', 'Essaouira Airport',
    'Agadir', 'Agadir Airport',
    'Casablanca', 'Casablanca Airport',
    'Merzouga', 'Fes', 'Rabat', 'Tangier', 'Chefchaouen',
    'Atlas Mountains', 'Ourika Valley', 'Oukaimeden', 'Imlil', 'Ouirgane',
    'Taghazout', 'Imsouane', 'Sidi Ifni', 'Taroudant', 'Tiznit', 'Tafraoute',
    'Ouarzazate', 'Safi', 'Oualidia', 'El Jadida',
    'Lac de Lalla Takerkoust', 'Agafay',
    'Cascades d\'Ouzoud', 'Sidi Kaouki',
    'Meknes', 'Ifrane', 'Dakhla'
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

  // ==========================================
  // DESTINATION CARD CLICK HANDLER
  // ==========================================
  document.querySelector('#destinations .destinations-grid')?.addEventListener('click', (e) => {
    const card = e.target.closest('.destination-card');
    if (!card) return;
    const nameEl = card.querySelector('.destination-card-name');
    if (!nameEl) return;
    window.Flow.prefill('', nameEl.textContent);
  });

  // ==========================================
  // VEHICLE FLEET CARD CLICK HANDLER
  // ==========================================
  document.querySelector('#fleet .vehicles-grid')?.addEventListener('click', (e) => {
    const card = e.target.closest('.vehicle-card');
    if (!card) return;
    window.Flow.prefill('', '');
  });

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