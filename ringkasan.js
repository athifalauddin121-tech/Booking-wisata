function formatRupiah(num) {
  return 'Rp ' + num.toLocaleString('id-ID');
}

function pesanBaru() {
  sessionStorage.clear();
  window.location.href = 'index.html';
}

window.addEventListener('DOMContentLoaded', () => {
  const pkg       = JSON.parse(sessionStorage.getItem('packageData') || '{}');
  const slot      = JSON.parse(sessionStorage.getItem('slotData')    || '{}');
  const user      = JSON.parse(sessionStorage.getItem('userData')    || '{}');
  const bookingNo = sessionStorage.getItem('bookingNo') || '—';

  document.getElementById('booking-number').textContent = bookingNo;

  document.getElementById('s-paket').textContent    = pkg.name     || '—';
  document.getElementById('s-dest').textContent     = pkg.dest     || '—';
  document.getElementById('s-tujuan').textContent   = pkg.tujuan   || '—';
  document.getElementById('s-fasilitas').textContent = pkg.fasilitas || '—';

  document.getElementById('s-sesi').textContent = slot.label || '—';
  document.getElementById('s-jam').textContent  = slot.time  || '—';

  document.getElementById('s-nama').textContent   = user.nama   || '—';
  document.getElementById('s-gender').textContent = user.gender || '—';
  document.getElementById('s-umur').textContent   = user.age ? user.age + ' tahun' : '—';

  document.getElementById('s-total').textContent = pkg.price ? formatRupiah(pkg.price) : 'Rp 0';
});
