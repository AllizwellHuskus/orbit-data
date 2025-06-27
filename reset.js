const fs = require('fs');

// Load file duta.json
let data = require('./duta.json');

// Buat backup otomatis dengan tanggal
const tanggal = new Date().toISOString().split('T')[0];
fs.writeFileSync(`backup_duta_${tanggal}.json`, JSON.stringify(data, null, 2));

// Reset semua PP dan PPG yang berupa angka ke 0
for (const key in data) {
  if (typeof data[key].pp === 'number') {
    data[key].pp = 0;
  }

  if (typeof data[key].ppg === 'number') {
    data[key].ppg = 0;
  }
}

// Simpan kembali ke duta.json
fs.writeFileSync('duta.json', JSON.stringify(data, null, 2));

console.log(`Sukses: Semua PP & PPG direset ke 0. Backup dibuat: backup_duta_${tanggal}.json`);
