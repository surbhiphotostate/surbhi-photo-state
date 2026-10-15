const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '×' : '☰';
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('enquiry-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('customer-name').value.trim();
  const service = document.getElementById('customer-service').value;
  const message = document.getElementById('customer-message').value.trim();
  const text = `Hello Surabhi Photo State,%0AName: ${encodeURIComponent(name)}%0AService: ${encodeURIComponent(service)}%0AMessage: ${encodeURIComponent(message || 'Please share more details.')}`;
  window.open(`https://wa.me/918316050583?text=${text}`, '_blank', 'noopener');
});
