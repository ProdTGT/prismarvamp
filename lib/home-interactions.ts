// @ts-nocheck
export function initHomePage(): void {
  if (typeof window === "undefined") return;
  const w = window as Window & { __primatechHomeInit?: boolean };
  if (w.__primatechHomeInit) return;
  w.__primatechHomeInit = true;


'use strict';
const root = document.documentElement;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionButton = document.querySelector('#motion-toggle');
let paused = reducedMotion.matches;

function scrollToSection(id) {
  if (!id || id === '#') {
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    return;
  }
  const target = document.querySelector(id);
  if (!target) return;
  target.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
}

// In-page nav: scroll to section without putting #hash in the URL.
document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  const href = link.getAttribute('href');
  if (!href) return;
  event.preventDefault();
  scrollToSection(href === '#' ? '#' : href);
});

if (window.location.hash) {
  const hash = window.location.hash;
  history.replaceState(null, '', window.location.pathname + window.location.search);
  requestAnimationFrame(() => scrollToSection(hash));
}
function syncMotion() {
  root.classList.toggle('motion-paused', paused);
  if (!motionButton) return;
  motionButton.setAttribute('aria-pressed', String(paused));
  motionButton.textContent = paused ? 'Resume animations' : 'Pause animations';
}
syncMotion();
motionButton?.addEventListener('click', () => { paused = !paused; syncMotion(); });
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  root.classList.add('js-motion');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(item => observer.observe(item));
}
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
function closeMenu() {
  if (!navigation || !menu) return;
  navigation.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open navigation');
}
if (menu && navigation) {
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); navigation.classList.toggle('open', open); });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
}
document.querySelectorAll('[data-device]').forEach(link => link.addEventListener('click', () => {
  const deviceChoice = document.querySelector('#device-choice');
  if (deviceChoice) deviceChoice.value = link.dataset.device;
}));
function showPreloader() {
  if (document.getElementById('pt-preloader-style')) {
    /* styles already added */
  } else {
    const style = document.createElement('style');
    style.id = 'pt-preloader-style';
    style.textContent = '#pt-preloader{position:fixed;inset:0;z-index:10000;display:grid;place-items:center;background:rgba(7,4,14,.94);color:#fff;font-family:Satoshi,sans-serif}#pt-preloader p{margin:18px 0 0;font-size:16px;letter-spacing:.04em}.pt-preloader-spin{width:64px;height:64px;border-radius:50%;border:3px solid rgba(200,42,239,.25);border-top-color:#c82aef;display:block;margin:0 auto;animation:pt-spin .8s linear infinite}@keyframes pt-spin{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.pt-preloader-spin{animation:none;border-top-color:#c82aef}}';
    document.head.appendChild(style);
  }
  if (document.getElementById('pt-preloader')) return;
  const el = document.createElement('div');
  el.id = 'pt-preloader';
  el.setAttribute('role', 'status');
  el.setAttribute('aria-live', 'polite');
  el.innerHTML = '<div><span class="pt-preloader-spin" aria-hidden="true"></span><p>Sending your request</p></div>';
  document.body.appendChild(el);
}
function openThankYou(details) {
  try {
    sessionStorage.setItem('pt-halloween-request', JSON.stringify(details));
  } catch (error) {}
  showPreloader();
  const wait = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 200 : 900;
  window.setTimeout(() => {
    window.location.href = '/lp/halloween/thank-you';
  }, wait);
}
document.querySelector('#consultation-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  openThankYou({
    name: String(data.get('name') || ''),
    email: String(data.get('email') || ''),
    business: String(data.get('business') || ''),
    businessType: String(data.get('industry') || ''),
    request: 'POS quote',
    interestedIn: String(data.get('device') || ''),
    message: String(data.get('message') || ''),
  });
});

// Conversion actions use separate, non-personal analytics events.
function trackConversion(eventName, source) {
  const detail = { cta_location: source || 'landing_page', page_variant: 'halloween' };
  if (typeof window.gtag === 'function') window.gtag('event', eventName, detail);
  else { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: eventName, ...detail }); }
}
function ctaSource(element) { return element.closest('section')?.id || (element.closest('.hero') ? 'hero' : element.closest('dialog')?.id || 'navigation'); }
const finderDialog = document.querySelector('#finder-dialog');
const requestDialog = document.querySelector('#request-dialog');
let requestMode = 'call';
function openFinder(source) {
  trackConversion('device_finder_start', source);
  finderDialog.showModal();
}
function openRequest(mode, source) {
  requestMode = mode;
  const review = mode === 'review';
  trackConversion(review ? 'statement_review_click' : 'book_call_click', source);
  document.querySelector('#request-kicker').textContent = review ? 'A CLOSER LOOK AT YOUR PROCESSING COSTS' : 'LET’S TALK ABOUT YOUR SETUP';
  document.querySelector('#request-title').textContent = review ? 'Get a free statement review.' : 'Request a 15-minute call.';
  document.querySelector('#request-description').textContent = review ? 'Start with a conversation about your current fees. The team will explain how to share a statement for review.' : 'Share a preferred time. The team will confirm availability with you.';
  document.querySelector('#request-timing').hidden = review;
  document.querySelector('#request-context-title').textContent = review ? 'What would you like help understanding? (optional)' : 'Anything you’d like to discuss? (optional)';
  document.querySelector('#request-submit').firstChild.textContent = review ? 'Prepare my review request ' : 'Prepare my call request ';
  document.querySelector('#request-footnote').textContent = 'You’ll see a confirmation page next. Please don’t enter card numbers, bank details or other sensitive information here.';
  document.querySelector('#request-status').hidden = true;
  document.querySelector('#request-fallback').hidden = true;
  requestDialog.showModal();
}
document.querySelectorAll('[data-action]').forEach(button => button.addEventListener('click', () => {
  const action = button.dataset.action;
  if (action === 'finder') openFinder(ctaSource(button));
  else openRequest(action, ctaSource(button));
}));
document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const r = dialog.getBoundingClientRect();
  if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
}));
const deviceMatches = {
  mobile: { name: 'Clover Flex', image: '/images/clover-flex.png', description: 'Bring checkout to your customer. Clover Flex combines portable card payments, a built-in receipt printer and barcode scanning in one handheld device.' },
  counter: { name: 'Clover Mini', image: '/images/clover-mini-device.png', description: 'Keep your checkout compact. Clover Mini brings card payments and everyday sales tools to a fixed counter without taking over your workspace.' },
  fuel: { name: 'NRS Petro', image: '/images/nrs-petro-device.png', description: 'Connect fuel sales and the store counter. NRS Petro is the starting point to discuss for compatible pump integration, convenience retail and shift reporting.' }
};
document.querySelector('#finder-form').addEventListener('submit', event => {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;
  const values = new FormData(event.currentTarget);
  const match = deviceMatches[values.get('workflow')];
  if (!match) return;
  document.querySelector('#result-name').textContent = match.name;
  document.querySelector('#result-description').textContent = match.description;
  const image = document.querySelector('#result-image'); image.src = match.image; image.alt = match.name + ' recommended POS';
  document.querySelector('#result-quote').dataset.device = match.name;
  document.querySelector('#result-quote').dataset.industry = values.get('industry');
  event.currentTarget.hidden = true;
  document.querySelector('#finder-result').hidden = false;
  finderDialog.scrollTop = 0;
  document.querySelector('#result-quote').focus({ preventScroll: true });
  trackConversion('device_finder_complete', 'finder-dialog');
});
document.querySelector('#quiz-restart').addEventListener('click', () => {
  document.querySelector('#finder-result').hidden = true;
  document.querySelector('#finder-form').hidden = false;
  document.querySelector('#finder-form select').focus();
});
document.querySelector('#result-quote').addEventListener('click', event => {
  const link = event.currentTarget;
  document.querySelector('#device-choice').value = link.dataset.device;
  document.querySelector('#consultation-form [name=industry]').value = link.dataset.industry;
  finderDialog.close();
  trackConversion('quick_quote_click', 'device_finder_result');
  setTimeout(() => document.querySelector('#consultation-form [name=name]').focus({ preventScroll: true }), 350);
});
document.querySelectorAll('.device-cta').forEach(button => button.addEventListener('click', () => trackConversion('quick_quote_click', 'device_card_' + button.dataset.device.toLowerCase().replaceAll(' ', '_'))));
document.querySelector('#consultation-form').addEventListener('submit', () => trackConversion('quick_quote_draft', 'final_quote_form'));
document.querySelector('#request-form').addEventListener('submit', event => {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;
  const data = new FormData(event.currentTarget);
  const review = requestMode === 'review';
  const timing = String(data.get('timing') || '');
  const context = String(data.get('context') || '');
  trackConversion(review ? 'statement_review_draft' : 'book_call_draft', 'request_dialog');
  openThankYou({
    name: String(data.get('name') || ''),
    email: String(data.get('email') || ''),
    business: String(data.get('business') || ''),
    businessType: '',
    request: review ? 'Statement review' : '15-minute call',
    interestedIn: review ? '' : timing,
    message: context,
  });
});
const industries = {
  restaurants: { title: 'More hospitality.\nLess back-and-forth.', kicker: 'FROM FIRST ORDER TO FINAL BILL', description: 'Take payments to the table with Clover Flex, or keep counter service compact with Clover Mini. Build a setup around the way your guests order and pay.', bullets: ['Tableside or counter checkout', 'Contactless payment options', 'Receipt and reporting workflows'], image: '/images/scene-restaurants.webp', alt: 'Waiter presenting a Clover Flex to a customer at a café table', note: 'Clover Flex · Take checkout to the table' },
  retail: { title: 'Small footprint.\nRoom for more possibilities.', kicker: 'FROM THE FIRST BROWSE TO THE FINAL BAG', description: 'Give your counter a compact payment setup with Clover Mini. If your team sells around the shop floor or at events, explore adding handheld checkout with Flex.', bullets: ['Compact counter checkout', 'Inventory tools with compatible plans', 'Tap, chip and swipe payments'], image: '/images/scene-retail.webp', alt: 'Customer paying at a clothing boutique counter with a Clover Mini', note: 'Clover Mini · A compact counter companion' },
  salons: { title: 'A smoother finish.\nFor every appointment.', kicker: 'LET GREAT SERVICE END WITH EASY PAYMENTS', description: 'Keep the front desk uncluttered with Clover Mini or take payments to the chair with Flex. Discuss the software and integrations needed for your salon workflow.', bullets: ['Front-desk or at-chair payments', 'Contactless checkout', 'Software matched to your service needs'], image: '/images/scene-salons.webp', alt: 'Customer paying a hairstylist with a Clover Mini in a salon with styling chairs and mirrors', note: 'Clover Mini · A simpler front-desk setup' },
  fuel: { title: 'Fuel outside.\nConnected checkout inside.', kicker: 'BRING THE FORECOURT AND STORE TOGETHER', description: 'Explore NRS Petro for fuel and convenience operations. Confirm compatibility with your pump controller and build a setup around your store’s daily routine.', bullets: ['Compatible pump integration', 'Fuel and in-store sales workflow', 'Cashier and shift reporting'], image: '/images/scene-fuel.webp', alt: 'View from inside the counter of an NRS Petro screen facing the cashier as a customer hands over a card', note: 'NRS Petro · Built around fuel and store operations' }
};
function selectIndustry(key) {
  const item = industries[key]; if (!item) return;
  document.querySelectorAll('[data-industry][role=tab]').forEach(tab => { const active = tab.dataset.industry === key; tab.setAttribute('aria-selected', String(active)); tab.tabIndex = active ? 0 : -1; });
  document.querySelector('#industry-panel').setAttribute('aria-labelledby', 'tab-' + key);
  const title = document.querySelector('#industry-title'); title.replaceChildren(); item.title.split('\n').forEach((line, i) => { if (i) title.append(document.createElement('br')); title.append(document.createTextNode(line)); });
  document.querySelector('#industry-kicker').textContent = item.kicker;
  document.querySelector('#industry-description').textContent = item.description;
  const list = document.querySelector('#industry-benefits'); list.replaceChildren(); item.bullets.forEach(text => { const li = document.createElement('li'); li.textContent = text; list.append(li); });
  const image = document.querySelector('#industry-image'); image.src = item.image; image.alt = item.alt;
  document.querySelector('#industry-note').textContent = item.note;
}
const industryTabs = [...document.querySelectorAll('[data-industry][role=tab]')];
industryTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectIndustry(tab.dataset.industry));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % industryTabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + industryTabs.length) % industryTabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = industryTabs.length - 1;
    if (next === undefined) return;
    event.preventDefault(); selectIndustry(industryTabs[next].dataset.industry); industryTabs[next].focus();
  });
});
// One shared effect for every CTA: hovering, keyboard focus and tapping/clicking.
const batSprite = new Image(); batSprite.src = '/images/bat.webp';
const batLastRun = new WeakMap();
function releaseBats(target, tap = false) {
  if (paused || reducedMotion.matches || document.querySelectorAll('.bat-particle').length > 24) return;
  const now = performance.now();
  if (!tap && now - (batLastRun.get(target) || -1000) < 500) return;
  batLastRun.set(target, now);
  const box = target.getBoundingClientRect();
  const holder = document.querySelector('dialog[open]') || document.body;
  const count = tap ? 5 : 4;
  for (let i = 0; i < count; i++) {
    const bat = document.createElement('span'); bat.className = 'bat-particle'; bat.setAttribute('aria-hidden', 'true');
    const width = 34 + i * 6;
    const direction = i % 2 ? 1 : -1;
    bat.style.cssText = `left:${box.left + box.width * (.25 + i / count * .55)}px;top:${box.top + 8}px;width:${width}px;height:${width / 2}px;--bat-x:${direction * (45 + i * 30)}px;--bat-y:${-95 - i * 22}px;--bat-angle:${direction * (7 + i * 4)}deg;--bat-time:${1100 + i * 130}ms;animation-delay:${i * 55}ms;`;
    const sprite = document.createElement('img'); sprite.src = batSprite.src; sprite.alt = ''; sprite.draggable = false; bat.append(sprite); holder.append(bat);
    bat.addEventListener('animationend', event => { if (event.target === bat) bat.remove(); }, { once: true });
    setTimeout(() => bat.remove(), 2300);
  }
}
const batCTAs = '.button, .device-cta, .text-link, .service-row a, .contact-phone, .contact-email, .season-strip a';
document.querySelectorAll(batCTAs).forEach(cta => {
  cta.addEventListener('pointerenter', event => { if (event.pointerType !== 'touch') releaseBats(cta); });
  cta.addEventListener('focus', () => releaseBats(cta));
  cta.addEventListener('click', () => releaseBats(cta, true));
});



}
