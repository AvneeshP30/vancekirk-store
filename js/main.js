// ===================== MOBILE MENU =====================
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

// ===================== COUNTDOWN TIMER =====================
function initCountdown() {
  const dropDate = new Date();
  dropDate.setDate(dropDate.getDate() + 12);
  dropDate.setHours(dropDate.getHours() + 6);

  function update() {
    const now = new Date();
    const diff = dropDate - now;
    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = n => String(n).padStart(2, '0');
    const d = document.getElementById('cd-days');
    const h = document.getElementById('cd-hours');
    const m = document.getElementById('cd-mins');
    const s = document.getElementById('cd-secs');
    if (d) d.textContent = pad(days);
    if (h) h.textContent = pad(hours);
    if (m) m.textContent = pad(mins);
    if (s) s.textContent = pad(secs);
  }

  update();
  setInterval(update, 1000);
}

// ===================== CART TOAST =====================
function showToast(msg) {
  const toast = document.getElementById('cartToast');
  if (!toast) return;
  toast.textContent = msg || '✓ Added to cart!';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// Hook all "Add to Cart" buttons
document.querySelectorAll('.add-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    showToast('✓ Added to cart!');
  });
});

// ===================== NEWSLETTER =====================
function subscribeNewsletter(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = '✓ You\'re In!';
  btn.style.background = '#006600';
  setTimeout(() => {
    btn.textContent = 'Join the Movement';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}

// ===================== SHOP FILTERS =====================
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card[data-cat]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      productCards.forEach(card => {
        if (cat === 'all' || card.dataset.cat === cat) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ===================== SCROLL ANIMATIONS =====================
function initScrollAnim() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.product-card, .cat-card, .drop-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initFilters();
  initScrollAnim();
});
