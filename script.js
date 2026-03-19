(function () {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  const whatsappTop = document.getElementById('whatsappBtn');
  const whatsappBottom = document.getElementById('whatsappBtnBottom');
  const emailBtn = document.getElementById('emailBtn');
  const driveBtn = document.getElementById('driveBtn');

  if (whatsappTop) whatsappTop.href = whatsappUrl;
  if (whatsappBottom) whatsappBottom.href = whatsappUrl;
  if (emailBtn) emailBtn.href = `mailto:${siteConfig.email}`;
  if (driveBtn) driveBtn.href = siteConfig.driveUrl;
})();
