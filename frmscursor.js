async function loadComponentWithAssets(containerId, htmlUrl) {
  try {
    const response = await fetch(htmlUrl);
    if (!response.ok) throw new Error('Network response was not ok');
    const html = await response.text();
    
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = html;

    const cssUrl = 'https://cdn.jsdelivr.net/gh/vexikoff/firemos@main/stylefrms.css';
    if (!document.querySelector(`link[href="${cssUrl}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = cssUrl;
      document.head.appendChild(link);
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/vexikoff/firemos@main/scriptfrms.js';
    script.defer = true;
    document.body.appendChild(script);
  } catch (err) {
    console.error(err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    loadComponentWithAssets('frms', 'https://cdn.jsdelivr.net/gh/vexikoff/firemos@main/indexfrms.html');
  });
} else {
  loadComponentWithAssets('frms', 'https://cdn.jsdelivr.net/gh/vexikoff/firemos@main/indexfrms.html');
}
