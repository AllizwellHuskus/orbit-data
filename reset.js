const fs = require('fs');

const path = 'duta.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

// Buat backup
const now = new Date();
const bulan = String(now.getMonth() + 1).padStart(2, '0');
const tahun = now.getFullYear();
const backupFile = `backup_${tahun}_${bulan}.json`;

fs.writeFileSync(backupFile, JSON.stringify(data, null, 2));

// Reset semua pp dan ppg ke 0, kecuali ongoing tetap ongoing
for (const key in data) {
  if (typeof data[key].pp === 'number') data[key].pp = 0;
  if (typeof data[key].ppg === 'number') data[key].ppg = 0;
}

fs.writeFileSync(path, JSON.stringify(data, null, 2));
console.log('Backup & Reset done.');
