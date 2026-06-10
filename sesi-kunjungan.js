const slots = {
  morning:   { label: 'Sesi Pagi',  time: '07:00' },
  afternoon: { label: 'Sesi Siang', time: '13:00' },
  evening:   { label: 'Sesi Sore',  time: '16:30' }
};

let selectedSlot = null;

function selectSlot(type) {
  document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
  document.getElementById('slot-' + type).classList.add('selected');
  selectedSlot = type;
  document.getElementById('btn-next').disabled = false;
  sessionStorage.setItem('selectedSlot', type);
  sessionStorage.setItem('slotData', JSON.stringify(slots[type]));
}

function goNext() {
  if (!selectedSlot) return;
  window.location.href = 'data-diri.html';
}

window.addEventListener('DOMContentLoaded', () => {
  // Show package info in pill
  const pkg = JSON.parse(sessionStorage.getItem('packageData') || 'null');
  if (pkg) {
    document.getElementById('pkg-name-display').textContent = pkg.name;
    document.getElementById('pkg-price-display').textContent = pkg.priceStr + ' / orang';
  }

  // Restore slot if user came back
  const saved = sessionStorage.getItem('selectedSlot');
  if (saved && slots[saved]) {
    selectSlot(saved);
  }
});
