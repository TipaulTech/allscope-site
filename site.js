// Shared header, footer and interactions for every page of allscopeholdingsllc.com
const AMAZON = 'https://www.amazon.com/shop/constantdeal';
const DIAG = '$29';

const MENUS = [
  { label: 'Repairs', cols: 3,
    intro: ['Repairs for the devices you rely on', `Diagnostic ${DIAG}, deducted from your repair. 90-day warranty on every fix.`, ['/#booking', 'Book a repair']],
    items: [
      ['phone', 'Phone', 'Screens, batteries, charging ports', '/repairs.html'],
      ['tablet', 'Tablet', 'iPad & Android tablets', '/repairs.html'],
      ['computer', 'Computer', 'Laptops & desktops', '/repairs.html'],
      ['console', 'Game console', 'Controllers, ports, overheating', '/repairs.html'],
      ['other', 'Something else', 'Smartwatches, headphones & more', '/repairs.html'],
      ['warranty', '90-day warranty', 'Parts & labor covered', '/refund.html#warranty'],
    ] },
  { label: 'Services', cols: 4,
    intro: ['Installations & services to keep you running', 'On-site in Broward & Miami-Dade, or remote when possible.', ['/#booking', 'Book a call']],
    items: [
      ['camera', 'Security cameras', 'Install, NVR & app setup', '/#services'],
      ['wifi', 'Network & Wi-Fi', 'Mesh, cabling, secure setup', '/#services'],
      ['transfer', 'Data transfer', 'Move everything to a new device', '/repairs.html#device-care'],
      ['virus', 'Virus removal', 'Malware cleanup & protection', '/repairs.html#device-care'],
      ['tuneup', 'PC tune-up', 'Boost speed & performance', '/repairs.html#device-care'],
      ['recovery', 'Device recovery', 'Restore data or factory reset', '/repairs.html#device-care'],
      ['youtube', 'YouTube consulting', 'Grow your channel — $99/session', '/#services'],
      ['app', 'App creation', 'Custom apps for your business', '/#services'],
    ] },
  { label: 'Shop', cols: 3,
    intro: ['Gear we trust, ready to install', 'Order on Amazon, then book us for the installation.', [AMAZON, 'Shop on Amazon']],
    note: 'As an Amazon Associate I earn from qualifying purchases.',
    items: [
      ['../shop-camera', '4K security camera', 'Night vision, weatherproof', AMAZON, 1],
      ['../shop-kit', '4-camera NVR kit', 'Complete recording system', AMAZON, 1],
      ['../shop-screen', 'Replacement screens', 'iPhone, Samsung & more', AMAZON, 1],
      ['../shop-wifi', 'Mesh Wi-Fi', 'Whole-home coverage', AMAZON, 1],
      ['cart', 'Shop all', 'See everything on Amazon', AMAZON],
    ] },
  { label: 'Resources', cols: 4,
    intro: ['Support for every step', 'Easy ways to reach us and get answers fast.', ['tel:+19544493719', 'Call (954) 449-3719']],
    items: [
      ['contact', 'Contact us', 'Phone, e-mail & support', '/#contact'],
      ['faq', 'FAQ', 'Everything you need to know', '/#faq'],
      ['calendar', 'Book a call', 'Free 15-minute call', '/#booking'],
      ['warranty', 'Warranty & refunds', 'Our 90-day promise', '/refund.html'],
    ] },
];

const ext = u => /^https?:/.test(u) ? ' target="_blank" rel="noopener sponsored"' : '';
const card = ([ic, t, d, href, photo]) =>
  `<a class="mc" href="${href}"${ext(href)}><span class="i${photo ? ' photo' : ''}" style="background-image:url(/img/icons/${ic}.jpg)"></span><b>${t}</b><small>${d}</small></a>`;

document.getElementById('site-nav').outerHTML = `
<nav class="top"><div class="wrap">
  <a class="logo" href="/"><img src="/img/logo-nav.png" alt="All Scope Holdings" height="52"></a>
  <ul class="menu" id="menu">
    ${MENUS.map(m => `<li><button type="button">${m.label}</button><div class="mega"><div class="mega-in">
      <div class="mega-intro"><h4>${m.intro[0]}</h4><p>${m.intro[1]}</p><a class="btn sm" href="${m.intro[2][0]}"${ext(m.intro[2][0])}>${m.intro[2][1]}</a>${m.note ? `<small>${m.note}</small>` : ''}</div>
      <div class="mega-grid${m.cols === 4 ? ' g4' : ''}">${m.items.map(card).join('')}</div>
    </div></div></li>`).join('')}
    <li><a href="/#projects">My Projects</a></li>
  </ul>
  <a class="btn sm" href="/#booking">Book now →</a>
  <button class="burger" type="button" aria-label="Menu">☰</button>
</div></nav>`;

document.getElementById('site-footer').outerHTML = `
<footer class="foot" id="contact"><div class="wrap">
  <div class="foot-grid">
    <div><img src="/img/logo-nav.png" alt="All Scope Holdings LLC" height="60" style="display:block;margin-bottom:12px">
      Serving Broward & Miami-Dade, Florida<br>
      <a href="tel:+19544493719">+1 (954) 449-3719</a><br>
      <a href="mailto:contact@allscopeholdingsllc.com">contact@allscopeholdingsllc.com</a><br>
      Support: <a href="mailto:support@allscopeholdingsllc.com">support@allscopeholdingsllc.com</a></div>
    <div><h5>Services</h5><ul><li><a href="/repairs.html">Device repairs</a></li><li><a href="/#services">Cameras & networks</a></li><li><a href="/repairs.html#device-care">Device care</a></li><li><a href="/#booking">Book a call</a></li></ul></div>
    <div><h5>Company</h5><ul><li><a href="/#projects">My Projects</a></li><li><a href="${AMAZON}" target="_blank" rel="noopener sponsored">Shop</a></li><li><a href="/#faq">FAQ</a></li></ul></div>
    <div><h5>Legal</h5><ul><li><a href="/terms.html">Terms of Service</a></li><li><a href="/privacy.html">Privacy Policy</a></li><li><a href="/refund.html">Refund & Warranty</a></li></ul></div>
  </div>
  <div class="foot-bottom">
    <div>As an Amazon Associate I earn from qualifying purchases.</div>
    <div>All Scope Holdings LLC is an independent repair provider and is not affiliated with Apple, Samsung, Google, Sony, Microsoft or Nintendo. Brand names are used only to describe the devices we service.</div>
    <div>© ${new Date().getFullYear()} All Scope Holdings LLC. All rights reserved.</div>
  </div>
</div></footer>`;

// mobile menu: burger opens the list, each tab expands as an accordion
const menu = document.getElementById('menu');
document.querySelector('.burger').onclick = () => menu.classList.toggle('open');
menu.querySelectorAll(':scope>li>button').forEach(b => b.onclick = () => {
  if (matchMedia('(max-width:980px)').matches) b.parentElement.classList.toggle('open');
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

// scroll reveal
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15 });
document.querySelectorAll('.rv').forEach((el, i) => { el.style.transitionDelay = (i % 3) * 0.1 + 's'; io.observe(el); });

// counters
const co = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target, end = +el.dataset.count, t0 = performance.now();
  (function tick(t) { const k = Math.min((t - t0) / 1600, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(tick); })(t0);
  co.unobserve(el);
}), { threshold: .5 });
document.querySelectorAll('[data-count]').forEach(el => co.observe(el));

// live camera clocks
const cams = document.querySelectorAll('.cam time');
if (cams.length) {
  const clk = () => { const t = new Date().toLocaleString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }); cams.forEach(e => e.textContent = t); };
  clk(); setInterval(clk, 1000);
}

// $10-off popup: shows once every 7 days, e-mails go to contact@ through FormSubmit
(function promo() {
  const KEY = 'as_promo_seen', CODE = 'WELCOME10';
  let seen = 0;
  try { seen = +localStorage.getItem(KEY) || 0; } catch (e) {}
  if (Date.now() - seen < 7 * 864e5) return;
  document.body.insertAdjacentHTML('beforeend', `
  <div class="promo" id="promo" role="dialog" aria-modal="true" aria-label="$10 off offer"><div class="promo-box">
    <button class="promo-x" type="button" aria-label="Close">×</button>
    <img src="/img/logo-nav.png" alt="All Scope Holdings">
    <div class="promo-big"><sup>$</sup>10 <small>OFF*</small></div>
    <h3>any device repair</h3>
    <p>Enter your e-mail to get your discount code, plus tips & offers.</p>
    <form><input type="email" name="email" required placeholder="Enter your e-mail address"><button type="submit">Get my discount code</button></form>
    <div class="fine">By submitting, you agree to receive e-mails from us (unsubscribe anytime) and to our <a href="/privacy.html">Privacy Policy</a>.<br>*One per customer, on repairs of $79 or more. Not combinable with other offers.</div>
  </div></div>`);
  const box = document.getElementById('promo');
  const close = () => { box.classList.remove('show'); try { localStorage.setItem(KEY, Date.now()); } catch (e) {} };
  box.querySelector('.promo-x').onclick = close;
  box.onclick = e => { if (e.target === box) close(); };
  box.querySelector('form').onsubmit = async e => {
    e.preventDefault();
    const email = e.target.email.value, btn = e.target.querySelector('button');
    btn.disabled = true; btn.textContent = 'Sending…';
    try {
      await fetch('https://formsubmit.co/ajax/contact@allscopeholdingsllc.com', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, _subject: 'New $10-off signup', _template: 'table',
          _autoresponse: `Thanks for joining All Scope Holdings! Your code: ${CODE} — $10 off any device repair of $79 or more. Book at https://allscopeholdingsllc.com/#booking` }),
      });
    } catch (err) {}
    e.target.outerHTML = `<p style="margin-top:16px">Here is your code — show it when you book:</p><div class="promo-code">${CODE}</div>`;
    try { localStorage.setItem(KEY, Date.now()); } catch (e2) {}
  };
  setTimeout(() => box.classList.add('show'), 9000);
})();
