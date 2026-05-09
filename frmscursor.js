async function loadComponentWithAssets(containerId, htmlUrl) {
  const response = await fetch(htmlUrl);
  const html = await response.text();
  document.getElementById(containerId).innerHTML = html;

  if (!document.querySelector('link[href="https://cdn.jsdelivr.net/gh/vexikoff/firemos@main/stylefrms.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/vexikoff/firemos@main/stylefrms.css';
    document.head.appendChild(link);
  }

  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/gh/vexikoff/firemos@main/scriptfrms.js';
  script.defer = true;
  document.body.appendChild(script);
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponentWithAssets('frms', 'https://cdn.jsdelivr.net/gh/vexikoff/firemos@main/indexfrms.html');
});
