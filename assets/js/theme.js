
// Theme toggle with localStorage + prefers-color-scheme
(function(){
  const html = document.documentElement;
  const key = "pref-theme";
  const stored = localStorage.getItem(key);
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if(stored){
    html.setAttribute('data-theme', stored);
  }else{
    html.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }
  window.__toggleTheme = function(){
    const cur = html.getAttribute('data-theme') || 'light';
    const next = (cur === 'light') ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem(key, next);
  }
})();
