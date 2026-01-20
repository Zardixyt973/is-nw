// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Fade-in basic
  document.querySelectorAll('.hero, .section, .page-wrap').forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(10px)';
    setTimeout(() => {
      el.style.transition = '600ms cubic-bezier(.2,.9,.3,1)';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 120 + i * 80);
  });

  // MTA button safety: show confirm on desktop before opening mtasa://
  const mtaBtn = document.querySelector('.btn-mta');
  if (mtaBtn) {
    mtaBtn.addEventListener('click', (e) => {
      // If you want to prevent opening and show a message until ready, uncomment next lines:
      // e.preventDefault();
      // alert('الـ IP سيظهر قريبا. تابع الديسكورد للإطلاق الرسمي.');
      // return;

      // Otherwise, show a small confirm on non-mobile
      const isMobile = /Mobi|Android/i.test(navigator.userAgent);
      if (!isMobile) {
        const ok = confirm('فتح MTA سيحاول تشغيل عميل MTA: هل تريد المتابعة؟');
        if (!ok) e.preventDefault();
      }
    });
  }
});
