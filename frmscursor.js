async function loadComponentWithAssets(containerId, htmlUrl) {
  const response = await fetch(htmlUrl);
  const html = await response.text();
  document.getElementById(containerId).innerHTML = html;

  if (!document.querySelector('link[href="https://raw.githubusercontent.com/vexikoff/firemos/refs/heads/main/stylefrms.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://raw.githubusercontent.com/vexikoff/firemos/refs/heads/main/stylefrms.css';
    document.head.appendChild(link);
  }

  const script = document.createElement('script');
  script.src = 'https://raw.githubusercontent.com/vexikoff/firemos/refs/heads/main/scriptfrms.js';
  script.defer = true;
  document.body.appendChild(script);
}

loadComponentWithAssets('frms', 'https://raw.githubusercontent.com/vexikoff/firemos/refs/heads/main/indexfrms.html');
