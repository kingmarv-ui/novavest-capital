/* NovaVest Capital - Shared Frontend Logic (Prototype) */
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  }
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => mobileMenu?.classList.add('hidden'));
  });
  const path = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href && (path.endsWith(href) || (path.endsWith('/') && href.includes('index.html')))) {
      link.classList.add('active');
    }
  });
  document.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      const group = btn.dataset.tabGroup || 'default';
      document.querySelectorAll(`[data-tab-group="${group}"]`).forEach(b => {
        b.classList.remove('active', 'text-white', 'bg-blue-500/20');
        b.classList.add('text-slate-400');
      });
      btn.classList.add('active', 'text-white', 'bg-blue-500/20');
      btn.classList.remove('text-slate-400');
      document.querySelectorAll(`[data-panel-group="${group}"]`).forEach(panel => panel.classList.add('hidden'));
      const panel = document.getElementById(target);
      if (panel) panel.classList.remove('hidden');
    });
  });
  const chartEl = document.getElementById('demo-performance-chart');
  if (chartEl) drawDemoChart(chartEl);
  initRegistrationFlow();
});
function drawDemoChart(container) {
  const width = container.clientWidth || 400;
  const height = 180;
  const points = [40, 55, 48, 62, 58, 75, 70, 85, 78, 92, 88, 105];
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const stepX = width / (points.length - 1);
  let d = '';
  points.forEach((p, i) => {
    const x = i * stepX;
    const y = height - 20 - ((p - min) / range) * (height - 40);
    d += (i === 0 ? 'M' : 'L') + x + ',' + y;
  });
  container.innerHTML = `<svg width="100%" height="${height}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none"><defs><linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3b82f6" stop-opacity="0.35"/><stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/></linearGradient></defs><path d="${d} L${width},${height} L0,${height} Z" fill="url(#chartGrad)"/><path d="${d}" fill="none" stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}
function initRegistrationFlow() {
  const form = document.getElementById('registration-form');
  if (!form) return;
  let currentStep = 1;
  const totalSteps = 7;
  const showStep = (n) => {
    document.querySelectorAll('[data-reg-step]').forEach(el => {
      el.classList.toggle('hidden', parseInt(el.dataset.regStep) !== n);
    });
    document.querySelectorAll('[data-step-indicator]').forEach(el => {
      const s = parseInt(el.dataset.stepIndicator);
      el.classList.remove('active', 'done', 'pending');
      if (s < n) el.classList.add('done');
      else if (s === n) el.classList.add('active');
      else el.classList.add('pending');
    });
    const progress = document.getElementById('reg-progress');
    if (progress) progress.style.width = ((n - 1) / (totalSteps - 1) * 100) + '%';
  };
  document.getElementById('reg-next')?.addEventListener('click', () => {
    if (currentStep < totalSteps) { currentStep++; showStep(currentStep); }
  });
  document.getElementById('reg-prev')?.addEventListener('click', () => {
    if (currentStep > 1) { currentStep--; showStep(currentStep); }
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('This is a frontend prototype. No data is submitted or stored. In production this would connect to a secure backend for identity verification and account creation.');
  });
  showStep(1);
}
function handleDemoLogin(e) {
  e.preventDefault();
  alert('Demo only — no credentials are verified or stored. Redirecting to illustrative dashboard.');
  window.location.href = 'dashboard.html';
}
