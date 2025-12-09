
// Year in footer
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();

// Demo contact form
const form = document.querySelector('form');
const status = document.getElementById('formStatus');
if (form && status) {
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    status.textContent = 'Thanks! Message received.';
    form.reset();
  });
}
