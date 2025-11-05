/*memilih paket*/
document.querySelectorAll('.package-option').forEach(option => {
option.addEventListener('click', function() {
/*hapus kelas selected dari semua opsi*/
document.querySelectorAll('.package-option').forEach(opt => {
opt.classList.remove('selected');
});

/*tambahkan kelas selected ke opsi yang diklik*/
this.classList.add('selected');

/*set nilai input hidden*/
document.getElementById('paket').value = this.getAttribute('data-value');

/*update harga tiket*/
const price = this.getAttribute('data-price');
document.getElementById('ticket-price').textContent = 'Rp ' + parseInt(price).toLocaleString('id-ID');

/*update total harga*/
const total = parseInt(price) + 10000;
document.getElementById('total-price').textContent = 'Rp ' + total.toLocaleString('id-ID');
});
});

/*jenis pembayaran*/
document.getElementById('marvel-form').addEventListener('submit', function(e) {
e.preventDefault();

/*paket yang dipilih*/
const selectedPackage = document.getElementById('paket').value;
if (!selectedPackage) {
alert('Silakan pilih paket terlebih dahulu!');
return;
}

/*pendaftaran berhasil*/
alert('Pendaftaran berhasil! Kami akan mengirimkan konfirmasi melalui email.');
this.reset();

/*jenis paket*/
document.querySelectorAll('.package-option').forEach(opt => {
opt.classList.remove('selected');
});

/*total harga*/
document.getElementById('ticket-price').textContent = 'Rp 0';
document.getElementById('total-price').textContent = 'Rp 10.000';
});

/*tanggal*/
const today = new Date().toISOString().split('T')[0];
document.getElementById('date').setAttribute('min', today);