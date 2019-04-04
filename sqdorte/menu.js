window.onload = function() {

  arts = ['artegenerativafoda', 'generartistic', 'selgnairt'];
  ul = document.getElementById('ul');

  arts.forEach(art => {
    a = document.createElement('A');
    a.setAttribute('onclick', `loadArt('${art}')`)
    a.innerHTML = art

    li = document.createElement('LI');
    li.appendChild(a);

    ul.appendChild(li);
  })
}

function injectScript(src) {
  script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function loadArt(name) {
  document.title = name;
  document.body.removeChild(document.getElementById('ul'));
  
  document.getElementById('style').setAttribute('href', 'p5.css');
  
  injectScript(`${name}.js`);
  injectScript('https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.min.js');
  
  document.head.removeChild(document.getElementById('script'));
}
