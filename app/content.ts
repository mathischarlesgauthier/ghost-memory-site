// Design v7 « Ghost Skills » porté depuis Claude Design (Ghost Skills Landing
// v7.dc.html). Markup dc ({{ }}, style-hover, sc-for, canvas) converti en
// HTML+CSS statiques. Reveals/compteurs via un petit observer maison (layout).
const GITHUB = "https://github.com/mathischarlesgauthier/ghost-memory";
const API_BASE = "https://ghost-backend-production-f062.up.railway.app";

export const CONTENT_HTML = `
<div style="min-height:100vh;background:#05070d;overflow-x:hidden;">

  <div style="position:relative;background:linear-gradient(180deg,#04070f 0%,#050d24 30%,#0a2258 62%,#1c4bb0 86%,#3a71dd 100%);overflow:hidden;">
    
    <div style="position:absolute;inset:0;background:radial-gradient(90% 50% at 50% 108%,rgba(140,190,255,.35),transparent 70%);pointer-events:none;"></div>


    <header style="position:relative;z-index:5;">
      <div style="display:flex;align-items:center;gap:16px;max-width:1360px;margin:0 auto;padding:18px 28px;box-sizing:border-box;">
        <a href="#hero" style="display:flex;align-items:center;gap:9px;white-space:nowrap;">
          <img src="/ghost-logo.png" alt="Ghost Skills" style="width:24px;height:auto;display:block;filter:drop-shadow(0 3px 8px rgba(0,0,20,.5));">
          <span style="font-family:'IBM Plex Mono',monospace;font-size:13.5px;font-weight:600;letter-spacing:.02em;color:#f2f6ff;">Ghost Skills</span>
        </a>
        <nav class="gs-nav-links" style="display:flex;gap:18px;flex:1;justify-content:center;flex-wrap:wrap;">
          <a href="#problem" style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.08em;color:#a8bce4;white-space:nowrap;">THE PROBLEM</a>
          <a href="#features" style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.08em;color:#a8bce4;white-space:nowrap;">WHY US</a>
          <a href="#process" style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.08em;color:#a8bce4;white-space:nowrap;">HOW IT WORKS</a>
          <a href="#pricing" style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.08em;color:#a8bce4;white-space:nowrap;">PRICING</a>
          <a href="#objections" style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.08em;color:#a8bce4;white-space:nowrap;">OBJECTIONS</a>
        </nav>
        <div style="display:flex;align-items:center;gap:8px;white-space:nowrap;">
          <a href="/docs" style="font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.06em;border:1px solid rgba(180,205,255,.35);border-radius:3px;padding:7px 12px;color:#c9dcff;" class="gsh1">READ THE DOC</a>
          <a href="${GITHUB}" target="_blank" rel="noopener" style="font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.06em;border:1px solid rgba(180,205,255,.35);border-radius:3px;padding:7px 12px;color:#e8efff;background:rgba(10,20,50,.4);" class="gsh2">GITHUB ↗</a>
        </div>
      </div>
    </header>

    <section id="hero" style="position:relative;z-index:4;display:flex;flex-direction:column;align-items:center;text-align:center;padding:84px 28px 150px;box-sizing:border-box;">
      <div data-reveal="" style="display:inline-flex;align-items:center;gap:10px;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.12em;color:#cfe0ff;border:1px solid rgba(160,195,255,.3);background:rgba(8,18,48,.55);padding:8px 16px;">
        <span style="width:7px;height:7px;background:#8fb8ff;animation:gsPulse 2.2s ease-in-out infinite;"></span>
        <span>MEASURED, NOT UPVOTED</span>
      </div>
      <h1 data-reveal="" style="margin:34px 0 0;max-width:1000px;font-size:clamp(44px,6.6vw,88px);font-weight:500;letter-spacing:-0.035em;line-height:1.04;color:#e9f0ff;text-wrap:balance;">Your agent, powered by <em style="font-family:'Instrument Serif',serif;font-style:italic;font-weight:400;color:#a9c9ff;letter-spacing:-0.01em;">every developer's</em> hard-won lessons.</h1>
      <p data-reveal="2" style="margin:28px 0 0;max-width:680px;font-size:17.5px;line-height:1.7;color:#b7c7ea;text-wrap:pretty;">Ghost Skills taps the collective memory of thousands of developers — the fixes, the shortcuts, the traps they learned the hard way — and feeds the right one into your agent as you code. Ranked by what actually works. Measured, not upvoted.</p>
      <div data-reveal="3" style="margin-top:40px;display:flex;gap:12px;flex-wrap:wrap;justify-content:center;">
        <button onclick="ghostCopy(this)" style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:600;letter-spacing:.06em;background:#f2f6ff;color:#0a1330;border:1px solid #f2f6ff;border-radius:3px;padding:14px 26px;cursor:pointer;" class="gsh3">INSTALL GHOST SKILLS</button>
        <a href="${GITHUB}" target="_blank" rel="noopener" style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:600;letter-spacing:.06em;background:rgba(6,12,30,.65);color:#e8efff;border:1px solid rgba(170,200,255,.35);border-radius:3px;padding:14px 26px;display:inline-block;" class="gsh4">VIEW ON GITHUB ↗</a>
      </div>
      <div data-reveal="3" style="margin-top:34px;display:flex;align-items:center;gap:14px;background:rgba(5,10,26,.75);border:1px solid rgba(150,185,255,.25);border-radius:4px;padding:13px 16px 13px 18px;font-family:'IBM Plex Mono',monospace;font-size:13.5px;box-shadow:0 16px 50px rgba(0,5,25,.5);max-width:92vw;">
        <span style="color:#6d84b8;user-select:none;">$</span>
        <span style="color:#e9f0ff;white-space:nowrap;overflow-x:auto;max-width:60vw;">uv tool install git+${GITHUB}</span>
        <button onclick="ghostCopy(this)" style="background:rgba(150,185,255,.12);border:1px solid rgba(150,185,255,.3);border-radius:3px;color:#c9dcff;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.06em;padding:5px 12px;cursor:pointer;" class="gsh5">copy</button>
      </div>
      <p data-reveal="4" style="margin:16px 0 0;font-family:'IBM Plex Mono',monospace;font-size:12.5px;color:#9cb4e2;">then <span style="color:#dfe9ff;">ghost init</span> — see your candidates in 90 seconds</p>
      <p data-reveal="4" style="margin:8px 0 0;font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#7c92c2;">Prefer pip? <span style="color:#a8bce4;">pip install git+${GITHUB}</span></p>
      <div data-reveal="4" style="margin-top:34px;display:flex;gap:10px;flex-wrap:wrap;justify-content:center;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.08em;color:#cfe0ff;">
        <span style="border:1px solid rgba(170,200,255,.3);padding:7px 14px;background:rgba(8,16,42,.5);">FEWER WASTED TOKENS</span>
        <span style="border:1px solid rgba(170,200,255,.3);padding:7px 14px;background:rgba(8,16,42,.5);">FEWER RETRIES</span>
        <span style="border:1px solid rgba(170,200,255,.3);padding:7px 14px;background:rgba(8,16,42,.5);">YOUR STACK, NOT GENERIC ADVICE</span>
      </div>
      <p data-reveal="4" style="margin:22px 0 0;font-family:'IBM Plex Mono',monospace;font-size:12px;color:#9cb4e2;">Runs on your existing history. Nothing leaves your machine.</p>
    </section>
  </div>

  <section style="position:relative;background:linear-gradient(180deg,#3a71dd 0%,#16357c 34%,#081228 68%,#05070d 100%);padding:110px 28px 90px;box-sizing:border-box;text-align:center;overflow:hidden;">
    <div style="max-width:820px;margin:0 auto;display:flex;flex-direction:column;align-items:center;">
      <p data-reveal="" style="margin:0;font-size:clamp(24px,3.2vw,38px);font-weight:500;letter-spacing:-0.02em;line-height:1.35;color:#eaf1ff;text-wrap:balance;"><span data-count="670000" style="font-family:'IBM Plex Mono',monospace;">670,000</span> skills out there, ranked by download count. A number you can buy. It tells you nothing.</p>
      <p data-reveal="2" style="margin:30px 0 0;max-width:640px;font-size:18px;line-height:1.7;color:#a9bce6;text-wrap:pretty;">Ghost Skills ranks by <em style="font-family:'Instrument Serif',serif;font-style:italic;color:#cfe0ff;">lift</em> — how much a skill actually improves a real task, measured by rerunning it.</p>
      <p data-reveal="3" style="margin:44px 0 0;font-family:'IBM Plex Mono',monospace;font-size:clamp(20px,2.6vw,30px);letter-spacing:.02em;color:#dfe9ff;">We don't count. We measure.<span style="display:inline-block;width:10px;height:24px;background:#8fb8ff;margin-left:10px;vertical-align:-3px;animation:gsBlink 1.1s steps(1) infinite;"></span></p>
      <img data-reveal="3" src="/ghost-logo.png" alt="" style="margin-top:64px;width:104px;height:auto;animation:gsFloat 5s ease-in-out infinite;filter:drop-shadow(0 18px 44px rgba(0,10,40,.65));">
      <div style="margin-top:8px;width:2px;height:110px;background:linear-gradient(180deg,rgba(143,184,255,.9),transparent);animation:gsPulse 3s ease-in-out infinite;"></div>
    </div>
  </section>

  <section style="padding:20px 28px 0;box-sizing:border-box;background:#05070d;">
    <div data-reveal="" data-term="" style="max-width:940px;margin:0 auto;background:#080c17;border:1px solid rgba(160,190,255,.16);border-radius:6px;overflow:hidden;box-shadow:0 34px 100px rgba(0,0,0,.65), 0 0 140px rgba(60,110,220,.08);">
      <div style="display:flex;align-items:center;gap:8px;padding:13px 16px;border-bottom:1px solid rgba(160,190,255,.1);background:#0a101f;">
        <span style="width:11px;height:11px;border-radius:50%;background:#1c2540;"></span>
        <span style="width:11px;height:11px;border-radius:50%;background:#1c2540;"></span>
        <span style="width:11px;height:11px;border-radius:50%;background:#1c2540;"></span>
        <span style="margin-left:10px;font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.1em;color:#5d6f9c;">GHOST SCAN</span>
      </div>
      <div style="padding:26px 30px 30px;font-family:'IBM Plex Mono',monospace;font-size:14.5px;line-height:1.75;display:flex;flex-direction:column;gap:2px;">
        <div class="gs-tl"><span style="color:#5d6f9c;">$ </span><span style="color:#e9f0ff;">ghost scan</span></div>
        <div class="gs-tl" style="color:#9cb4e2;">Parsing 418 sessions...&nbsp;&nbsp;<span class="gs-bar" style="color:#8fb8ff;">████████████</span>&nbsp;&nbsp;100%</div>
        <div style="height:14px;"></div>
        <div class="gs-tl" style="color:#8fb8ff;font-weight:500;">47 skill candidates found</div>
        <div class="gs-tl" style="color:#5d6f9c;">312 failure loops · 89 human corrections · 23 repeated patterns</div>
        <div style="height:14px;"></div>
        <div class="gs-tl" style="display:flex;gap:12px;flex-wrap:wrap;"><span style="color:#5d6f9c;">1.</span><span style="color:#e9f0ff;flex:1;min-width:200px;">Alembic migrations on Ledger schema</span><span style="color:#9cb4e2;">11x · 4 sessions</span></div>
        <div class="gs-tl" style="display:flex;gap:12px;"><span style="visibility:hidden;">1.</span><span style="color:#5d6f9c;">↳ 7 failures before convergence</span></div>
        <div class="gs-tl" style="display:flex;gap:12px;flex-wrap:wrap;"><span style="color:#5d6f9c;">2.</span><span style="color:#e9f0ff;flex:1;min-width:200px;">MCP server setup + auth token rotation</span><span style="color:#9cb4e2;">&nbsp;8x · 3 sessions</span></div>
        <div class="gs-tl" style="display:flex;gap:12px;flex-wrap:wrap;"><span style="color:#5d6f9c;">3.</span><span style="color:#e9f0ff;flex:1;min-width:200px;">pgvector index debugging</span><span style="color:#9cb4e2;">&nbsp;6x · 3 sessions</span></div>
        <div style="height:14px;"></div>
        <div class="gs-tl" style="color:#9cb4e2;">Nothing left your machine.<span style="display:inline-block;width:8px;height:16px;background:#8fb8ff;margin-left:8px;vertical-align:-2px;animation:gsBlink 1.1s steps(1) infinite;"></span></div>
      </div>
    </div>
  </section>

  <section style="margin-top:100px;border-top:1px solid rgba(160,190,255,.1);border-bottom:1px solid rgba(160,190,255,.1);background:#060a14;overflow:hidden;">
    <div style="display:flex;width:max-content;animation:gsMarquee 55s linear infinite;padding:17px 0;">
      <div style="display:flex;align-items:center;gap:40px;padding-right:40px;font-family:'IBM Plex Mono',monospace;font-size:13px;letter-spacing:.03em;color:#8ba0cc;white-space:nowrap;">
        <span>Ghost Skills reads your scars.</span><img src="/ghost-logo.png" alt="" style="width:17px;height:auto;opacity:.65;">
        <span>Every correction you make: paid once, reused forever.</span><img src="/ghost-logo.png" alt="" style="width:17px;height:auto;opacity:.65;">
        <span>Your agent doesn't need a bigger brain. It needs a memory.</span><img src="/ghost-logo.png" alt="" style="width:17px;height:auto;opacity:.65;">
        <span>The knowledge isn't in the docs. It's in the 7 times it broke before it worked.</span><img src="/ghost-logo.png" alt="" style="width:17px;height:auto;opacity:.65;">
        <span>Nobody writes skills. That's the whole problem — and why Ghost Skills writes them for you.</span><img src="/ghost-logo.png" alt="" style="width:17px;height:auto;opacity:.65;">
      </div>
      <div style="display:flex;align-items:center;gap:40px;padding-right:40px;font-family:'IBM Plex Mono',monospace;font-size:13px;letter-spacing:.03em;color:#8ba0cc;white-space:nowrap;">
        <span>Ghost Skills reads your scars.</span><img src="/ghost-logo.png" alt="" style="width:17px;height:auto;opacity:.65;">
        <span>Every correction you make: paid once, reused forever.</span><img src="/ghost-logo.png" alt="" style="width:17px;height:auto;opacity:.65;">
        <span>Your agent doesn't need a bigger brain. It needs a memory.</span><img src="/ghost-logo.png" alt="" style="width:17px;height:auto;opacity:.65;">
        <span>The knowledge isn't in the docs. It's in the 7 times it broke before it worked.</span><img src="/ghost-logo.png" alt="" style="width:17px;height:auto;opacity:.65;">
        <span>Nobody writes skills. That's the whole problem — and why Ghost Skills writes them for you.</span><img src="/ghost-logo.png" alt="" style="width:17px;height:auto;opacity:.65;">
      </div>
    </div>
  </section>

  <section id="features" style="background:#e9eaec;color:#10141f;padding:110px 28px;box-sizing:border-box;">
    <div style="max-width:1200px;margin:0 auto;">
      <div data-reveal="" style="display:flex;align-items:center;gap:12px;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.14em;color:#39415a;">
        <span style="width:7px;height:7px;background:#2453c4;"></span><span>WHY US</span>
      </div>
      <h2 data-reveal="2" style="margin:22px 0 0;max-width:760px;font-size:clamp(32px,4.4vw,56px);font-weight:500;letter-spacing:-0.03em;line-height:1.08;text-wrap:balance;">Your agent doesn't need a bigger brain. It needs a <em style="font-family:'Instrument Serif',serif;font-style:italic;font-weight:400;color:#2453c4;">memory</em>.</h2>
      <div style="margin-top:64px;display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:0;border:1px solid rgba(16,20,31,.18);background:#f2f2f1;">
        <div data-reveal="" data-in-svg="" style="position:relative;min-height:420px;border-right:1px solid rgba(16,20,31,.14);background-image:radial-gradient(rgba(16,20,31,.14) 1px,transparent 1px);background-size:22px 22px;display:flex;align-items:center;justify-content:center;padding:40px 24px;box-sizing:border-box;">
          <svg aria-hidden="true" width="360" height="330" viewBox="0 0 340 300" style="max-width:100%;height:auto;pointer-events:none;">
            <defs><filter id="gsF2" x="-15%" y="-15%" width="130%" height="130%"><feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="7" result="n"></feTurbulence><feDisplacementMap in="SourceGraphic" in2="n" scale="2.4"><animate attributeName="scale" values="2;3.4;2" dur="1.4s" repeatCount="indefinite"></animate></feDisplacementMap></filter></defs>
            <g filter="url(#gsF2)" fill="none" stroke="#141a2b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path class="gs-d gs-t1" pathLength="1" d="M128,26 L232,18 L238,88 L134,96 Z" style="opacity:.45;"></path>
              <path class="gs-d gs-t2" pathLength="1" d="M108,52 L218,42 L225,120 L115,130 Z" style="opacity:.65;"></path>
              <path class="gs-d gs-t3" pathLength="1" d="M86,84 L204,72 L212,158 L94,170 Z" style="opacity:.9;"></path>
              <path d="M102,104 L182,96 M103,118 L176,110 M104,132 L156,126" style="opacity:.35;"></path>
              <path class="gs-d gs-t4" pathLength="1" d="M158,148 L168,158 L190,124" stroke="#2453c4" stroke-width="2.6"></path>
              <path class="gs-d gs-t4" pathLength="1" d="M46,168 L44,150 L102,145 L110,160 L286,146 L298,254 L58,276 Z" style="opacity:.95;"></path>
              <path d="M70,246 L86,230 M92,252 L108,236 M114,258 L130,242" style="opacity:.15;"></path>
              <g style="animation:gsBob 4.5s ease-in-out infinite;">
                <path class="gs-d gs-t5" pathLength="1" d="M262,148 C257,130 259,110 270,101 C279,93 295,94 302,103 C310,112 312,130 309,148" style="opacity:.9;"></path>
                <circle cx="278" cy="120" r="2.6" fill="#141a2b" stroke="none"></circle>
                <circle cx="294" cy="118" r="2.6" fill="#141a2b" stroke="none"></circle>
              </g>
              <path d="M318,74 L318,84 M313,79 L323,79" stroke="#2453c4" stroke-width="1.6" style="animation:gsSpark 2.6s ease-in-out infinite;transform-box:fill-box;transform-origin:center;"></path>
              <path d="M40,110 L40,118 M36,114 L44,114" stroke="#2453c4" stroke-width="1.4" style="animation:gsSpark 3.1s .8s ease-in-out infinite;transform-box:fill-box;transform-origin:center;"></path>
              <path d="M160,282 Q170,290 200,288" style="opacity:.4;stroke-dasharray:3 5;"></path>
              <text x="240" y="292" text-anchor="middle" fill="#5a6170" stroke="none" style="font-family:'IBM Plex Mono',monospace;font-size:11px;">every scar, filed as a skill</text>
            </g>
          </svg>
        </div>
        <div style="display:flex;flex-direction:column;">
          <div data-reveal="" style="padding:28px 32px;border-bottom:1px solid rgba(16,20,31,.14);" class="gsh6">
            <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.14em;color:#2453c4;">STOP REPEATING YOURSELF</div>
            <p style="margin:10px 0 0;font-size:15px;line-height:1.65;color:#3c4356;text-wrap:pretty;">Your agent stops rediscovering what you already taught it.</p>
            <div style="margin-top:16px;display:flex;gap:22px;flex-wrap:wrap;font-family:'IBM Plex Mono',monospace;font-size:12.5px;color:#5a6170;">
              <span>failure loops <span style="color:#10141f;font-weight:600;">312</span></span>
              <span>human corrections <span style="color:#10141f;font-weight:600;">89</span></span>
              <span>extracted skills <span style="color:#2453c4;font-weight:600;">47</span></span>
            </div>
          </div>
          <div data-reveal="" style="padding:28px 32px;border-bottom:1px solid rgba(16,20,31,.14);" class="gsh7">
            <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.14em;color:#2453c4;">YOUR CODEBASE, NOT GENERIC ADVICE</div>
            <p style="margin:10px 0 0;font-size:15px;line-height:1.65;color:#3c4356;text-wrap:pretty;">Ghost Skills only learns from your sessions, your repo, your conventions.</p>
            <div style="margin-top:16px;font-family:'IBM Plex Mono',monospace;font-size:12.5px;line-height:1.9;color:#5a6170;">
              <div>// before: 7 failures &nbsp;·&nbsp; // after:</div>
              <div><span style="color:#2453c4;">skill</span> <span style="color:#10141f;">alembic-ledger-migrations</span> <span style="color:#2453c4;">✓</span></div>
            </div>
          </div>
          <div data-reveal="" style="padding:28px 32px;border-bottom:1px solid rgba(16,20,31,.14);display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap;" class="gsh8">
            <div style="flex:1;min-width:220px;">
              <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.14em;color:#2453c4;">ZERO EFFORT</div>
              <p style="margin:10px 0 0;font-size:15px;line-height:1.65;color:#3c4356;">No files to write. No skills to hunt for. No config.</p>
            </div>
            <div style="font-family:'IBM Plex Mono',monospace;"><span style="font-size:44px;font-weight:600;color:#10141f;letter-spacing:-0.02em;">0</span><span style="margin-left:10px;font-size:12px;color:#5a6170;">config files</span></div>
          </div>
          <div data-reveal="" style="padding:28px 32px;border-bottom:1px solid rgba(16,20,31,.14);" class="gsh9">
            <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.14em;color:#2453c4;">PAID ONCE, REUSED FOREVER</div>
            <p style="margin:10px 0 0;font-size:15px;line-height:1.65;color:#3c4356;text-wrap:pretty;">Every correction you make becomes capital. The knowledge isn't in the docs — it's in the 7 times it broke before it worked.</p>
          </div>
          <div data-reveal="" style="padding:28px 32px;display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap;flex:1;" class="gsh10">
            <div style="flex:1;min-width:220px;">
              <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.14em;color:#2453c4;">LOCAL-FIRST</div>
              <p style="margin:10px 0 0;font-size:15px;line-height:1.65;color:#3c4356;text-wrap:pretty;">Runs on your existing history, on your machine. Nothing is published without you seeing the diff first.</p>
            </div>
            <div style="font-family:'IBM Plex Mono',monospace;"><span style="font-size:44px;font-weight:600;color:#10141f;letter-spacing:-0.02em;">0</span><span style="margin-left:10px;font-size:12px;color:#5a6170;">bytes leave your machine</span></div>
          </div>
        </div>
      </div>
      <div style="margin-top:44px;display:flex;justify-content:center;">
        <span style="display:inline-flex;align-items:center;gap:10px;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.12em;color:#39415a;border:1px solid rgba(16,20,31,.25);border-radius:999px;padding:9px 18px;background:#f2f2f1;">KEEP SCROLLING <span style="display:inline-block;animation:gsScrollNudge 1.6s ease-in-out infinite;">↓</span></span>
      </div>
    </div>
  </section>

  <section id="process" style="background:#e9eaec;color:#10141f;padding:40px 28px 120px;box-sizing:border-box;border-top:1px solid rgba(16,20,31,.12);">
    <div style="max-width:1200px;margin:0 auto;">
      <div style="padding-top:70px;display:flex;flex-direction:column;align-items:center;text-align:center;">
        <div data-reveal="" style="display:flex;align-items:center;gap:12px;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.14em;color:#39415a;">
          <span style="width:7px;height:7px;background:#2453c4;"></span><span>HOW IT WORKS</span>
        </div>
        <h2 data-reveal="2" style="margin:22px 0 0;font-size:clamp(32px,4.2vw,52px);font-weight:500;letter-spacing:-0.03em;line-height:1.1;text-wrap:balance;">Three commands. That's the <em style="font-family:'Instrument Serif',serif;font-style:italic;font-weight:400;color:#2453c4;">whole</em> workflow.</h2>
        <p data-reveal="3" style="margin:18px 0 0;max-width:560px;font-size:16px;line-height:1.65;color:#3c4356;text-wrap:pretty;">One command. Zero config. And it runs on the history you already have — you see the result in 90 seconds.</p>
      </div>
      <div data-reveal="" data-in-svg="" style="margin-top:52px;display:flex;justify-content:center;">
        <svg aria-hidden="true" width="640" height="158" viewBox="0 0 640 158" style="max-width:100%;height:auto;pointer-events:none;">
          <defs><filter id="gsF3" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="11" result="n"></feTurbulence><feDisplacementMap in="SourceGraphic" in2="n" scale="2.2"><animate attributeName="scale" values="1.8;3.2;1.8" dur="1.5s" repeatCount="indefinite"></animate></feDisplacementMap></filter></defs>
          <g filter="url(#gsF3)" fill="none" stroke="#141a2b" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <g style="animation:gsWiggle 6s ease-in-out infinite;transform-box:fill-box;transform-origin:center;">
              <path class="gs-d gs-t1" pathLength="1" d="M30,44 L88,40 L92,102 L34,106 Z" style="opacity:.5;"></path>
              <path class="gs-d gs-t1" pathLength="1" d="M22,52 L80,48 L84,110 L26,114 Z" style="opacity:.7;"></path>
              <path d="M34,64 L70,62 M35,74 L71,72 M36,84 L64,83" style="opacity:.4;"></path>
            </g>
            <path d="M112,76 C142,70 160,70 186,74" style="opacity:.6;stroke-dasharray:.06 .07;animation:gsMarch 5s linear infinite;" pathLength="1"></path>
            <path class="gs-d gs-t2" pathLength="1" d="M178,68 L190,74 L179,81" style="opacity:.7;"></path>
            <path class="gs-d gs-t3" pathLength="1" d="M232,32 L232,58 M250,32 L250,58 M226,32 L256,30" style="opacity:.8;"></path>
            <path class="gs-d gs-t3" pathLength="1" d="M232,58 C214,66 204,82 206,100 C208,120 226,130 244,130 C262,130 278,118 280,100 C281,82 268,65 250,58" style="opacity:.85;"></path>
            <path d="M216,102 Q242,93 271,102" stroke="#2453c4" style="opacity:.7;stroke-dasharray:.08 .06;animation:gsMarch 7s linear infinite;" pathLength="1"></path>
            <circle cx="232" cy="114" r="3" style="opacity:0;animation:gsBubble 2.4s .2s ease-out infinite;"></circle>
            <circle cx="246" cy="118" r="2.4" style="opacity:0;animation:gsBubble 2.9s 1.1s ease-out infinite;"></circle>
            <circle cx="258" cy="112" r="2" style="opacity:0;animation:gsBubble 2.1s 1.7s ease-out infinite;"></circle>
            <path class="gs-d gs-t4" pathLength="1" d="M276,88 C292,84 302,90 308,100" style="opacity:.75;"></path>
            <path d="M310,104 C308,108 308,111 310,112 C312,111 312,108 310,104" stroke="#2453c4" style="animation:gsDrop 2.2s ease-in infinite;"></path>
            <path d="M226,142 L232,136 M240,144 L246,138 M254,142 L260,136" style="opacity:.3;"></path>
            <path d="M336,74 C366,66 386,66 414,70" style="opacity:.6;stroke-dasharray:.06 .07;animation:gsMarch 5s linear infinite;" pathLength="1"></path>
            <path class="gs-d gs-t5" pathLength="1" d="M406,64 L418,70 L407,77" style="opacity:.7;"></path>
            <path class="gs-d gs-t6" pathLength="1" d="M446,40 L512,36 L516,106 L450,110 Z" style="opacity:.85;"></path>
            <path d="M456,52 L500,50 M457,62 L494,60" style="opacity:.4;"></path>
            <path class="gs-d gs-t7" pathLength="1" d="M462,84 L472,96 L496,66" stroke="#2453c4" stroke-width="2.6"></path>
            <path d="M532,42 L532,52 M527,47 L537,47" stroke="#2453c4" style="animation:gsSpark 2.4s ease-in-out infinite;transform-box:fill-box;transform-origin:center;"></path>
            <path d="M548,78 L548,86 M544,82 L552,82" stroke="#2453c4" style="animation:gsSpark 3s 1s ease-in-out infinite;transform-box:fill-box;transform-origin:center;"></path>
            <path d="M528,102 L528,108 M525,105 L531,105" stroke="#2453c4" style="animation:gsSpark 2.7s .5s ease-in-out infinite;transform-box:fill-box;transform-origin:center;"></path>
            <text x="53" y="132" text-anchor="middle" fill="#5a6170" stroke="none" style="font-family:'IBM Plex Mono',monospace;font-size:11px;">your sessions</text>
            <text x="243" y="156" text-anchor="middle" fill="#5a6170" stroke="none" style="font-family:'IBM Plex Mono',monospace;font-size:11px;">distilled</text>
            <text x="481" y="130" text-anchor="middle" fill="#5a6170" stroke="none" style="font-family:'IBM Plex Mono',monospace;font-size:11px;">skills</text>
          </g>
        </svg>
      </div>
      <div style="margin-top:52px;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0;border:1px solid rgba(16,20,31,.18);background:#f2f2f1;">
        <div data-reveal="" style="padding:34px 32px;border-right:1px solid rgba(16,20,31,.14);" class="gsh11">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;color:#5a6170;">01</div>
          <div style="margin-top:16px;font-family:'IBM Plex Mono',monospace;font-size:17px;"><span style="color:#5a6170;">$ </span><span style="color:#2453c4;font-weight:600;">ghost scan</span></div>
          <p style="margin:10px 0 0;font-size:14.5px;line-height:1.65;color:#3c4356;">read your past sessions</p>
        </div>
        <div data-reveal="2" style="padding:34px 32px;border-right:1px solid rgba(16,20,31,.14);" class="gsh12">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;color:#5a6170;">02</div>
          <div style="margin-top:16px;font-family:'IBM Plex Mono',monospace;font-size:17px;"><span style="color:#5a6170;">$ </span><span style="color:#2453c4;font-weight:600;">ghost run</span></div>
          <p style="margin:10px 0 0;font-size:14.5px;line-height:1.65;color:#3c4356;">distill them into skills</p>
        </div>
        <div data-reveal="3" style="padding:34px 32px;" class="gsh13">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;color:#5a6170;">03</div>
          <div style="margin-top:16px;font-family:'IBM Plex Mono',monospace;font-size:17px;"><span style="color:#5a6170;">$ </span><span style="color:#2453c4;font-weight:600;">ghost deploy</span></div>
          <p style="margin:10px 0 0;font-size:14.5px;line-height:1.65;color:#3c4356;">wire them into your agent</p>
        </div>
      </div>
      <p data-reveal="" style="margin:30px 0 0;text-align:center;font-family:'IBM Plex Mono',monospace;font-size:13px;letter-spacing:.04em;color:#39415a;">That's it. Then you just work.</p>
    </div>
  </section>

  <section id="problem" style="background:#05070d;padding:130px 28px 0;box-sizing:border-box;">
    <div style="max-width:1080px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:56px;align-items:center;">
      <div>
        <div data-reveal="" style="display:flex;align-items:center;gap:12px;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.14em;color:#8ba0cc;">
          <span style="width:7px;height:7px;background:#8fb8ff;"></span><span>THE BILL YOU'RE ALREADY PAYING</span>
        </div>
        <div style="margin-top:44px;display:flex;flex-direction:column;gap:36px;">
          <div data-reveal="">
            <div style="font-family:'IBM Plex Mono',monospace;font-size:14px;color:#8fb8ff;">Monday.</div>
            <p style="margin:10px 0 0;font-size:clamp(18px,2vw,22px);line-height:1.55;color:#cfd8ec;text-wrap:pretty;">You explain that migrations on your ledger table have to go through <span style="font-family:'IBM Plex Mono',monospace;font-size:.82em;background:rgba(150,185,255,.12);border-radius:3px;padding:2px 8px;">batch_alter_table</span>. It gets it. It works.</p>
          </div>
          <div data-reveal="">
            <div style="font-family:'IBM Plex Mono',monospace;font-size:14px;color:#8fb8ff;">Thursday.</div>
            <p style="margin:10px 0 0;font-size:clamp(18px,2vw,22px);line-height:1.55;color:#cfd8ec;">New session. It doesn't know. Seven attempts. Forty minutes.</p>
          </div>
          <div data-reveal="">
            <div style="font-family:'IBM Plex Mono',monospace;font-size:14px;color:#8fb8ff;">Next month.</div>
            <p style="margin:10px 0 0;font-size:clamp(18px,2vw,22px);line-height:1.55;color:#cfd8ec;">Your new hire hits the same wall.</p>
          </div>
        </div>
        <p data-reveal="" style="margin:56px 0 0;font-size:clamp(28px,3.2vw,40px);font-weight:500;letter-spacing:-0.03em;line-height:1.15;color:#e9f0ff;text-wrap:balance;">You've paid for that lesson <em style="font-family:'Instrument Serif',serif;font-style:italic;font-weight:400;color:#a9c9ff;">three times</em>.</p>
      </div>
      <div data-reveal="2" data-in-svg="" style="display:flex;justify-content:center;">
        <svg aria-hidden="true" width="280" height="220" viewBox="0 0 230 180" style="max-width:100%;height:auto;pointer-events:none;">
          <defs><filter id="gsF4" x="-15%" y="-15%" width="130%" height="130%"><feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="4" result="n"></feTurbulence><feDisplacementMap in="SourceGraphic" in2="n" scale="2.4"><animate attributeName="scale" values="2;3.4;2" dur="1.4s" repeatCount="indefinite"></animate></feDisplacementMap></filter></defs>
          <g filter="url(#gsF4)" fill="none" stroke="#dfe6f2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path class="gs-d gs-t1" pathLength="1" d="M52,32 C38,54 30,76 30,100 C30,138 66,158 115,158 C164,158 200,138 200,100 C200,76 192,54 178,32"></path>
            <path class="gs-d gs-t2" pathLength="1" d="M52,32 Q115,46 178,32" style="opacity:.6;"></path>
            <path d="M44,84 Q72,76 100,84 Q128,92 156,84 Q176,79 194,83" style="opacity:.45;stroke-dasharray:.05 .05;animation:gsMarch 9s linear infinite;" pathLength="1"></path>
            <path d="M60,112 A55,26 0 1,1 170,116" style="opacity:.3;stroke-dasharray:.04 .06;animation:gsMarch 6s linear infinite;" pathLength="1"></path>
            <g style="animation:gsBob 3.2s ease-in-out infinite;">
              <g style="animation:gsWiggle 1.6s ease-in-out infinite;transform-box:fill-box;transform-origin:30% center;">
                <path class="gs-d gs-t3" pathLength="1" d="M92,112 C102,100 122,100 134,110 C122,122 102,122 92,112 Z" style="opacity:.9;"></path>
                <path class="gs-d gs-t4" pathLength="1" d="M134,110 L150,98 L146,111 L150,122 Z" style="opacity:.8;"></path>
                <circle cx="102" cy="108" r="2" fill="#dfe6f2" stroke="none" style="opacity:.9;"></circle>
                <path d="M112,100 Q116,94 122,96" style="opacity:.5;"></path>
              </g>
            </g>
            <circle cx="96" cy="96" r="2.6" style="opacity:0;animation:gsBubble 3s .4s ease-out infinite;"></circle>
            <circle cx="88" cy="92" r="2" style="opacity:0;animation:gsBubble 3.6s 1.8s ease-out infinite;"></circle>
            <text x="115" y="20" text-anchor="middle" fill="#8fb8ff" stroke="none" style="font-family:'IBM Plex Mono',monospace;font-size:20px;animation:gsFadeLoop 3.4s ease-in-out infinite;">?</text>
            <text x="115" y="176" text-anchor="middle" fill="#5d6f9c" stroke="none" style="font-family:'IBM Plex Mono',monospace;font-size:11px;">goldfish memory</text>
          </g>
        </svg>
      </div>
    </div>
  </section>

  <section style="background:#05070d;padding:140px 28px 0;box-sizing:border-box;">
    <div style="max-width:1020px;margin:0 auto;">
      <h2 data-reveal="" style="margin:0;text-align:center;font-size:clamp(30px,3.8vw,48px);font-weight:500;letter-spacing:-0.03em;line-height:1.12;color:#e9f0ff;text-wrap:balance;">Your agent's knowledge is worthless. <em style="font-family:'Instrument Serif',serif;font-style:italic;font-weight:400;color:#a9c9ff;">Your scars aren't.</em></h2>
      <div style="margin-top:60px;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px;align-items:stretch;">
        <div data-reveal="" data-in-svg="" style="background:#080b14;border:1px solid rgba(160,190,255,.12);border-radius:4px;padding:38px 34px;" class="gsh14">
          <svg aria-hidden="true" width="64" height="72" viewBox="0 0 70 80" style="display:block;margin-bottom:18px;pointer-events:none;">
            <defs><filter id="gsF5a" x="-20%" y="-20%" width="140%" height="140%"><feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="2" result="n"></feTurbulence><feDisplacementMap in="SourceGraphic" in2="n" scale="2"><animate attributeName="scale" values="1.6;3;1.6" dur="1.3s" repeatCount="indefinite"></animate></feDisplacementMap></filter></defs>
            <g filter="url(#gsF5a)" fill="none" stroke="#8ba0cc" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" style="opacity:.8;">
              <path d="M35,8 C22,8 15,18 16,29 C17,37 22,41 25,46 L45,46 C48,41 53,37 54,29 C55,18 48,8 35,8 Z"></path>
              <path d="M28,36 Q35,28 42,36" style="opacity:.7;"></path>
              <path d="M27,52 L43,52 M28,58 L42,58 M31,64 L39,64" style="opacity:.7;"></path>
              <path pathLength="1" d="M12,10 L58,66" stroke="#e05c5c" stroke-width="2.4" style="stroke-dasharray:1;stroke-dashoffset:1;animation:gsX 5s 1s ease-in-out infinite;"></path>
              <path pathLength="1" d="M58,10 L12,66" stroke="#e05c5c" stroke-width="2.4" style="stroke-dasharray:1;stroke-dashoffset:1;animation:gsX 5s 1.2s ease-in-out infinite;"></path>
            </g>
          </svg>
          <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.14em;color:#5d6f9c;">WORTHLESS</div>
          <p style="margin:18px 0 0;font-size:19px;line-height:1.5;color:#9cb4e2;font-weight:500;text-wrap:pretty;">What Claude gets right on the first try.</p>
          <p style="margin:14px 0 0;font-size:15px;line-height:1.7;color:#5d6f9c;text-wrap:pretty;">It's in the model. Everyone has it. Any prompt regenerates it.</p>
        </div>
        <div data-reveal="2" data-in-svg="" style="background:rgba(60,110,220,.07);border:1px solid rgba(140,180,255,.45);border-radius:4px;padding:38px 34px;box-shadow:0 0 70px rgba(60,110,220,.1);" class="gsh15">
          <svg aria-hidden="true" width="64" height="72" viewBox="0 0 70 80" style="display:block;margin-bottom:18px;pointer-events:none;">
            <defs><filter id="gsF5b" x="-20%" y="-20%" width="140%" height="140%"><feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="9" result="n"></feTurbulence><feDisplacementMap in="SourceGraphic" in2="n" scale="2"><animate attributeName="scale" values="1.6;3;1.6" dur="1.3s" repeatCount="indefinite"></animate></feDisplacementMap></filter></defs>
            <g filter="url(#gsF5b)" fill="none" stroke="#dfe6f2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path class="gs-d gs-t1" pathLength="1" d="M35,66 C12,48 8,28 18,17 C26,9 35,15 35,24 C35,15 44,9 52,17 C62,28 58,48 35,66 Z" style="opacity:.9;"></path>
              <path class="gs-d gs-t2" pathLength="1" d="M23,31 Q34,40 47,31" stroke="#8fb8ff"></path>
              <path class="gs-d gs-t3" pathLength="1" d="M27,29 L28,37 M33,32 L34,40 M39,32 L40,39 M44,29 L46,36" stroke="#8fb8ff" stroke-width="1.5"></path>
              <path d="M58,12 L58,20 M54,16 L62,16" stroke="#8fb8ff" stroke-width="1.5" style="animation:gsSpark 2.6s ease-in-out infinite;transform-box:fill-box;transform-origin:center;"></path>
              <path d="M12,54 L12,60 M9,57 L15,57" stroke="#8fb8ff" stroke-width="1.4" style="animation:gsSpark 3.2s 1s ease-in-out infinite;transform-box:fill-box;transform-origin:center;"></path>
            </g>
          </svg>
          <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.14em;color:#8fb8ff;">YOUR CAPITAL</div>
          <p style="margin:18px 0 0;font-size:19px;line-height:1.5;color:#e9f0ff;font-weight:500;text-wrap:pretty;">The 7 times it broke before it worked.<br>The 12 times you said &quot;no, not like that.&quot;</p>
          <p style="margin:14px 0 0;font-size:15px;line-height:1.7;color:#b7c7ea;text-wrap:pretty;">That doesn't exist anywhere except in your history. By definition, no model can guess it — if it could, you wouldn't have had to correct it.</p>
        </div>
      </div>
      <p data-reveal="" style="margin:56px 0 0;text-align:center;font-family:'IBM Plex Mono',monospace;font-size:clamp(19px,2.2vw,26px);color:#8fb8ff;">Ghost Skills reads your scars.</p>
    </div>
  </section>

  <section style="background:#05070d;padding:150px 28px 0;box-sizing:border-box;">
    <div style="max-width:780px;margin:0 auto;text-align:center;display:flex;flex-direction:column;align-items:center;">
      <img data-reveal="" src="/ghost-logo.png" alt="" style="width:52px;height:auto;animation:gsFloat 5s ease-in-out infinite;filter:drop-shadow(0 10px 28px rgba(0,5,25,.7));">
      <h2 data-reveal="2" style="margin:30px 0 0;font-size:clamp(32px,4.2vw,52px);font-weight:500;letter-spacing:-0.03em;line-height:1.1;color:#e9f0ff;text-wrap:balance;">You already paid for your scars.<br><em style="font-family:'Instrument Serif',serif;font-style:italic;font-weight:400;color:#a9c9ff;">You haven't paid for theirs.</em></h2>
      <p data-reveal="3" style="margin:36px 0 0;max-width:620px;font-size:17.5px;line-height:1.75;color:#9cb4e2;text-wrap:pretty;">Your own history only gives you back what you already learned the hard way. Useful — you never pay for it twice. But you already took the hit.</p>
      <p data-reveal="3" style="margin:22px 0 0;max-width:620px;font-size:17.5px;line-height:1.75;color:#cfd8ec;text-wrap:pretty;">The wall you'll hit next Thursday, someone already hit it. Their scar is distilled, measured, and waiting.</p>
      <p data-reveal="4" style="margin:44px 0 0;font-size:clamp(22px,2.6vw,30px);font-weight:500;letter-spacing:-0.02em;line-height:1.3;color:#8fb8ff;text-wrap:balance;">You cannot build that alone. No matter how good you are.</p>
      <div data-reveal="4" data-in-svg="" style="margin-top:52px;display:flex;justify-content:center;">
        <svg aria-hidden="true" width="300" height="130" viewBox="0 0 300 130" style="pointer-events:none;">
          <defs><filter id="gsF6" x="-15%" y="-15%" width="130%" height="130%"><feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="14" result="n"></feTurbulence><feDisplacementMap in="SourceGraphic" in2="n" scale="2.2"><animate attributeName="scale" values="1.8;3.2;1.8" dur="1.4s" repeatCount="indefinite"></animate></feDisplacementMap></filter></defs>
          <g filter="url(#gsF6)" fill="none" stroke="#dfe6f2" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <g style="animation:gsBob 4s ease-in-out infinite;">
              <path d="M22,112 C18,96 20,74 30,64 C38,55 56,54 64,64 C72,74 74,96 70,112 C64,106 58,108 54,113 C48,108 42,108 36,113 C31,108 26,107 22,112" style="opacity:.85;"></path>
              <circle cx="40" cy="80" r="2.6" fill="#dfe6f2" stroke="none" style="opacity:.9;"></circle>
              <circle cx="54" cy="79" r="2.6" fill="#dfe6f2" stroke="none" style="opacity:.9;"></circle>
              <path d="M43,89 Q47,92 51,88" style="opacity:.8;"></path>
              <path d="M70,86 Q82,80 90,72" style="opacity:.7;"></path>
            </g>
            <g style="animation:gsBob 4s 2s ease-in-out infinite;">
              <path d="M230,112 C226,96 228,74 238,64 C246,55 264,54 272,64 C280,74 282,96 278,112 C272,106 266,108 262,113 C256,108 250,108 244,113 C239,108 234,107 230,112" style="opacity:.85;"></path>
              <circle cx="248" cy="80" r="2.6" fill="#dfe6f2" stroke="none" style="opacity:.9;"></circle>
              <circle cx="262" cy="79" r="2.6" fill="#dfe6f2" stroke="none" style="opacity:.9;"></circle>
              <path d="M251,89 Q255,92 259,88" style="opacity:.8;"></path>
              <path d="M232,86 Q220,80 212,72" style="opacity:.7;"></path>
              <path d="M244,62 L252,68 M252,62 L244,68" stroke="#8fb8ff" stroke-width="1.4" style="opacity:.9;"></path>
            </g>
            <path d="M96,68 C130,44 170,44 204,68" style="opacity:.5;stroke-dasharray:.05 .06;animation:gsMarch 4s linear infinite;" pathLength="1"></path>
            <path d="M196,60 L206,68 L195,73" style="opacity:.6;"></path>
            <g>
              <path d="M-9,-12 L9,-14 L11,12 L-7,14 Z" style="opacity:.95;"></path>
              <path d="M-4,-6 L5,-7 M-3,0 L6,-1" style="opacity:.5;"></path>
              <path d="M-3,6 L0,9 L7,0" stroke="#8fb8ff" stroke-width="1.8"></path>
              <animateMotion dur="3s" repeatCount="indefinite" path="M96,60 C130,36 170,36 204,60"></animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="3s" repeatCount="indefinite"></animate>
            </g>
            <text x="150" y="120" text-anchor="middle" fill="#5d6f9c" stroke="none" style="font-family:'IBM Plex Mono',monospace;font-size:11px;">their scar, your skill</text>
          </g>
        </svg>
      </div>
    </div>
  </section>

  <section id="pricing" style="margin-top:150px;background:#e9eaec;color:#10141f;padding:110px 28px;box-sizing:border-box;">
    <div style="max-width:1240px;margin:0 auto;">
      <div style="display:flex;flex-direction:column;align-items:center;text-align:center;">
        <div data-reveal="" style="display:flex;align-items:center;gap:12px;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.14em;color:#39415a;">
          <span style="width:7px;height:7px;background:#2453c4;"></span><span>PRICING</span>
        </div>
        <h2 data-reveal="2" style="margin:22px 0 0;font-size:clamp(32px,4.2vw,52px);font-weight:500;letter-spacing:-0.03em;line-height:1.12;text-wrap:balance;">Your own memory is <em style="font-family:'Instrument Serif',serif;font-style:italic;font-weight:400;color:#2453c4;">free</em>.<br>The collective memory is <em style="font-family:'Instrument Serif',serif;font-style:italic;font-weight:400;color:#2453c4;">a game changer</em>.</h2>
        <p data-reveal="3" style="margin:18px 0 0;max-width:660px;font-size:16px;line-height:1.7;color:#3c4356;text-wrap:pretty;">We never charge for retrieving your own skills, distilling on your own key, or validating. You pay only for access to the collective memory — measured in unlocks.</p>
      </div>
      <div style="margin-top:60px;display:grid;grid-template-columns:repeat(auto-fit,minmax(255px,1fr));gap:14px;align-items:stretch;">
        <div data-reveal="" style="background:#f5f5f4;border:1px solid rgba(16,20,31,.2);border-radius:4px;padding:32px 28px;display:flex;flex-direction:column;transition:transform .3s ease;" class="gsh16">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.14em;color:#39415a;">FREE</div>
          <div style="margin-top:14px;font-size:38px;font-weight:500;letter-spacing:-0.03em;">$0 <span style="font-size:14px;font-weight:400;color:#5a6170;">/ mo</span></div>
          <p style="margin:12px 0 0;font-family:'IBM Plex Mono',monospace;font-size:13px;color:#2453c4;">Your own memory</p>
          <ul style="margin:22px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:12px;font-size:14px;line-height:1.55;color:#3c4356;flex:1;">
            <li style="display:flex;gap:10px;"><span style="color:#2453c4;">✓</span><span>Capture, distill &amp; retrieve your own skills — unlimited, on your own key, forever</span></li>
            <li style="display:flex;gap:10px;"><span style="color:#2453c4;">✓</span><span>+ 5 community unlocks (one-time, to try)</span></li>
          </ul>
          <button onclick="ghostCopy(this)" style="margin-top:26px;width:100%;background:#10141f;border:1px solid #10141f;border-radius:3px;color:#f2f6ff;font-family:'IBM Plex Mono',monospace;font-size:12.5px;font-weight:600;letter-spacing:.06em;padding:13px 0;cursor:pointer;" class="gsh17">[ INSTALL ]</button>
          <p style="margin:16px 0 0;font-size:12px;line-height:1.7;color:#5a6170;text-wrap:pretty;">An unlock is a distinct community skill added to your library. Yours to reuse as much as you want, as long as your plan is active.</p>
        </div>
        <div data-reveal="2" style="background:#0c1633;border:1px solid #0c1633;border-radius:4px;padding:32px 28px;display:flex;flex-direction:column;color:#e9f0ff;box-shadow:0 26px 70px rgba(10,20,60,.35);transition:transform .3s ease;" class="gsh18">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.14em;color:#8fb8ff;">PRO</div>
            <img src="/ghost-logo.png" alt="" style="width:22px;height:auto;animation:gsFloat 4s ease-in-out infinite;">
          </div>
          <div style="margin-top:14px;font-size:38px;font-weight:500;letter-spacing:-0.03em;">$29 <span style="font-size:14px;font-weight:400;color:#8ba0cc;">/ mo</span></div>
          <p style="margin:12px 0 0;font-family:'IBM Plex Mono',monospace;font-size:13px;color:#8fb8ff;">The collective memory</p>
          <ul style="margin:22px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:12px;font-size:14px;line-height:1.55;color:#cfd8ec;flex:1;">
            <li style="display:flex;gap:10px;"><span style="color:#8fb8ff;">✓</span><span>Everything in Free, plus:</span></li>
            <li style="display:flex;gap:10px;"><span style="color:#8fb8ff;">✓</span><span>200 community skill unlocks / month</span></li>
            <li style="display:flex;gap:10px;"><span style="color:#8fb8ff;">✓</span><span>Ranked by measured lift</span></li>
            <li style="display:flex;gap:10px;"><span style="color:#8fb8ff;">✓</span><span>Sync across machines</span></li>
          </ul>
          <a href="${API_BASE}/login?tier=pro" target="_blank" rel="noopener" style="margin-top:26px;display:block;text-align:center;background:#f2f6ff;border:1px solid #f2f6ff;border-radius:3px;color:#0c1633;font-family:'IBM Plex Mono',monospace;font-size:12.5px;font-weight:600;letter-spacing:.06em;padding:13px 0;" class="gsh19">[ GET PRO ]</a>
        </div>
        <div data-reveal="3" style="background:#f5f5f4;border:1px solid rgba(16,20,31,.2);border-radius:4px;padding:32px 28px;display:flex;flex-direction:column;transition:transform .3s ease;" class="gsh20">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.14em;color:#39415a;">TEAM</div>
          <div style="margin-top:14px;font-size:38px;font-weight:500;letter-spacing:-0.03em;">$95 <span style="font-size:14px;font-weight:400;color:#5a6170;">/ mo</span></div>
          <p style="margin:12px 0 0;font-family:'IBM Plex Mono',monospace;font-size:13px;color:#2453c4;">Shared memory</p>
          <ul style="margin:22px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:12px;font-size:14px;line-height:1.55;color:#3c4356;flex:1;">
            <li style="display:flex;gap:10px;"><span style="color:#2453c4;">✓</span><span>Everything in Pro, plus:</span></li>
            <li style="display:flex;gap:10px;"><span style="color:#2453c4;">✓</span><span>1,000 unlocks / month</span></li>
            <li style="display:flex;gap:10px;"><span style="color:#2453c4;">✓</span><span>Shared team registry</span></li>
          </ul>
          <a href="${API_BASE}/login?tier=team" target="_blank" rel="noopener" style="margin-top:26px;display:block;text-align:center;background:none;border:1px solid rgba(16,20,31,.35);border-radius:3px;color:#10141f;font-family:'IBM Plex Mono',monospace;font-size:12.5px;font-weight:600;letter-spacing:.06em;padding:13px 0;" class="gsh21">[ GET TEAM ]</a>
        </div>
        <div data-reveal="4" style="background:#f5f5f4;border:1px solid rgba(16,20,31,.2);border-radius:4px;padding:32px 28px;display:flex;flex-direction:column;transition:transform .3s ease;" class="gsh22">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.14em;color:#39415a;">SCALE</div>
          <div style="margin-top:14px;font-size:38px;font-weight:500;letter-spacing:-0.03em;">$195 <span style="font-size:14px;font-weight:400;color:#5a6170;">/ mo</span></div>
          <p style="margin:12px 0 0;font-family:'IBM Plex Mono',monospace;font-size:13px;color:#2453c4;">Enterprise memory</p>
          <ul style="margin:22px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:12px;font-size:14px;line-height:1.55;color:#3c4356;flex:1;">
            <li style="display:flex;gap:10px;"><span style="color:#2453c4;">✓</span><span>Everything in Team, plus:</span></li>
            <li style="display:flex;gap:10px;"><span style="color:#2453c4;">✓</span><span>4,000 unlocks / month</span></li>
            <li style="display:flex;gap:10px;"><span style="color:#2453c4;">✓</span><span>Private registry</span></li>
            <li style="display:flex;gap:10px;"><span style="color:#2453c4;">✓</span><span>Usage-based beyond quota</span></li>
          </ul>
          <a href="${API_BASE}/login?tier=scale" target="_blank" rel="noopener" style="margin-top:26px;display:block;text-align:center;background:none;border:1px solid rgba(16,20,31,.35);border-radius:3px;color:#10141f;font-family:'IBM Plex Mono',monospace;font-size:12.5px;font-weight:600;letter-spacing:.06em;padding:13px 0;" class="gsh23">[ GET SCALE ]</a>
        </div>
      </div>
      <div data-reveal="" style="margin-top:40px;text-align:center;">
        <p style="margin:0;font-family:'IBM Plex Mono',monospace;font-size:13px;color:#39415a;">We never charge for your own work. Only for the collective memory you draw from.</p>
        <p style="margin:10px 0 0;font-size:14px;color:#5a6170;text-wrap:pretty;">Beyond your quota, pay as you go — like your API bill, but for skills that actually work.</p>
      </div>
    </div>
  </section>

  <section id="social" style="background:#e9eaec;color:#10141f;padding:40px 28px 120px;box-sizing:border-box;border-top:1px solid rgba(16,20,31,.12);">
    <div style="max-width:1200px;margin:0 auto;">
      <div style="padding-top:70px;display:flex;flex-direction:column;align-items:center;text-align:center;">
        <div data-reveal="" style="display:flex;align-items:center;gap:12px;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.14em;color:#39415a;">
          <span style="width:7px;height:7px;background:#2453c4;"></span><span>WORD OF MOUTH</span>
        </div>
        <h2 data-reveal="2" style="margin:22px 0 0;max-width:760px;font-size:clamp(30px,3.8vw,46px);font-weight:500;letter-spacing:-0.03em;line-height:1.12;text-wrap:balance;">You already wrote your best skill. <em style="font-family:'Instrument Serif',serif;font-style:italic;font-weight:400;color:#2453c4;">You just don't know it yet.</em></h2>
      </div>
      <div style="margin-top:56px;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:14px;align-items:start;">
        <div data-reveal="" style="background:#f5f5f4;border:1px solid rgba(16,20,31,.18);border-radius:4px;padding:26px;display:flex;flex-direction:column;gap:16px;transition:transform .3s ease;" class="gsh24">
          <div style="display:flex;align-items:center;gap:11px;">
            <img src="/ghost-logo.png" alt="" style="width:30px;height:auto;">
            <span><span style="display:block;font-size:14px;font-weight:600;">Ghost Skills</span><span style="display:block;font-family:'IBM Plex Mono',monospace;font-size:12px;color:#5a6170;">@ghostskills</span></span>
          </div>
          <p style="margin:0;font-size:14.5px;line-height:1.7;color:#3c4356;text-wrap:pretty;">Your coding agent has goldfish memory.<br>Monday you teach it something. Thursday it makes the same mistake.<br><br>I built Ghost Skills: it reads your session history, pulls out what you already taught it, and feeds it back automatically.<br><br><span style="font-family:'IBM Plex Mono',monospace;font-size:12.5px;color:#2453c4;">uv tool install git+github.com/…/ghost-memory</span> — runs on your existing history.</p>
        </div>
        <div data-reveal="2" style="background:#f5f5f4;border:1px solid rgba(16,20,31,.18);border-radius:4px;padding:26px;display:flex;flex-direction:column;gap:16px;transition:transform .3s ease;" class="gsh25">
          <div style="display:flex;align-items:center;gap:11px;">
            <img src="/ghost-logo.png" alt="" style="width:30px;height:auto;">
            <span><span style="display:block;font-size:14px;font-weight:600;">Ghost Skills</span><span style="display:block;font-family:'IBM Plex Mono',monospace;font-size:12px;color:#5a6170;">@ghostskills</span></span>
          </div>
          <p style="margin:0;font-size:14.5px;line-height:1.7;color:#3c4356;text-wrap:pretty;">I pointed it at my own 412 Claude Code sessions.<br><br>47 skill candidates. 312 failure loops. 89 times I had to correct it by hand.<br><br>Six months of scars, sitting there, unused.</p>
          <div style="font-family:'IBM Plex Mono',monospace;font-size:12.5px;line-height:1.9;background:#0c1633;color:#cfd8ec;border-radius:4px;padding:12px 16px;">
            <div><span style="color:#5d6f9c;">$ </span><span style="color:#e9f0ff;">ghost scan</span></div>
            <div style="color:#8fb8ff;">47 skill candidates found</div>
            <div style="color:#5d6f9c;">312 failure loops · 89 corrections</div>
          </div>
        </div>
        <div data-reveal="3" style="background:#f5f5f4;border:1px solid rgba(16,20,31,.18);border-radius:4px;padding:26px;display:flex;flex-direction:column;gap:16px;transition:transform .3s ease;" class="gsh26">
          <div style="display:flex;align-items:center;gap:11px;">
            <img src="/ghost-logo.png" alt="" style="width:30px;height:auto;">
            <span><span style="display:block;font-size:14px;font-weight:600;">Ghost Skills</span><span style="display:block;font-family:'IBM Plex Mono',monospace;font-size:12px;color:#5a6170;">@ghostskills</span></span>
          </div>
          <p style="margin:0;font-size:14.5px;line-height:1.7;color:#3c4356;text-wrap:pretty;">Nobody writes agent skills because writing one is 2 hours of unpaid work.<br><br>That's why 80% of the 670k public skills are slop.<br><br>So we stopped asking people to write them. We extract them from what you already did.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="objections" style="background:#05070d;padding:130px 28px 0;box-sizing:border-box;">
    <div style="max-width:740px;margin:0 auto;">
      <div style="display:flex;flex-direction:column;align-items:center;text-align:center;">
        <div data-reveal="" style="display:flex;align-items:center;gap:12px;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.14em;color:#8ba0cc;">
          <span style="width:7px;height:7px;background:#8fb8ff;"></span><span>OBJECTIONS</span>
        </div>
        <h2 data-reveal="2" style="margin:22px 0 0;font-size:clamp(30px,3.8vw,46px);font-weight:500;letter-spacing:-0.03em;color:#e9f0ff;text-wrap:balance;">You're skeptical. <em style="font-family:'Instrument Serif',serif;font-style:italic;font-weight:400;color:#a9c9ff;">Good.</em></h2>
      </div>
      <div data-reveal="3" style="margin-top:48px;display:flex;flex-direction:column;gap:10px;">
        <details class="gs-faq"><summary><span>"I already have a CLAUDE.md."</span><span class="gs-faq-mark"></span></summary><div class="gs-faq-a">It's 400 lines, nobody maintains it, and the model ignores half of it. Ghost Skills writes it for you — and only injects what's relevant, when it's relevant.</div></details>
        <details class="gs-faq"><summary><span>"There are already 670,000 free skills."</span><span class="gs-faq-mark"></span></summary><div class="gs-faq-a">Right. None of them know your codebase. Yours does.</div></details>
        <details class="gs-faq"><summary><span>"It reads my code?!"</span><span class="gs-faq-mark"></span></summary><div class="gs-faq-a">Local by default. Nothing leaves your machine. You publish skill by skill, with the diff in front of you, after a mandatory secret scan.</div></details>
        <details class="gs-faq"><summary><span>"Another tool to configure."</span><span class="gs-faq-mark"></span></summary><div class="gs-faq-a">One command. Zero config. And it runs on the history you already have — you see the result in 90 seconds.</div></details>
      </div>
    </div>
  </section>

  <section id="measure" style="margin-top:150px;background:#e9eaec;color:#10141f;padding:110px 28px;box-sizing:border-box;">
    <div style="max-width:1200px;margin:0 auto;">
      <div style="display:flex;flex-direction:column;align-items:center;text-align:center;">
        <div data-reveal="" style="display:flex;align-items:center;gap:12px;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.14em;color:#39415a;">
          <span style="width:7px;height:7px;background:#2453c4;"></span><span>MEASUREMENT</span>
        </div>
        <h2 data-reveal="2" style="margin:22px 0 0;font-size:clamp(32px,4.2vw,52px);font-weight:500;letter-spacing:-0.03em;line-height:1.1;text-wrap:balance;"><em style="font-family:'Instrument Serif',serif;font-style:italic;font-weight:400;color:#2453c4;">Lift</em> is the only number that matters.</h2>
        <p data-reveal="3" style="margin:18px 0 0;max-width:600px;font-size:16px;line-height:1.65;color:#3c4356;text-wrap:pretty;">How much a skill actually improves a task — measured by rerunning it, not guessed from a download count.</p>
        <span data-reveal="3" style="margin-top:22px;font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.14em;color:#5a6170;border:1px solid rgba(16,20,31,.25);padding:6px 14px;">ILLUSTRATIVE EXAMPLE</span>
      </div>
      <div style="margin-top:52px;display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:0;border:1px solid rgba(16,20,31,.18);background:#f2f2f1;align-items:stretch;">
        <div data-reveal="" style="padding:38px 34px;border-right:1px solid rgba(16,20,31,.14);">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.14em;color:#5a6170;">WITHOUT THE SKILL</div>
          <div style="margin-top:20px;display:flex;gap:6px;flex-wrap:wrap;">
            <span class="gs-sq" style="width:16px;height:16px;background:#c6cad2;"></span><span class="gs-sq" style="width:16px;height:16px;background:#c6cad2;"></span><span class="gs-sq" style="width:16px;height:16px;background:#c6cad2;"></span><span class="gs-sq" style="width:16px;height:16px;background:#c6cad2;"></span><span class="gs-sq" style="width:16px;height:16px;background:#c6cad2;"></span><span class="gs-sq" style="width:16px;height:16px;background:#c6cad2;"></span><span class="gs-sq" style="width:16px;height:16px;background:#c6cad2;"></span><span class="gs-sq" style="width:16px;height:16px;background:#c6cad2;"></span><span class="gs-sq" style="width:16px;height:16px;background:#c6cad2;"></span><span class="gs-sq" style="width:16px;height:16px;background:#c6cad2;"></span><span class="gs-sq" style="width:16px;height:16px;background:#c6cad2;"></span><span class="gs-sq" style="width:16px;height:16px;background:#d8836f;"></span><span class="gs-sq" style="width:16px;height:16px;background:#d8836f;"></span><span class="gs-sq" style="width:16px;height:16px;background:#c2503a;"></span>
          </div>
          <div style="margin-top:18px;font-size:30px;font-weight:500;letter-spacing:-0.02em;">14 steps</div>
          <div style="margin-top:6px;font-family:'IBM Plex Mono',monospace;font-size:13px;color:#c2503a;">✗ failed</div>
        </div>
        <div data-reveal="2" style="padding:38px 34px;border-right:1px solid rgba(16,20,31,.14);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;background:#eceded;">
          <div style="font-size:clamp(56px,6vw,84px);font-weight:500;letter-spacing:-0.04em;line-height:1;color:#10141f;">−<span data-count="57">57</span>%</div>
          <div style="margin-top:12px;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.08em;color:#5a6170;">FEWER STEPS · THIS EXAMPLE</div>
          <svg aria-hidden="true" width="150" height="46" viewBox="0 0 150 46" style="margin-top:14px;pointer-events:none;">
            <g fill="none" stroke="#2453c4" stroke-width="1.8" stroke-linecap="round">
              <path class="gs-d gs-t2" pathLength="1" d="M12,14 C50,34 100,34 134,18"></path>
              <path class="gs-d gs-t3" pathLength="1" d="M124,14 L136,17 L128,28"></path>
            </g>
          </svg>
        </div>
        <div data-reveal="3" style="padding:38px 34px;">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.14em;color:#2453c4;">WITH THE SKILL</div>
          <div style="margin-top:20px;display:flex;gap:6px;flex-wrap:wrap;">
            <span class="gs-sq" style="width:16px;height:16px;background:#2453c4;"></span><span class="gs-sq" style="width:16px;height:16px;background:#2453c4;"></span><span class="gs-sq" style="width:16px;height:16px;background:#2453c4;"></span><span class="gs-sq" style="width:16px;height:16px;background:#2453c4;"></span><span class="gs-sq" style="width:16px;height:16px;background:#2453c4;"></span><span class="gs-sq" style="width:16px;height:16px;background:#6f9be8;"></span>
          </div>
          <div style="margin-top:18px;font-size:30px;font-weight:500;letter-spacing:-0.02em;">6 steps</div>
          <div style="margin-top:6px;font-family:'IBM Plex Mono',monospace;font-size:13px;color:#2453c4;">✓ committed</div>
        </div>
      </div>
      <div style="margin-top:14px;display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px;">
        <div data-reveal="" style="background:#f5f5f4;border:1px solid rgba(16,20,31,.18);border-radius:4px;padding:22px 26px;" class="gsh28">
          <div style="font-size:15px;font-weight:600;">Alembic migration on a ledger table</div>
          <p style="margin:8px 0 0;font-family:'IBM Plex Mono',monospace;font-size:12.5px;color:#5a6170;">7 failed attempts learned once → applied instantly</p>
        </div>
        <div data-reveal="2" style="background:#f5f5f4;border:1px solid rgba(16,20,31,.18);border-radius:4px;padding:22px 26px;" class="gsh29">
          <div style="font-size:15px;font-weight:600;">TypeScript compile loop (edit → edit → tsc)</div>
          <p style="margin:8px 0 0;font-family:'IBM Plex Mono',monospace;font-size:12.5px;color:#5a6170;">the fix it kept rediscovering, remembered</p>
        </div>
        <div data-reveal="3" style="background:#f5f5f4;border:1px solid rgba(16,20,31,.18);border-radius:4px;padding:22px 26px;" class="gsh30">
          <div style="font-size:15px;font-weight:600;">API status-code guessing</div>
          <p style="margin:8px 0 0;font-family:'IBM Plex Mono',monospace;font-size:12.5px;color:#5a6170;">stops guessing, checks the contract</p>
        </div>
      </div>
      <div data-reveal="" style="margin-top:64px;text-align:center;max-width:720px;margin-left:auto;margin-right:auto;">
        <p style="margin:0;font-size:16.5px;line-height:1.75;color:#3c4356;text-wrap:pretty;"><span data-count="670000" style="font-family:'IBM Plex Mono',monospace;font-weight:600;">670,000</span> skills out there, ranked by download count — a number you can buy.</p>
        <p style="margin:12px 0 0;font-size:16.5px;line-height:1.75;color:#10141f;font-weight:500;">We rank by what a skill does to real code.</p>
        <p style="margin:34px 0 0;font-family:'IBM Plex Mono',monospace;font-size:clamp(20px,2.4vw,28px);color:#2453c4;">We don't count. We measure.<span style="display:inline-block;width:10px;height:22px;background:#2453c4;margin-left:10px;vertical-align:-2px;animation:gsBlink 1.1s steps(1) infinite;"></span></p>
        <p style="margin:34px 0 0;font-size:13px;line-height:1.7;color:#5a6170;text-wrap:pretty;">Every real number on this site comes from replaying your own past tasks. Until yours are measured, the examples above are just that — examples.</p>
      </div>
    </div>
  </section>

  <section style="position:relative;background:linear-gradient(180deg,#05070d 0%,#0a1f4d 55%,#1c4bb0 100%);padding:150px 28px 130px;box-sizing:border-box;overflow:hidden;">
    <div style="position:absolute;inset:0;background-image:radial-gradient(rgba(150,190,255,.28) 1.2px,transparent 1.2px);background-size:16px 16px;mask-image:linear-gradient(180deg,transparent,black 60%);-webkit-mask-image:linear-gradient(180deg,transparent,black 60%);pointer-events:none;"></div>
    <div style="max-width:820px;margin:0 auto;display:flex;flex-direction:column;align-items:center;text-align:center;position:relative;">
      <img data-reveal="" src="/ghost-logo.png" alt="" style="width:74px;height:auto;animation:gsFloat 5s ease-in-out infinite;filter:drop-shadow(0 14px 36px rgba(0,5,25,.7));">
      <h2 data-reveal="2" style="margin:26px 0 0;font-size:clamp(30px,4vw,50px);font-weight:500;letter-spacing:-0.03em;line-height:1.12;color:#e9f0ff;text-wrap:balance;">Six months of debugging. None of it saved.<br><em style="font-family:'Instrument Serif',serif;font-style:italic;font-weight:400;color:#a9c9ff;">Until now.</em></h2>
      <p data-reveal="3" style="margin:18px 0 0;font-size:16px;color:#b7c7ea;max-width:480px;line-height:1.65;">Turns your coding history into skills your agent actually uses.</p>
      <div data-reveal="3" style="margin-top:34px;display:flex;align-items:center;gap:14px;background:rgba(5,10,26,.75);border:1px solid rgba(150,185,255,.3);border-radius:4px;padding:13px 16px 13px 18px;font-family:'IBM Plex Mono',monospace;font-size:13.5px;max-width:92vw;">
        <span style="color:#6d84b8;user-select:none;">$</span>
        <span style="color:#e9f0ff;white-space:nowrap;overflow-x:auto;max-width:56vw;">uv tool install git+${GITHUB}</span>
        <button onclick="ghostCopy(this)" style="background:rgba(150,185,255,.12);border:1px solid rgba(150,185,255,.3);border-radius:3px;color:#c9dcff;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.06em;padding:5px 12px;cursor:pointer;" class="gsh31">copy</button>
      </div>
      <p data-reveal="4" style="margin:22px 0 0;font-family:'IBM Plex Mono',monospace;font-size:11.5px;line-height:1.8;color:#9cb4e2;max-width:560px;">Telemetry is off by default. When enabled, we receive command names and error classes. Never your code, your paths, or your prompts.</p>
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
        <a href="#problem" style="color:#8ba0cc;">THE PROBLEM</a>
        <a href="#features" style="color:#8ba0cc;">WHY US</a>
        <a href="#pricing" style="color:#8ba0cc;">PRICING</a>
        <a href="${GITHUB}" target="_blank" rel="noopener" style="color:#8ba0cc;">GITHUB ↗</a>
      </div>
    </div>
  </footer>

</div>
`;
