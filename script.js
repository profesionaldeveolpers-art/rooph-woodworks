const config = window.siteConfig || {};

const waBtn = document.getElementById('waBtn');
const mailBtn = document.getElementById('mailBtn');
const driveBtn = document.getElementById('driveBtn');

const waNumber = (config.whatsappNumber || '').replace(/\D/g, '');
const waMessage = encodeURIComponent(config.whatsappMessage || 'Hola');

if (waNumber) {
  waBtn.href = `https://wa.me/${waNumber}?text=${waMessage}`;
} else {
  waBtn.href = '#';
}

if (config.email) {
  mailBtn.href = `mailto:${config.email}`;
} else {
  mailBtn.href = '#';
}

if (config.driveUrl) {
  driveBtn.href = config.driveUrl;
} else {
  driveBtn.href = '#';
}
