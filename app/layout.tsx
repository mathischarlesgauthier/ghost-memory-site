import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ghost-memory.com"),
  title: "Ghost Skills — the collective memory for coding agents",
  description:
    "Ghost Skills taps the collective memory of thousands of developers — the fixes, the shortcuts, the traps they learned the hard way — and feeds the right one into your agent as you code. Ranked by what actually works. Measured, not upvoted.",
  icons: { icon: "/ghost-logo.png" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

// Le seul JS de la page (hors framework, retiré au build) : bouton copier +
// reveals au scroll + compteurs. Placé en <head> et ajoute `.js` sur <html>
// AVANT le rendu du body → pas de flash (les états cachés sont gatés par `.js`).
const GS_SCRIPT = `
document.documentElement.className += ' js';
function ghostCopy(btn){
  var restore=btn.getAttribute('data-label')||btn.textContent;
  navigator.clipboard.writeText('uv tool install git+https://github.com/mathischarlesgauthier/ghost-memory').then(function(){
    btn.textContent='copied';setTimeout(function(){btn.textContent=restore;},1600);
  });
}
(function(){
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function countUp(el){
    var target=parseInt(el.getAttribute('data-count'),10);if(!target)return;
    if(reduce){el.textContent=target.toLocaleString('en-US');return;}
    var dur=1300,t0=null;
    function step(ts){if(!t0)t0=ts;var p=Math.min((ts-t0)/dur,1);
      el.textContent=Math.floor(target*(1-Math.pow(1-p,3))).toLocaleString('en-US');
      if(p<1)requestAnimationFrame(step);else el.textContent=target.toLocaleString('en-US');}
    requestAnimationFrame(step);
  }
  function start(){
    var sel='[data-reveal],[data-term],[data-in-svg],[data-count]';
    if(!('IntersectionObserver' in window)){
      document.querySelectorAll(sel).forEach(function(el){el.setAttribute('data-in','1');
        if(el.hasAttribute('data-count'))countUp(el);});
      return;
    }
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){if(!e.isIntersecting)return;
        e.target.setAttribute('data-in','1');
        if(e.target.hasAttribute('data-count'))countUp(e.target);
        e.target.querySelectorAll('[data-count]').forEach(countUp);
        io.unobserve(e.target);});
    },{threshold:0.12,rootMargin:'0px 0px -6% 0px'});
    document.querySelectorAll(sel).forEach(function(el){io.observe(el);});
  }
  if(document.readyState!=='loading')start();
  else document.addEventListener('DOMContentLoaded',start);
})();
(function(){
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce)return;
  function initTabs(){
    var rs=['gsph0','gsph1','gsph2'].map(function(id){return document.getElementById(id);});
    if(rs.some(function(r){return !r;}))return;
    var timer;
    function advance(){var i=0;for(var k=0;k<rs.length;k++){if(rs[k].checked){i=k;break;}}
      rs[(i+1)%rs.length].checked=true;}
    function schedule(){clearInterval(timer);timer=setInterval(advance,6000);}
    rs.forEach(function(r){r.addEventListener('change',schedule);});
    schedule();
  }
  if(document.readyState!=='loading')initTabs();
  else document.addEventListener('DOMContentLoaded',initTabs);
})();
(function(){
  function initDevice(){
    var form=document.getElementById('gs-device-form');
    if(!form)return;
    var API='https://ghost-backend-production-f062.up.railway.app';
    var input=document.getElementById('gs-device-code');
    var btn=document.getElementById('gs-device-submit');
    var status=document.getElementById('gs-device-status');
    var card=document.getElementById('gs-device-card');
    var ok=document.getElementById('gs-device-success');
    function fmt(v){v=(v||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,8);return v.length>4?v.slice(0,4)+'-'+v.slice(4):v;}
    function say(m,k){status.textContent=m||'';if(k)status.setAttribute('data-kind',k);else status.removeAttribute('data-kind');}
    try{var qs=new URLSearchParams(location.search);var pre=qs.get('code')||qs.get('user_code');if(pre)input.value=fmt(pre);}catch(e){}
    input.addEventListener('input',function(){input.value=fmt(input.value);});
    form.addEventListener('submit',function(ev){
      ev.preventDefault();
      var code=fmt(input.value);
      if(!/^[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(code)){say('Enter the 8-character code from your terminal, like K7Q2-9FMX.','err');input.focus();return;}
      btn.disabled=true;var restore=btn.textContent;btn.textContent='Authorizing...';say('','');
      fetch(API+'/auth/device/verify',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({user_code:code})})
        .then(function(r){return r.json().then(function(b){return {s:r.status,b:b};},function(){return {s:r.status,b:{}};});})
        .then(function(res){
          if(res.s===200){if(card)card.hidden=true;if(ok){ok.hidden=false;try{ok.scrollIntoView({block:'center'});}catch(e){}}return;}
          btn.disabled=false;btn.textContent=restore;
          if(res.s===404){say('That code is invalid, expired, or already used. Run ghost login again to get a fresh one.','err');}
          else if(res.s===503){say('The Ghost network is temporarily unavailable. Give it a moment and try again.','err');}
          else if(res.s===429){say('Too many attempts. Wait a few seconds, then try again.','err');}
          else{say((res.b&&res.b.detail)?String(res.b.detail):'Something went wrong. Please try again.','err');}
        })
        .catch(function(){btn.disabled=false;btn.textContent=restore;say('Could not reach Ghost. Check your connection and try again.','err');});
    });
  }
  if(document.readyState!=='loading')initDevice();
  else document.addEventListener('DOMContentLoaded',initDevice);
})();
(function(){
  function initSkills(){
    var root=document.getElementById('gs-skills');
    if(!root)return;
    var search=document.getElementById('gs-sk-search');
    var list=document.getElementById('gs-sk-list');
    var empty=document.getElementById('gs-sk-empty');
    var cards=[].slice.call(list.querySelectorAll('.gs-sk-card'));
    var chips=[].slice.call(root.querySelectorAll('.gs-sk-chip'));
    var active={filter:'all',value:''};
    function apply(){
      var q=(search.value||'').trim().toLowerCase();
      var shown=0;
      cards.forEach(function(c){
        var okText=!q||(c.getAttribute('data-text')||'').indexOf(q)>=0;
        var okFilter=true;
        if(active.filter==='stack')okFilter=(c.getAttribute('data-stack')||'')===active.value;
        else if(active.filter==='tag')okFilter=(','+(c.getAttribute('data-tags')||'')+',').indexOf(','+active.value+',')>=0;
        var show=okText&&okFilter;
        c.style.display=show?'':'none';
        if(show)shown++;
      });
      empty.hidden=shown>0;
    }
    search.addEventListener('input',apply);
    chips.forEach(function(chip){
      chip.addEventListener('click',function(){
        chips.forEach(function(x){x.classList.remove('gs-sk-chip-on');});
        chip.classList.add('gs-sk-chip-on');
        active={filter:chip.getAttribute('data-filter'),value:chip.getAttribute('data-value')};
        apply();
      });
    });
  }
  if(document.readyState!=='loading')initSkills();
  else document.addEventListener('DOMContentLoaded',initSkills);
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: GS_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
