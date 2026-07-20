// Page Earn — portée depuis Claude Design « Ghost Skills Earn.dc.html », même
// design system v7. Markup dc converti en statique ; liens → routes du site ;
// style-hover → classes gsh partagées ; reveals/compteurs via l'observer (layout).
const GITHUB = "https://github.com/mathischarlesgauthier/ghost-memory";

export const EARN_HTML = `
<div style="min-height:100vh;background:#05070d;overflow-x:hidden;">

  <div style="position:relative;background:linear-gradient(180deg,#04070f 0%,#050d24 30%,#0a2258 62%,#1c4bb0 86%,#3a71dd 100%);overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(90% 50% at 50% 108%,rgba(140,190,255,.35),transparent 70%);pointer-events:none;"></div>

    <header style="position:relative;z-index:5;">
      <div style="display:flex;align-items:center;gap:16px;max-width:1360px;margin:0 auto;padding:18px 28px;box-sizing:border-box;">
        <a href="/" style="display:flex;align-items:center;gap:9px;white-space:nowrap;">
          <img src="/ghost-logo.png" alt="Ghost Skills" style="width:24px;height:auto;display:block;filter:drop-shadow(0 3px 8px rgba(0,0,20,.5));">
          <span style="font-family:'IBM Plex Mono',monospace;font-size:13.5px;font-weight:600;letter-spacing:.02em;color:#f2f6ff;">Ghost Skills</span>
        </a>
        <nav class="gs-nav-links" style="display:flex;gap:18px;flex:1;justify-content:center;flex-wrap:wrap;">
          <a href="/#problem" style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.08em;color:#a8bce4;white-space:nowrap;">THE PROBLEM</a>
          <a href="/#features" style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.08em;color:#a8bce4;white-space:nowrap;">WHY US</a>
          <a href="/skills" style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.08em;color:#a8bce4;white-space:nowrap;">SKILLS</a>
          <a href="/#pricing" style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.08em;color:#a8bce4;white-space:nowrap;">PRICING</a>
          <a href="#pool" style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.08em;color:#f2f6ff;white-space:nowrap;border-bottom:1px solid #8fb8ff;padding-bottom:2px;">EARN</a>
        </nav>
        <div style="display:flex;align-items:center;gap:8px;white-space:nowrap;">
          <a href="/docs" style="font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.06em;border:1px solid rgba(180,205,255,.35);border-radius:3px;padding:7px 12px;color:#c9dcff;" class="gsh1">READ THE DOC</a>
          <a href="${GITHUB}" target="_blank" rel="noopener" style="font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.06em;border:1px solid rgba(180,205,255,.35);border-radius:3px;padding:7px 12px;color:#e8efff;background:rgba(10,20,50,.4);" class="gsh1">GITHUB ↗</a>
        </div>
      </div>
    </header>

    <section style="position:relative;z-index:4;display:flex;flex-direction:column;align-items:center;text-align:center;padding:90px 28px 150px;box-sizing:border-box;">
      <div data-reveal="" style="display:inline-flex;align-items:center;gap:10px;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.12em;color:#cfe0ff;border:1px solid rgba(160,195,255,.3);background:rgba(8,18,48,.55);padding:8px 16px;">
        <span style="width:7px;height:7px;background:#8fb8ff;animation:gsPulse 2.2s ease-in-out infinite;"></span>
        <span>CONTRIBUTOR REVENUE SHARE — ACTIVE</span>
      </div>
      <h1 data-reveal="" style="margin:34px 0 0;max-width:900px;font-size:clamp(44px,6.6vw,88px);font-weight:500;letter-spacing:-0.035em;line-height:1.04;color:#e9f0ff;text-wrap:balance;">Contribute skills. <em style="font-family:'Instrument Serif',serif;font-style:italic;font-weight:400;color:#a9c9ff;letter-spacing:-0.01em;">Get paid.</em></h1>
      <p data-reveal="2" style="margin:28px 0 0;max-width:660px;font-size:17.5px;line-height:1.7;color:#b7c7ea;text-wrap:pretty;">When you're on a paid plan, you don't just use the collective memory — you earn from it. Publish skills that work, and a share of Ghost Skills' revenue comes back to you.</p>
      <div data-reveal="3" style="margin-top:40px;display:flex;gap:12px;flex-wrap:wrap;justify-content:center;">
        <a href="#pool" style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:600;letter-spacing:.06em;background:#f2f6ff;color:#0a1330;border:1px solid #f2f6ff;border-radius:3px;padding:14px 26px;display:inline-block;" class="gsh3">HOW THE POOL WORKS ↓</a>
        <a href="/#pricing" style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:600;letter-spacing:.06em;background:rgba(6,12,30,.65);color:#e8efff;border:1px solid rgba(170,200,255,.35);border-radius:3px;padding:14px 26px;display:inline-block;" class="gsh4">SEE PRICING</a>
      </div>
      <div data-reveal="4" style="margin-top:34px;display:flex;gap:10px;flex-wrap:wrap;justify-content:center;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.08em;color:#cfe0ff;">
        <span style="border:1px solid rgba(170,200,255,.3);padding:7px 14px;background:rgba(8,16,42,.5);">50% REVENUE SHARED</span>
        <span style="border:1px solid rgba(170,200,255,.3);padding:7px 14px;background:rgba(8,16,42,.5);">PAID FOR LIFT, NOT UPLOADS</span>
        <span style="border:1px solid rgba(170,200,255,.3);padding:7px 14px;background:rgba(8,16,42,.5);">MONTHLY PAYOUTS FROM €50</span>
      </div>
    </section>
  </div>

  <section id="pool" style="position:relative;background:linear-gradient(180deg,#3a71dd 0%,#16357c 34%,#081228 68%,#05070d 100%);padding:110px 28px 40px;box-sizing:border-box;overflow:hidden;">
    <div style="max-width:1080px;margin:0 auto;">
      <div style="display:flex;flex-direction:column;align-items:center;text-align:center;">
        <div data-reveal="" style="display:flex;align-items:center;gap:12px;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.14em;color:#cfe0ff;">
          <span style="width:7px;height:7px;background:#8fb8ff;"></span><span>THE SHARE RATE</span>
        </div>
        <h2 data-reveal="2" style="margin:22px 0 0;max-width:820px;font-size:clamp(32px,4.4vw,56px);font-weight:500;letter-spacing:-0.03em;line-height:1.1;color:#eaf1ff;text-wrap:balance;">We share <em style="font-family:'Instrument Serif',serif;font-style:italic;font-weight:400;color:#a9c9ff;"><span data-count="50">50</span>%</em> of subscription revenue with contributors.</h2>
      </div>
      <div style="margin-top:64px;display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:56px;align-items:center;">
        <div data-reveal="" data-in-svg="" style="display:flex;justify-content:center;">
          <svg aria-hidden="true" width="360" height="320" viewBox="0 0 340 300" style="max-width:100%;height:auto;pointer-events:none;">
            <defs><filter id="geF1" x="-15%" y="-15%" width="130%" height="130%"><feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="6" result="n"></feTurbulence><feDisplacementMap in="SourceGraphic" in2="n" scale="2.4"><animate attributeName="scale" values="2;3.4;2" dur="1.4s" repeatCount="indefinite"></animate></feDisplacementMap></filter></defs>
            <g filter="url(#geF1)" fill="none" stroke="#dfe6f2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path class="gs-d gs-t1" pathLength="1" d="M118,18 L222,14 L226,58 L122,62 Z" style="opacity:.9;"></path>
              <path d="M132,32 L188,30 M133,44 L210,42" style="opacity:.4;"></path>
              <path d="M170,66 L170,96" style="opacity:.6;stroke-dasharray:.12 .12;animation:gsMarch 3s linear infinite;" pathLength="1"></path>
              <path class="gs-d gs-t2" pathLength="1" d="M170,96 C170,116 120,112 84,132" style="opacity:.75;"></path>
              <path class="gs-d gs-t2" pathLength="1" d="M170,96 C170,116 220,112 256,132" style="opacity:.75;"></path>
              <path class="gs-d gs-t3" pathLength="1" d="M34,146 L134,140 L130,206 C110,218 62,220 40,208 Z" style="opacity:.95;"></path>
              <path d="M46,166 Q84,158 122,164 L120,198 Q86,208 50,200 Z" fill="rgba(143,184,255,.22)" stroke="#8fb8ff" style="transform-box:fill-box;transform-origin:bottom;animation:gsFill 2.4s ease-in-out both;"></path>
              <path class="gs-d gs-t4" pathLength="1" d="M212,146 L306,142 L302,204 C284,214 240,216 220,206 Z" style="opacity:.6;"></path>
              <path d="M84,150 C82,154 82,157 84,158 C86,157 86,154 84,150" stroke="#8fb8ff" style="animation:gsDrop 2s ease-in infinite;"></path>
              <path d="M96,148 C94,152 94,155 96,156 C98,155 98,152 96,148" stroke="#8fb8ff" style="animation:gsDrop 2.6s .9s ease-in infinite;"></path>
              <g style="animation:gsBob 4.5s ease-in-out infinite;">
                <path class="gs-d gs-t5" pathLength="1" d="M66,120 C62,106 64,90 73,83 C80,77 93,78 99,85 C105,92 107,106 104,120" style="opacity:.9;"></path>
                <circle cx="79" cy="98" r="2.4" fill="#dfe6f2" stroke="none"></circle>
                <circle cx="92" cy="97" r="2.4" fill="#dfe6f2" stroke="none"></circle>
                <path d="M81,106 Q85,109 89,105" style="opacity:.8;"></path>
              </g>
              <path d="M20,116 L20,124 M16,120 L24,120" stroke="#8fb8ff" stroke-width="1.5" style="animation:gsSpark 2.6s ease-in-out infinite;transform-box:fill-box;transform-origin:center;"></path>
              <path d="M312,104 L312,112 M308,108 L316,108" stroke="#8fb8ff" stroke-width="1.4" style="animation:gsSpark 3.1s .8s ease-in-out infinite;transform-box:fill-box;transform-origin:center;"></path>
              <text x="172" y="42" text-anchor="middle" fill="#8fb8ff" stroke="none" style="font-family:'IBM Plex Mono',monospace;font-size:11px;">subscriptions</text>
              <text x="84" y="242" text-anchor="middle" fill="#a9c9ff" stroke="none" style="font-family:'IBM Plex Mono',monospace;font-size:11px;">contributor pool · 50%</text>
              <text x="260" y="242" text-anchor="middle" fill="#5d6f9c" stroke="none" style="font-family:'IBM Plex Mono',monospace;font-size:11px;">running ghost skills</text>
              <text x="170" y="282" text-anchor="middle" fill="#5d6f9c" stroke="none" style="font-family:'IBM Plex Mono',monospace;font-size:11px;">half of every month, back to you</text>
            </g>
          </svg>
        </div>
        <div>
          <h3 data-reveal="" style="margin:0;font-size:clamp(24px,2.8vw,32px);font-weight:500;letter-spacing:-0.02em;color:#eaf1ff;">How the pool works.</h3>
          <div style="margin-top:28px;display:flex;flex-direction:column;gap:20px;">
            <div data-reveal="" style="display:flex;gap:16px;">
              <span style="font-family:'IBM Plex Mono',monospace;font-size:12px;color:#8fb8ff;padding-top:3px;">01</span>
              <p style="margin:0;font-size:16px;line-height:1.65;color:#cfd8ec;text-wrap:pretty;">Half of what subscribers pay each month goes into a contributor pool.</p>
            </div>
            <div data-reveal="2" style="display:flex;gap:16px;">
              <span style="font-family:'IBM Plex Mono',monospace;font-size:12px;color:#8fb8ff;padding-top:3px;">02</span>
              <p style="margin:0;font-size:16px;line-height:1.65;color:#cfd8ec;text-wrap:pretty;">Your share of that pool = your skills' measured impact ÷ everyone's.</p>
            </div>
            <div data-reveal="3" style="display:flex;gap:16px;">
              <span style="font-family:'IBM Plex Mono',monospace;font-size:12px;color:#8fb8ff;padding-top:3px;">03</span>
              <p style="margin:0;font-size:16px;line-height:1.65;color:#cfd8ec;text-wrap:pretty;">Impact = lift (how much a skill improves a task) × adoption (how many developers it helped).</p>
            </div>
          </div>
          <p data-reveal="3" style="margin:36px 0 0;padding:20px 24px;border-left:2px solid #8fb8ff;background:rgba(60,110,220,.1);font-size:16.5px;line-height:1.65;color:#e9f0ff;text-wrap:pretty;">We pay for lift, not uploads. You can't game a measured result — so your <em style="font-family:'Instrument Serif',serif;font-style:italic;color:#a9c9ff;">best</em> skill earns, not your <em style="font-family:'Instrument Serif',serif;font-style:italic;color:#a9c9ff;">most</em> skills.</p>
        </div>
      </div>
    </div>
  </section>

  <section style="background:#05070d;padding:70px 28px 0;box-sizing:border-box;">
    <div data-reveal="" data-term="" style="max-width:820px;margin:0 auto;background:#080c17;border:1px solid rgba(160,190,255,.16);border-radius:6px;overflow:hidden;box-shadow:0 34px 100px rgba(0,0,0,.65), 0 0 140px rgba(60,110,220,.08);">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;padding:13px 16px;border-bottom:1px solid rgba(160,190,255,.1);background:#0a101f;">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="width:11px;height:11px;border-radius:50%;background:#1c2540;"></span>
          <span style="width:11px;height:11px;border-radius:50%;background:#1c2540;"></span>
          <span style="width:11px;height:11px;border-radius:50%;background:#1c2540;"></span>
        </div>
        <span style="font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.14em;color:#8fb8ff;border:1px solid rgba(143,184,255,.4);padding:4px 10px;">EXAMPLE CALCULATION</span>
      </div>
      <div style="padding:30px 34px 32px;font-family:'IBM Plex Mono',monospace;font-size:15px;line-height:1.9;">
        <div style="color:#9cb4e2;">Say the pool is <span style="color:#e9f0ff;">€10,000</span> this month.</div>
        <div style="color:#9cb4e2;">Your skills accounted for <span style="color:#e9f0ff;">2%</span> of all measured impact.</div>
        <div style="margin-top:14px;color:#8fb8ff;font-weight:600;font-size:19px;">→ Your payout: €<span data-count="200">200</span><span style="display:inline-block;width:9px;height:19px;background:#8fb8ff;margin-left:8px;vertical-align:-2px;animation:gsBlink 1.1s steps(1) infinite;"></span></div>
      </div>
    </div>
    <p data-reveal="" style="margin:16px auto 0;max-width:820px;text-align:center;font-family:'IBM Plex Mono',monospace;font-size:12px;color:#5d6f9c;">Illustrative. Real payouts scale with the pool and your measured lift.</p>
  </section>

  <section style="margin-top:120px;background:#e9eaec;color:#10141f;padding:110px 28px;box-sizing:border-box;">
    <div style="max-width:1200px;margin:0 auto;">
      <div style="display:flex;flex-direction:column;align-items:center;text-align:center;">
        <div data-reveal="" style="display:flex;align-items:center;gap:12px;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.14em;color:#39415a;">
          <span style="width:7px;height:7px;background:#2453c4;"></span><span>GETTING PAID</span>
        </div>
        <h2 data-reveal="2" style="margin:22px 0 0;font-size:clamp(32px,4.2vw,52px);font-weight:500;letter-spacing:-0.03em;line-height:1.1;text-wrap:balance;">Getting <em style="font-family:'Instrument Serif',serif;font-style:italic;font-weight:400;color:#2453c4;">paid</em>.</h2>
      </div>
      <div data-reveal="" data-in-svg="" style="margin-top:52px;display:flex;justify-content:center;">
        <svg aria-hidden="true" width="620" height="150" viewBox="0 0 620 150" style="max-width:100%;height:auto;pointer-events:none;">
          <defs><filter id="geF2" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="12" result="n"></feTurbulence><feDisplacementMap in="SourceGraphic" in2="n" scale="2.2"><animate attributeName="scale" values="1.8;3.2;1.8" dur="1.5s" repeatCount="indefinite"></animate></feDisplacementMap></filter></defs>
          <g filter="url(#geF2)" fill="none" stroke="#141a2b" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <path class="gs-d gs-t1" pathLength="1" d="M24,96 L104,92 M24,96 L24,58 M104,92 L104,54" style="opacity:.7;"></path>
            <path class="gs-d gs-t2" pathLength="1" d="M24,58 Q64,42 104,54" style="opacity:.85;"></path>
            <path d="M30,90 Q64,80 98,86 L97,92 L30,96 Z" fill="rgba(36,83,196,.18)" stroke="none"></path>
            <path class="gs-d gs-t2" pathLength="1" d="M40,74 L88,70" stroke="#2453c4" style="stroke-dasharray:.1 .1;animation:gsMarch 4s linear infinite;"></path>
            <text x="64" y="122" text-anchor="middle" fill="#5a6170" stroke="none" style="font-family:'IBM Plex Mono',monospace;font-size:11px;">€50 threshold</text>
            <path d="M132,74 C160,68 178,68 202,72" style="opacity:.6;stroke-dasharray:.06 .07;animation:gsMarch 5s linear infinite;" pathLength="1"></path>
            <path class="gs-d gs-t3" pathLength="1" d="M194,66 L206,72 L195,79" style="opacity:.7;"></path>
            <g style="animation:gsWiggle 6s ease-in-out infinite;transform-box:fill-box;transform-origin:center;">
              <path class="gs-d gs-t4" pathLength="1" d="M238,50 L322,46 L326,102 L242,106 Z" style="opacity:.85;"></path>
              <path class="gs-d gs-t4" pathLength="1" d="M238,50 L282,76 L322,46" style="opacity:.7;"></path>
            </g>
            <text x="282" y="128" text-anchor="middle" fill="#5a6170" stroke="none" style="font-family:'IBM Plex Mono',monospace;font-size:11px;">your details, when ready</text>
            <path d="M352,74 C380,68 398,68 422,72" style="opacity:.6;stroke-dasharray:.06 .07;animation:gsMarch 5s linear infinite;" pathLength="1"></path>
            <path class="gs-d gs-t5" pathLength="1" d="M414,66 L426,72 L415,79" style="opacity:.7;"></path>
            <path class="gs-d gs-t6" pathLength="1" d="M458,42 L560,38 L564,104 L462,108 Z" style="opacity:.85;"></path>
            <path d="M472,56 L512,54 M473,68 L546,64 M474,80 L540,76" style="opacity:.4;"></path>
            <path class="gs-d gs-t7" pathLength="1" d="M524,90 L534,100 L552,74" stroke="#2453c4" stroke-width="2.6"></path>
            <path d="M580,44 L580,54 M575,49 L585,49" stroke="#2453c4" style="animation:gsSpark 2.4s ease-in-out infinite;transform-box:fill-box;transform-origin:center;"></path>
            <path d="M444,96 L444,104 M440,100 L448,100" stroke="#2453c4" style="animation:gsSpark 3s 1s ease-in-out infinite;transform-box:fill-box;transform-origin:center;"></path>
            <text x="511" y="130" text-anchor="middle" fill="#5a6170" stroke="none" style="font-family:'IBM Plex Mono',monospace;font-size:11px;">monthly payout</text>
          </g>
        </svg>
      </div>
      <div style="margin-top:52px;display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:0;border:1px solid rgba(16,20,31,.18);background:#f2f2f1;">
        <div data-reveal="" style="padding:34px 32px;border-right:1px solid rgba(16,20,31,.14);" class="gsh6">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;color:#5a6170;">01</div>
          <div style="margin-top:16px;font-size:18px;font-weight:600;letter-spacing:-0.01em;">Reach the threshold</div>
          <p style="margin:10px 0 0;font-size:14.5px;line-height:1.65;color:#3c4356;text-wrap:pretty;">Payouts start once your balance passes <span style="font-family:'IBM Plex Mono',monospace;font-size:.9em;color:#2453c4;font-weight:600;">€50</span>. Below that, it rolls over to next month.</p>
        </div>
        <div data-reveal="2" style="padding:34px 32px;border-right:1px solid rgba(16,20,31,.14);" class="gsh6">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;color:#5a6170;">02</div>
          <div style="margin-top:16px;font-size:18px;font-weight:600;letter-spacing:-0.01em;">Add your details — when you're ready</div>
          <p style="margin:10px 0 0;font-size:14.5px;line-height:1.65;color:#3c4356;text-wrap:pretty;">To receive money, add your identity and bank details in your account. It's optional: you can contribute and build reputation without it. You only add them when you want to cash out.</p>
        </div>
        <div data-reveal="3" style="padding:34px 32px;" class="gsh6">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;color:#5a6170;">03</div>
          <div style="margin-top:16px;font-size:18px;font-weight:600;letter-spacing:-0.01em;">Monthly payout</div>
          <p style="margin:10px 0 0;font-size:14.5px;line-height:1.65;color:#3c4356;text-wrap:pretty;">Balances above the threshold are paid out monthly.</p>
        </div>
      </div>
      <p data-reveal="" style="margin:30px auto 0;text-align:center;font-family:'IBM Plex Mono',monospace;font-size:13px;letter-spacing:.02em;color:#39415a;max-width:680px;line-height:1.8;">No bank details, no problem — you still get the reputation. You add them the day you decide to get paid.</p>
    </div>
  </section>

  <section style="background:#05070d;padding:130px 28px 0;box-sizing:border-box;">
    <div style="max-width:1080px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:56px;align-items:center;">
      <div>
        <div data-reveal="" style="display:flex;align-items:center;gap:12px;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.14em;color:#8ba0cc;">
          <span style="width:7px;height:7px;background:#8fb8ff;"></span><span>REPUTATION</span>
        </div>
        <h2 data-reveal="2" style="margin:22px 0 0;font-size:clamp(30px,3.8vw,46px);font-weight:500;letter-spacing:-0.03em;line-height:1.12;color:#e9f0ff;text-wrap:balance;">Even before the money, <em style="font-family:'Instrument Serif',serif;font-style:italic;font-weight:400;color:#a9c9ff;">you build your name</em>.</h2>
        <p data-reveal="3" style="margin:24px 0 0;font-size:16.5px;line-height:1.7;color:#9cb4e2;text-wrap:pretty;">Public profile: every skill, its install count, its measured lift.</p>
        <p data-reveal="3" style="margin:16px 0 0;font-size:16.5px;line-height:1.7;color:#cfd8ec;text-wrap:pretty;">"1,200 developers rely on your skill · avg lift −38%" — a résumé no interview can argue with.</p>
      </div>
      <div data-reveal="2" data-in-svg="">
        <div style="display:flex;justify-content:flex-end;margin-bottom:10px;">
          <span style="font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.14em;color:#5d6f9c;border:1px solid rgba(160,190,255,.25);padding:5px 12px;">ILLUSTRATIVE EXAMPLE</span>
        </div>
        <div style="background:#080b14;border:1px solid rgba(160,190,255,.16);border-radius:6px;padding:28px 30px;box-shadow:0 30px 90px rgba(0,0,0,.6);">
          <div style="display:flex;align-items:center;gap:14px;">
            <img src="/ghost-logo.png" alt="" style="width:34px;height:auto;animation:gsFloat 5s ease-in-out infinite;">
            <span><span style="display:block;font-size:16px;font-weight:600;color:#e9f0ff;">your-handle</span><span style="display:block;font-family:'IBM Plex Mono',monospace;font-size:12px;color:#5d6f9c;">contributor since 2026</span></span>
          </div>
          <div style="margin-top:22px;display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div style="border:1px solid rgba(160,190,255,.14);border-radius:4px;padding:16px 18px;">
              <div style="font-family:'IBM Plex Mono',monospace;font-size:26px;font-weight:600;color:#e9f0ff;"><span data-count="1200">1,200</span></div>
              <div style="margin-top:4px;font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.08em;color:#5d6f9c;">DEVELOPERS RELY ON YOUR SKILL</div>
            </div>
            <div style="border:1px solid rgba(143,184,255,.4);border-radius:4px;padding:16px 18px;background:rgba(60,110,220,.08);">
              <div style="font-family:'IBM Plex Mono',monospace;font-size:26px;font-weight:600;color:#8fb8ff;">−<span data-count="38">38</span>%</div>
              <div style="margin-top:4px;font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.08em;color:#5d6f9c;">AVG MEASURED LIFT</div>
            </div>
          </div>
          <div style="margin-top:14px;display:flex;flex-direction:column;gap:8px;font-family:'IBM Plex Mono',monospace;font-size:12.5px;">
            <div style="display:flex;justify-content:space-between;gap:12px;color:#cfd8ec;"><span>alembic-ledger-migrations</span><span style="color:#8fb8ff;">−57%</span></div>
            <div style="display:flex;justify-content:space-between;gap:12px;color:#cfd8ec;"><span>mcp-auth-rotation</span><span style="color:#8fb8ff;">−41%</span></div>
            <div style="display:flex;justify-content:space-between;gap:12px;color:#cfd8ec;"><span>pgvector-index-debug</span><span style="color:#8fb8ff;">−16%</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section style="background:#05070d;padding:140px 28px 0;box-sizing:border-box;">
    <div style="max-width:780px;margin:0 auto;text-align:center;display:flex;flex-direction:column;align-items:center;">
      <img data-reveal="" src="/ghost-logo.png" alt="" style="width:52px;height:auto;animation:gsFloat 5s ease-in-out infinite;filter:drop-shadow(0 10px 28px rgba(0,5,25,.7));">
      <h2 data-reveal="2" style="margin:30px 0 0;font-size:clamp(28px,3.6vw,44px);font-weight:500;letter-spacing:-0.03em;line-height:1.2;color:#e9f0ff;text-wrap:balance;">On a paid plan, you draw on thousands of developers' skills to code faster — <em style="font-family:'Instrument Serif',serif;font-style:italic;font-weight:400;color:#a9c9ff;">and you earn when yours help them back</em>.</h2>
      <p data-reveal="3" style="margin:26px 0 0;max-width:560px;font-size:17px;line-height:1.7;color:#9cb4e2;text-wrap:pretty;">Used enough, your contributions can earn back more than you pay.</p>
    </div>
  </section>

  <section style="margin-top:150px;background:#e9eaec;color:#10141f;padding:110px 28px;box-sizing:border-box;">
    <div style="max-width:900px;margin:0 auto;text-align:center;display:flex;flex-direction:column;align-items:center;">
      <div data-reveal="" style="display:flex;align-items:center;gap:12px;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.14em;color:#39415a;">
        <span style="width:7px;height:7px;background:#2453c4;"></span><span>WHY THIS WORKS</span>
      </div>
      <h2 data-reveal="2" style="margin:22px 0 0;font-size:clamp(30px,3.8vw,46px);font-weight:500;letter-spacing:-0.03em;line-height:1.15;text-wrap:balance;">Other marketplaces pay for uploads and clicks. That's why they fill with <em style="font-family:'Instrument Serif',serif;font-style:italic;font-weight:400;color:#2453c4;">noise</em>.</h2>
      <p data-reveal="3" style="margin:24px 0 0;max-width:640px;font-size:17px;line-height:1.7;color:#3c4356;text-wrap:pretty;">We pay for lift — the one thing you can't fake, because we measure it.</p>
      <p data-reveal="3" style="margin:34px 0 0;font-family:'IBM Plex Mono',monospace;font-size:clamp(19px,2.4vw,26px);color:#2453c4;">Publish your best work, not your most work.<span style="display:inline-block;width:10px;height:22px;background:#2453c4;margin-left:10px;vertical-align:-2px;animation:gsBlink 1.1s steps(1) infinite;"></span></p>
    </div>
  </section>

  <section style="position:relative;background:linear-gradient(180deg,#05070d 0%,#0a1f4d 55%,#1c4bb0 100%);padding:140px 28px 120px;box-sizing:border-box;overflow:hidden;">
    <div style="position:absolute;inset:0;background-image:radial-gradient(rgba(150,190,255,.28) 1.2px,transparent 1.2px);background-size:16px 16px;mask-image:linear-gradient(180deg,transparent,black 60%);-webkit-mask-image:linear-gradient(180deg,transparent,black 60%);pointer-events:none;"></div>
    <div style="max-width:820px;margin:0 auto;display:flex;flex-direction:column;align-items:center;text-align:center;position:relative;">
      <img data-reveal="" src="/ghost-logo.png" alt="" style="width:74px;height:auto;animation:gsFloat 5s ease-in-out infinite;filter:drop-shadow(0 14px 36px rgba(0,5,25,.7));">
      <h2 data-reveal="2" style="margin:26px 0 0;font-size:clamp(30px,4vw,50px);font-weight:500;letter-spacing:-0.03em;line-height:1.12;color:#e9f0ff;text-wrap:balance;">Your scars already taught your agent.<br><em style="font-family:'Instrument Serif',serif;font-style:italic;font-weight:400;color:#a9c9ff;">Now let them pay you back.</em></h2>
      <div data-reveal="3" style="margin-top:36px;display:flex;gap:12px;flex-wrap:wrap;justify-content:center;">
        <a href="/#pricing" style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:600;letter-spacing:.06em;background:#f2f6ff;color:#0a1330;border:1px solid #f2f6ff;border-radius:3px;padding:14px 26px;display:inline-block;" class="gsh3">GET ON A PAID PLAN</a>
        <a href="${GITHUB}" target="_blank" rel="noopener" style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:600;letter-spacing:.06em;background:rgba(6,12,30,.65);color:#e8efff;border:1px solid rgba(170,200,255,.35);border-radius:3px;padding:14px 26px;display:inline-block;" class="gsh4">VIEW ON GITHUB ↗</a>
      </div>
      <p data-reveal="4" style="margin:26px 0 0;font-family:'IBM Plex Mono',monospace;font-size:11.5px;line-height:1.8;color:#9cb4e2;max-width:560px;">50% share rate and €50 threshold are firm. Euro amounts on this page are labeled examples — real payouts depend on the pool and your measured lift.</p>
    </div>
  </section>

  <footer style="background:#04060b;border-top:1px solid rgba(160,190,255,.1);">
    <div style="max-width:1240px;margin:0 auto;padding:52px 36px 44px;box-sizing:border-box;display:flex;justify-content:space-between;align-items:flex-start;gap:40px;flex-wrap:wrap;">
      <div style="display:flex;flex-direction:column;gap:14px;max-width:440px;">
        <span style="display:flex;align-items:center;gap:10px;">
          <img src="/ghost-logo.png" alt="Ghost Skills" style="width:22px;height:auto;">
          <span style="font-family:'IBM Plex Mono',monospace;font-size:14px;font-weight:600;color:#e9f0ff;">Ghost Skills</span>
        </span>
        <p style="margin:0;font-size:12.5px;line-height:1.8;color:#5d6f9c;text-wrap:pretty;">Operated by Ghost World Society, a company incorporated in Delaware, USA. © 2026 Ghost World Society. All rights reserved.</p>
      </div>
      <div style="display:flex;gap:28px;flex-wrap:wrap;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.08em;">
        <a href="/#problem" style="color:#8ba0cc;">THE PROBLEM</a>
        <a href="/#features" style="color:#8ba0cc;">WHY US</a>
        <a href="/#pricing" style="color:#8ba0cc;">PRICING</a>
        <a href="/earn" style="color:#8ba0cc;">EARN</a>
        <a href="${GITHUB}" target="_blank" rel="noopener" style="color:#8ba0cc;">GITHUB ↗</a>
      </div>
    </div>
  </footer>

</div>
`;
