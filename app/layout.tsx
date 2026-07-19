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
