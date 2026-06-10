let age = 25;
let gender = null;

function selectGender(val) {
  gender = val;
  document.getElementById('opt-l').classList.toggle('selected', val === 'Laki-laki');
  document.getElementById('opt-p').classList.toggle('selected', val === 'Perempuan');
  checkForm();
}

function changeAge(delta) {
  age = Math.min(99, Math.max(1, age + delta));
  document.getElementById('age-display').textContent = age;
}

function checkForm() {
  const nama = document.getElementById('inp-nama').value.trim();
  document.getElementById('btn-next').disabled = !(nama && gender);
}

function showConfirm() {
  const nama = document.getElementById('inp-nama').value.trim();
  const pkg  = JSON.parse(sessionStorage.getItem('packageData') || '{}');

  document.getElementById('confirm-nama').textContent  = nama;
  document.getElementById('confirm-paket').textContent = pkg.name || '—';
  document.getElementById('confirm-total').textContent = pkg.priceStr ? pkg.priceStr + ' / orang' : '—';

  document.getElementById('modal-confirm').classList.add('show');
}

function closeConfirm() {
  document.getElementById('modal-confirm').classList.remove('show');
}

function confirmBooking() {
  const nama = document.getElementById('inp-nama').value.trim();
  sessionStorage.setItem('userData', JSON.stringify({ nama, gender, age }));

  const bookingNo = 'PLO-' + Date.now().toString().slice(-6);
  sessionStorage.setItem('bookingNo', bookingNo);

  window.location.href = 'ringkasan.html';
}

window.addEventListener('DOMContentLoaded', () => {
  const pkg = JSON.parse(sessionStorage.getItem('packageData') || 'null');
  if (pkg) {
    document.getElementById('pkg-name-display').textContent  = pkg.name;
    document.getElementById('pkg-price-display').textContent = pkg.priceStr + ' / orang';
  }

  const saved = JSON.parse(sessionStorage.getItem('userData') || 'null');
  if (saved) {
    document.getElementById('inp-nama').value = saved.nama;
    age = saved.age || 25;
    document.getElementById('age-display').textContent = age;
    if (saved.gender) selectGender(saved.gender);
  }

  document.getElementById('modal-confirm').addEventListener('click', function(e) {
    if (e.target === this) closeConfirm();
  });
});