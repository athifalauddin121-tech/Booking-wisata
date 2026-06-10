const packages = {
  standard: {
    name: 'Paket Wisata Standar',
    dest: 'Pulau Tidung',
    tujuan: 'Kepulauan Seribu, Jakarta',
    price: 850000,
    priceStr: 'Rp 850.000',
    fasilitas: 'Kapal Ferry, Penginapan 2 Malam, Sarapan, Snorkeling'
  },
  premium: {
    name: 'Paket Wisata Premium',
    dest: 'Pulau Komodo',
    tujuan: 'Labuan Bajo, Nusa Tenggara Timur',
    price: 3200000,
    priceStr: 'Rp 3.200.000',
    fasilitas: 'Tiket Pesawat, Resort 3 Malam, Makan 3x, Tour Komodo, Diving'
  },
  vip: {
    name: 'Paket Wisata VIP',
    dest: 'Pulau Raja Ampat',
    tujuan: 'Sorong, Papua Barat',
    price: 12500000,
    priceStr: 'Rp 12.500.000',
    fasilitas: 'Business Class, Private Villa 5 Malam, All Inclusive, Private Boat, Fotografer, Spa'
  }
};

let selectedPackage = null;

function selectPackage(type) {
  document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
  document.getElementById('card-' + type).classList.add('selected');
  selectedPackage = type;
  document.getElementById('btn-next').disabled = false;
  sessionStorage.setItem('selectedPackage', type);
  sessionStorage.setItem('packageData', JSON.stringify(packages[type]));
}

function goNext() {
  if (!selectedPackage) return;
  window.location.href = 'data-diri.html';
}

window.addEventListener('DOMContentLoaded', () => {
  const saved = sessionStorage.getItem('selectedPackage');
  if (saved && packages[saved]) {
    selectPackage(saved);
  }
});