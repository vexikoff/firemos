async function loadComponentWithAssets(containerId, htmlUrl) {
  const response = await fetch(htmlUrl);
  const html = await response.text();
  document.getElementById(containerId).innerHTML = html;

  if (!document.querySelector('link[href="stylefrms.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'stylefrms.css';
    document.head.appendChild(link);
  }

  const script = document.createElement('script');
  script.src = 'scriptfrms.js';
  script.defer = true;
  document.body.appendChild(script);
}

loadComponentWithAssets('frms', 'indexfrms.html');
