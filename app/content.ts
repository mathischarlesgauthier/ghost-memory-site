// Port fidèle du design Claude (Ghost Memory Landing v5). Copy inchangée, sauf
// les deux substitutions imposées par le cahier des charges du lot 8 :
//  1. la commande d'install → la forme git+https exacte (le paquet n'est pas
//     sur PyPI, l'écriture `uv tool install ghost-memory` est interdite) ;
//  2. le pied → la ligne télémétrie unique fournie par le cahier des charges.
// Les liens GitHub pointent vers le repo. L'accordéon FAQ et les compteurs sont
// rendus sans JavaScript (details/summary, valeurs statiques).

const GITHUB = "https://github.com/mathischarlesgauthier/ghost-memory";
// Base de l'API réseau (Lot G). CTA payants → /login (web device flow → cookie
// → Checkout). À pointer sur l'URL Railway/domaine une fois le backend live.
const API_BASE = "https://api.ghost-memory.com";

export const CONTENT_HTML = `
<div style="min-height:100vh;background:#0a0a0c;overflow-x:hidden;">

  <div style="background:#131316;border-bottom:1px solid rgba(255,255,255,.06);text-align:center;padding:7px 16px;font-family:'Geist Mono',monospace;font-size:12px;color:#9b9ba4;">Early access — the collective memory is just getting seeded. Your contributions seed it.</div>

  <header style="position:sticky;top:0;z-index:50;background:rgba(10,10,12,.82);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,.06);">
    <div style="display:flex;align-items:center;gap:28px;max-width:1120px;margin:0 auto;padding:14px 32px;">
      <a href="#hero" style="display:flex;align-items:center;gap:10px;">
        <img src="/ghost-logo.svg" alt="Ghost Memory" style="width:22px;height:auto;display:block;">
        <span style="font-family:'Geist Mono',monospace;font-size:14px;font-weight:500;">ghost-memory</span>
      </a>
      <nav class="gb-nav-links" style="display:flex;gap:24px;flex:1;justify-content:center;flex-wrap:wrap;">
        <a href="#problem" style="font-size:14px;color:#9b9ba4;">The problem</a>
        <a href="#features" style="font-size:14px;color:#9b9ba4;">Why Us</a>
        <a href="#process" style="font-size:14px;color:#9b9ba4;">How it works</a>
        <a href="#pricing" style="font-size:14px;color:#9b9ba4;">Pricing</a>
        <a href="#objections" style="font-size:14px;color:#9b9ba4;">Objections</a>
      </nav>
      <a href="${GITHUB}" class="gb-nav-gh" style="font-family:'Geist Mono',monospace;font-size:13px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:6px;padding:7px 14px;color:#ececf1;margin-left:auto;">GitHub ↗</a>
    </div>
  </header>

  <section id="hero" style="position:relative;display:flex;flex-direction:column;align-items:center;text-align:center;padding:96px 32px 0;">
    <div style="position:absolute;top:-120px;left:50%;transform:translateX(-50%);width:720px;height:480px;max-width:100%;background:radial-gradient(closest-side,rgba(124,227,139,.07),transparent);pointer-events:none;"></div>
    <h1 style="margin:0;font-size:clamp(40px,5.6vw,70px);font-weight:600;letter-spacing:-0.035em;line-height:1.06;text-wrap:balance;position:relative;max-width:900px;">Your agent, powered by every developer's hard-won lessons.</h1>
    <p style="margin:24px 0 0;max-width:640px;font-size:17px;line-height:1.65;color:#9b9ba4;text-wrap:pretty;position:relative;">Ghost&nbsp;Memory taps the collective memory of thousands of developers — the fixes, the shortcuts, the traps they learned the hard way — and feeds the right one into your agent as you code. <span style="color:#c9c9d1;">Ranked by what actually works. Measured, not upvoted.</span></p>
    <div style="margin-top:34px;display:flex;align-items:center;gap:14px;max-width:100%;background:#101014;border:1px solid rgba(255,255,255,.09);border-radius:8px;padding:12px 14px 12px 18px;font-family:'Geist Mono',monospace;font-size:15px;box-shadow:0 8px 32px rgba(0,0,0,.45);position:relative;">
      <span style="color:#62626c;user-select:none;">$</span>
      <span class="gb-cmd" style="color:#ececf1;white-space:nowrap;">uv tool install git+https://github.com/mathischarlesgauthier/ghost-memory</span>
      <button data-label="copy" onclick="ghostCopy(this)" class="gb-copy" style="margin-left:8px;flex-shrink:0;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:5px;color:#9b9ba4;font-family:'Geist Mono',monospace;font-size:12px;padding:5px 11px;cursor:pointer;">copy</button>
    </div>
    <p style="margin:12px 0 0;font-family:'Geist Mono',monospace;font-size:13px;color:#9b9ba4;position:relative;">then <span style="color:#7ce38b;">ghost init</span> <span style="color:#62626c;">— see your candidates in 90 seconds</span></p>
    <p style="margin:10px 0 0;font-family:'Geist Mono',monospace;font-size:12px;color:#62626c;position:relative;max-width:100%;">Prefer pip? &nbsp;<span class="gb-cmd" style="color:#9b9ba4;white-space:nowrap;">pip install git+https://github.com/mathischarlesgauthier/ghost-memory</span></p>
    <div style="margin-top:26px;display:flex;flex-wrap:wrap;justify-content:center;gap:10px 14px;position:relative;">
      <span class="gb-benefit">Fewer wasted tokens</span>
      <span style="color:#33333a;">·</span>
      <span class="gb-benefit">Fewer retries</span>
      <span style="color:#33333a;">·</span>
      <span class="gb-benefit">Your stack, not generic advice</span>
    </div>
    <p style="margin:18px 0 0;font-family:'Geist Mono',monospace;font-size:12px;color:#62626c;position:relative;">Runs on your existing history. Nothing leaves your machine.</p>
  </section>

  <section style="padding:72px 32px 0;">
    <div data-reveal="" style="max-width:720px;margin:0 auto;text-align:center;">
      <p style="margin:0;font-size:17px;line-height:1.8;color:#9b9ba4;text-wrap:pretty;">670,000 skills out there, ranked by download count. <span style="color:#62626c;">A number you can buy. It tells you nothing.</span></p>
      <p style="margin:16px 0 0;font-size:17px;line-height:1.8;color:#c9c9d1;font-weight:500;text-wrap:pretty;">Ghost&nbsp;Memory ranks by <span style="color:#7ce38b;">lift</span> — how much a skill actually improves a real task, measured by rerunning it.</p>
      <p style="margin:24px 0 0;font-family:'Geist Mono',monospace;font-size:clamp(20px,2.6vw,30px);color:#7ce38b;">We don't count. We measure.</p>
    </div>
  </section>

  <section style="padding:72px 32px 0;">
    <div data-reveal="" style="max-width:960px;margin:0 auto;background:#0d0d10;border:1px solid rgba(255,255,255,.1);border-radius:12px;overflow:hidden;box-shadow:0 30px 90px rgba(0,0,0,.6), 0 0 140px rgba(124,227,139,.05);">
      <div style="display:flex;align-items:center;gap:7px;padding:13px 16px;border-bottom:1px solid rgba(255,255,255,.07);background:#111116;">
        <span style="width:11px;height:11px;border-radius:50%;background:#26262c;"></span>
        <span style="width:11px;height:11px;border-radius:50%;background:#26262c;"></span>
        <span style="width:11px;height:11px;border-radius:50%;background:#26262c;"></span>
      </div>
      <div class="gb-term" style="padding:26px 30px 30px;font-family:'Geist Mono',monospace;font-size:14.5px;line-height:1.75;display:flex;flex-direction:column;gap:2px;overflow-x:auto;">
        <div class="gb-tl"><span style="color:#62626c;">$ </span><span style="color:#ececf1;">ghost scan</span></div>
        <div class="gb-tl" style="color:#9b9ba4;">Parsing 418 sessions...&nbsp;&nbsp;<span class="gb-bar" style="color:#7ce38b;">████████████</span>&nbsp;&nbsp;100%</div>
        <div style="height:14px;"></div>
        <div class="gb-tl" style="color:#7ce38b;font-weight:500;">47 skill candidates found</div>
        <div class="gb-tl" style="color:#62626c;">312 failure loops · 89 human corrections · 23 repeated patterns</div>
        <div style="height:14px;"></div>
        <div class="gb-tl" style="display:flex;gap:12px;flex-wrap:wrap;"><span style="color:#62626c;">1.</span><span style="color:#ececf1;flex:1;min-width:200px;">Alembic migrations on Ledger schema</span><span style="color:#9b9ba4;">11x · 4 sessions</span></div>
        <div class="gb-tl" style="display:flex;gap:12px;"><span style="visibility:hidden;">1.</span><span style="color:#62626c;">↳ 7 failures before convergence</span></div>
        <div class="gb-tl" style="display:flex;gap:12px;flex-wrap:wrap;"><span style="color:#62626c;">2.</span><span style="color:#ececf1;flex:1;min-width:200px;">MCP server setup + auth token rotation</span><span style="color:#9b9ba4;">&nbsp;8x · 3 sessions</span></div>
        <div class="gb-tl" style="display:flex;gap:12px;flex-wrap:wrap;"><span style="color:#62626c;">3.</span><span style="color:#ececf1;flex:1;min-width:200px;">pgvector index debugging</span><span style="color:#9b9ba4;">&nbsp;6x · 3 sessions</span></div>
        <div style="height:14px;"></div>
        <div class="gb-tl" style="color:#9b9ba4;">Nothing left your machine.<span style="display:inline-block;width:8px;height:16px;background:#7ce38b;margin-left:8px;vertical-align:-2px;animation:gbBlink 1.1s steps(1) infinite;"></span></div>
      </div>
    </div>
  </section>

  <section style="margin-top:110px;border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06);background:#0c0c0f;overflow:hidden;">
    <div style="display:flex;width:max-content;animation:gbMarquee 55s linear infinite;padding:16px 0;">
      <div style="display:flex;align-items:center;gap:36px;padding-right:36px;font-family:'Geist Mono',monospace;font-size:13.5px;color:#9b9ba4;white-space:nowrap;">
        <span>Ghost Memory reads your scars.</span><img src="/ghost-logo.svg" alt="" style="width:15px;height:auto;opacity:.5;">
        <span>Every correction you make: paid once, reused forever.</span><img src="/ghost-logo.svg" alt="" style="width:15px;height:auto;opacity:.5;">
        <span>Your agent doesn't need a bigger brain. It needs a memory.</span><img src="/ghost-logo.svg" alt="" style="width:15px;height:auto;opacity:.5;">
        <span>The knowledge isn't in the docs. It's in the 7 times it broke before it worked.</span><img src="/ghost-logo.svg" alt="" style="width:15px;height:auto;opacity:.5;">
        <span>Nobody writes skills. That's the whole problem — and why Ghost Memory writes them for you.</span><img src="/ghost-logo.svg" alt="" style="width:15px;height:auto;opacity:.5;">
      </div>
      <div style="display:flex;align-items:center;gap:36px;padding-right:36px;font-family:'Geist Mono',monospace;font-size:13.5px;color:#9b9ba4;white-space:nowrap;">
        <span>Ghost Memory reads your scars.</span><img src="/ghost-logo.svg" alt="" style="width:15px;height:auto;opacity:.5;">
        <span>Every correction you make: paid once, reused forever.</span><img src="/ghost-logo.svg" alt="" style="width:15px;height:auto;opacity:.5;">
        <span>Your agent doesn't need a bigger brain. It needs a memory.</span><img src="/ghost-logo.svg" alt="" style="width:15px;height:auto;opacity:.5;">
        <span>The knowledge isn't in the docs. It's in the 7 times it broke before it worked.</span><img src="/ghost-logo.svg" alt="" style="width:15px;height:auto;opacity:.5;">
        <span>Nobody writes skills. That's the whole problem — and why Ghost Memory writes them for you.</span><img src="/ghost-logo.svg" alt="" style="width:15px;height:auto;opacity:.5;">
      </div>
    </div>
  </section>

  <section id="features" style="padding:150px 32px 0;">
    <div style="max-width:1120px;margin:0 auto;">
      <div data-reveal="" style="text-align:center;display:flex;flex-direction:column;align-items:center;">
        <span style="font-family:'Geist Mono',monospace;font-size:12px;color:#7ce38b;border:1px solid rgba(124,227,139,.25);background:rgba(124,227,139,.06);border-radius:999px;padding:5px 14px;">Why Us</span>
        <h2 style="margin:20px 0 0;font-size:clamp(30px,3.6vw,42px);font-weight:600;letter-spacing:-0.025em;line-height:1.15;max-width:640px;text-wrap:balance;">Your agent doesn't need a bigger brain. It needs a memory.</h2>
      </div>
      <div style="margin-top:56px;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px;">
        <div data-reveal="" class="gb-card" style="background:#101014;border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:28px;">
          <h3 style="margin:0;font-size:17px;font-weight:600;">Stop repeating yourself</h3>
          <p style="margin:10px 0 0;font-size:14px;line-height:1.65;color:#9b9ba4;text-wrap:pretty;">Your agent stops rediscovering what you already taught it.</p>
          <div style="margin-top:22px;font-family:'Geist Mono',monospace;font-size:13px;line-height:2;background:#0d0d10;border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:14px 18px;">
            <div><span style="color:#62626c;">failure loops</span> <span style="color:#ececf1;">312</span></div>
            <div><span style="color:#62626c;">human corrections</span> <span style="color:#ececf1;">89</span></div>
            <div><span style="color:#62626c;">extracted skills</span> <span style="color:#7ce38b;">47</span></div>
          </div>
        </div>
        <div data-reveal="" class="gb-card" style="background:#101014;border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:28px;">
          <h3 style="margin:0;font-size:17px;font-weight:600;">Your codebase, not generic advice</h3>
          <p style="margin:10px 0 0;font-size:14px;line-height:1.65;color:#9b9ba4;text-wrap:pretty;">Ghost Memory only learns from your sessions, your repo, your conventions.</p>
          <div style="margin-top:22px;font-family:'Geist Mono',monospace;font-size:13px;background:#0d0d10;border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:14px 18px;line-height:2;">
            <div style="color:#62626c;">// before: 7 failures</div>
            <div style="color:#62626c;">// after:</div>
            <div><span style="color:#7ce38b;">skill</span> <span style="color:#ececf1;">alembic-ledger-migrations</span> <span style="color:#7ce38b;">✓</span></div>
          </div>
        </div>
        <div data-reveal="" class="gb-card" style="background:#101014;border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:28px;display:flex;flex-direction:column;justify-content:space-between;gap:18px;">
          <div>
            <h3 style="margin:0;font-size:17px;font-weight:600;">Zero effort</h3>
            <p style="margin:10px 0 0;font-size:14px;line-height:1.65;color:#9b9ba4;text-wrap:pretty;">No files to write. No skills to hunt for. No config.</p>
          </div>
          <div style="font-family:'Geist Mono',monospace;"><span style="font-size:40px;font-weight:600;color:#7ce38b;letter-spacing:-0.02em;">0</span><span style="margin-left:12px;font-size:13px;color:#62626c;">config files</span></div>
        </div>
        <div data-reveal="" class="gb-card" style="background:#101014;border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:28px;">
          <h3 style="margin:0;font-size:17px;font-weight:600;">Paid once, reused forever</h3>
          <p style="margin:10px 0 0;font-size:14px;line-height:1.65;color:#9b9ba4;text-wrap:pretty;">Every correction you make becomes capital. The knowledge isn't in the docs — it's in the 7 times it broke before it worked.</p>
        </div>
        <div data-reveal="" class="gb-card" style="background:#101014;border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:28px;display:flex;flex-direction:column;justify-content:space-between;gap:18px;">
          <div>
            <h3 style="margin:0;font-size:17px;font-weight:600;">Local-first</h3>
            <p style="margin:10px 0 0;font-size:14px;line-height:1.65;color:#9b9ba4;text-wrap:pretty;">Runs on your existing history, on your machine. Nothing is published without you seeing the diff first.</p>
          </div>
          <div style="font-family:'Geist Mono',monospace;"><span style="font-size:40px;font-weight:600;color:#7ce38b;letter-spacing:-0.02em;">0</span><span style="margin-left:12px;font-size:13px;color:#62626c;">bytes leave your machine</span></div>
        </div>
      </div>
    </div>
  </section>

  <section id="process" style="padding:150px 32px 0;">
    <div style="max-width:1120px;margin:0 auto;">
      <div data-reveal="" style="text-align:center;display:flex;flex-direction:column;align-items:center;">
        <span style="font-family:'Geist Mono',monospace;font-size:12px;color:#7ce38b;border:1px solid rgba(124,227,139,.25);background:rgba(124,227,139,.06);border-radius:999px;padding:5px 14px;">How it works</span>
        <h2 style="margin:20px 0 0;font-size:clamp(30px,3.6vw,42px);font-weight:600;letter-spacing:-0.025em;line-height:1.15;text-wrap:balance;">Three commands. That's the whole workflow.</h2>
        <p style="margin:16px 0 0;max-width:560px;font-size:16px;line-height:1.6;color:#9b9ba4;text-wrap:pretty;">One command. Zero config. And it runs on the history you already have — you see the result in 90 seconds.</p>
      </div>
      <div style="margin-top:56px;display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;">
        <div data-reveal="" style="background:#101014;border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:28px;">
          <div style="font-family:'Geist Mono',monospace;font-size:13px;color:#62626c;">01</div>
          <div style="margin-top:14px;font-family:'Geist Mono',monospace;font-size:16px;"><span style="color:#62626c;">$ </span><span style="color:#7ce38b;">ghost scan</span></div>
          <p style="margin:10px 0 0;font-size:14px;line-height:1.65;color:#9b9ba4;">read your past sessions</p>
        </div>
        <div data-reveal="" style="background:#101014;border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:28px;">
          <div style="font-family:'Geist Mono',monospace;font-size:13px;color:#62626c;">02</div>
          <div style="margin-top:14px;font-family:'Geist Mono',monospace;font-size:16px;"><span style="color:#62626c;">$ </span><span style="color:#7ce38b;">ghost run</span></div>
          <p style="margin:10px 0 0;font-size:14px;line-height:1.65;color:#9b9ba4;">distill them into skills</p>
        </div>
        <div data-reveal="" style="background:#101014;border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:28px;">
          <div style="font-family:'Geist Mono',monospace;font-size:13px;color:#62626c;">03</div>
          <div style="margin-top:14px;font-family:'Geist Mono',monospace;font-size:16px;"><span style="color:#62626c;">$ </span><span style="color:#7ce38b;">ghost deploy</span></div>
          <p style="margin:10px 0 0;font-size:14px;line-height:1.65;color:#9b9ba4;">wire them into your agent</p>
        </div>
      </div>
      <p data-reveal="" style="margin:28px 0 0;text-align:center;font-size:15px;color:#9b9ba4;">That's it. Then you just work.</p>
    </div>
  </section>

  <section id="problem" style="padding:150px 32px 0;">
    <div style="max-width:760px;margin:0 auto;">
      <div data-reveal="" style="display:flex;">
        <span style="font-family:'Geist Mono',monospace;font-size:12px;color:#7ce38b;border:1px solid rgba(124,227,139,.25);background:rgba(124,227,139,.06);border-radius:999px;padding:5px 14px;">The bill you're already paying</span>
      </div>
      <div style="margin-top:48px;display:flex;flex-direction:column;gap:40px;">
        <div data-reveal="">
          <div style="font-family:'Geist Mono',monospace;font-size:15px;color:#7ce38b;">Monday.</div>
          <p style="margin:12px 0 0;font-size:clamp(19px,2.2vw,24px);line-height:1.55;color:#d6d6dd;text-wrap:pretty;">You explain that migrations on your ledger table have to go through <span style="font-family:'Geist Mono',monospace;font-size:.82em;background:rgba(255,255,255,.07);border-radius:5px;padding:2px 8px;">batch_alter_table</span>. It gets it. It works.</p>
        </div>
        <div data-reveal="">
          <div style="font-family:'Geist Mono',monospace;font-size:15px;color:#7ce38b;">Thursday.</div>
          <p style="margin:12px 0 0;font-size:clamp(19px,2.2vw,24px);line-height:1.55;color:#d6d6dd;">New session. It doesn't know. Seven attempts. Forty minutes.</p>
        </div>
        <div data-reveal="">
          <div style="font-family:'Geist Mono',monospace;font-size:15px;color:#7ce38b;">Next month.</div>
          <p style="margin:12px 0 0;font-size:clamp(19px,2.2vw,24px);line-height:1.55;color:#d6d6dd;">Your new hire hits the same wall.</p>
        </div>
      </div>
      <p data-reveal="" style="margin:64px 0 0;font-size:clamp(28px,3.4vw,40px);font-weight:600;letter-spacing:-0.03em;line-height:1.15;color:#ececf1;text-wrap:balance;">You've paid for that lesson three times.</p>
    </div>
  </section>

  <section style="padding:150px 32px 0;">
    <div style="max-width:1000px;margin:0 auto;">
      <h2 data-reveal="" style="margin:0;text-align:center;font-size:clamp(30px,3.6vw,42px);font-weight:600;letter-spacing:-0.025em;line-height:1.15;text-wrap:balance;">Your agent's knowledge is worthless. <span style="color:#7ce38b;">Your scars aren't.</span></h2>
      <div style="margin-top:56px;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px;align-items:stretch;">
        <div data-reveal="" style="background:#0d0d10;border:1px solid rgba(255,255,255,.07);border-radius:14px;padding:36px 32px;">
          <div style="font-family:'Geist Mono',monospace;font-size:12px;letter-spacing:.1em;color:#62626c;">WORTHLESS</div>
          <p style="margin:18px 0 0;font-size:19px;line-height:1.5;color:#9b9ba4;font-weight:500;text-wrap:pretty;">What Claude gets right on the first try.</p>
          <p style="margin:14px 0 0;font-size:15px;line-height:1.7;color:#62626c;text-wrap:pretty;">It's in the model. Everyone has it. Any prompt regenerates it.</p>
        </div>
        <div data-reveal="" style="background:rgba(124,227,139,.05);border:1px solid rgba(124,227,139,.4);border-radius:14px;padding:36px 32px;box-shadow:0 0 60px rgba(124,227,139,.06);">
          <div style="font-family:'Geist Mono',monospace;font-size:12px;letter-spacing:.1em;color:#7ce38b;">YOUR CAPITAL</div>
          <p style="margin:18px 0 0;font-size:19px;line-height:1.5;color:#ececf1;font-weight:500;text-wrap:pretty;">The 7 times it broke before it worked.<br>The 12 times you said &quot;no, not like that.&quot;</p>
          <p style="margin:14px 0 0;font-size:15px;line-height:1.7;color:#c9c9d1;text-wrap:pretty;">That doesn't exist anywhere except in your history. By definition, no model can guess it — if it could, you wouldn't have had to correct it.</p>
        </div>
      </div>
      <p data-reveal="" style="margin:56px 0 0;text-align:center;font-family:'Geist Mono',monospace;font-size:clamp(20px,2.4vw,28px);color:#7ce38b;">Ghost Memory reads your scars.</p>
    </div>
  </section>

  <section style="padding:150px 32px 0;">
    <div style="max-width:760px;margin:0 auto;text-align:center;display:flex;flex-direction:column;align-items:center;">
      <img data-reveal="" src="/ghost-logo.svg" alt="" style="width:46px;height:auto;animation:gbFloat 5s ease-in-out infinite;filter:drop-shadow(0 8px 24px rgba(0,0,0,.6));">
      <h2 data-reveal="" style="margin:28px 0 0;font-size:clamp(32px,4vw,48px);font-weight:600;letter-spacing:-0.03em;line-height:1.12;text-wrap:balance;">You already paid for your scars.<br><span style="color:#9b9ba4;">You haven't paid for theirs.</span></h2>
      <p data-reveal="" style="margin:36px 0 0;max-width:620px;font-size:18px;line-height:1.75;color:#9b9ba4;text-wrap:pretty;">Your own history only gives you back what you already learned the hard way. Useful — you never pay for it twice. But you already took the hit.</p>
      <p data-reveal="" style="margin:22px 0 0;max-width:620px;font-size:18px;line-height:1.75;color:#c9c9d1;text-wrap:pretty;">The wall you'll hit next Thursday, someone already hit it. Their scar is distilled, measured, and waiting.</p>
      <p data-reveal="" style="margin:44px 0 0;font-size:clamp(22px,2.6vw,30px);font-weight:600;letter-spacing:-0.02em;line-height:1.3;color:#7ce38b;text-wrap:balance;">You cannot build that alone. No matter how good you are.</p>
    </div>
  </section>

  <section id="pricing" style="padding:150px 32px 0;">
    <div style="max-width:1120px;margin:0 auto;">
      <div data-reveal="" style="text-align:center;display:flex;flex-direction:column;align-items:center;">
        <span style="font-family:'Geist Mono',monospace;font-size:12px;color:#7ce38b;border:1px solid rgba(124,227,139,.25);background:rgba(124,227,139,.06);border-radius:999px;padding:5px 14px;">Pricing</span>
        <h2 style="margin:20px 0 0;font-size:clamp(30px,3.6vw,42px);font-weight:600;letter-spacing:-0.025em;line-height:1.15;text-wrap:balance;">Your own memory is free.<br><span style="color:#9b9ba4;">The collective memory is the product.</span></h2>
        <p style="margin:18px 0 0;max-width:640px;font-size:16px;line-height:1.7;color:#9b9ba4;text-wrap:pretty;">We never charge for retrieving your own skills, distilling on your own key, or validating. You pay only for access to the collective memory — measured in <span style="color:#7ce38b;">unlocks</span>.</p>
      </div>
      <div class="gb-tiers">
        <div class="gb-tier">
          <h3>Free</h3>
          <div class="gb-price-tag">$0<span> / mo</span></div>
          <div class="gb-tagline">Your own memory</div>
          <ul>
            <li><span class="gb-check">&#10003;</span><span>Capture, distill &amp; retrieve your own skills — <span class="gb-kw">unlimited</span>, on your own key, forever</span></li>
            <li><span class="gb-check">&#10003;</span><span>+ 5 community unlocks <span style="color:#62626c;">(one-time, to try)</span></span></li>
          </ul>
          <button data-label="[ Install ]" onclick="ghostCopy(this)" class="gb-tier-cta gb-tier-cta-primary" style="cursor:pointer;font-family:'Geist Mono',monospace;">[ Install ]</button>
          <p style="margin:12px 0 0;font-size:11.5px;line-height:1.55;color:#62626c;">An unlock is a distinct community skill added to your library. Yours to reuse as much as you want, as long as your plan is active.</p>
        </div>
        <div class="gb-tier gb-tier-pro">
          <h3>Pro</h3>
          <div class="gb-price-tag">$29<span> / mo</span></div>
          <div class="gb-tagline">The collective memory</div>
          <ul>
            <li><span class="gb-check">&#10003;</span><span>Everything in Free, plus:</span></li>
            <li><span class="gb-check">&#10003;</span><span><span style="color:#ececf1;font-weight:500;">200 community skill unlocks</span> / month</span></li>
            <li><span class="gb-check">&#10003;</span><span>Ranked by measured lift</span></li>
            <li><span class="gb-check">&#10003;</span><span>Sync across machines</span></li>
          </ul>
          <a href="${API_BASE}/login?tier=pro" class="gb-tier-cta gb-tier-cta-primary">[ Get Pro ]</a>
        </div>
        <div class="gb-tier">
          <h3>Team</h3>
          <div class="gb-price-tag">$95<span> / mo</span></div>
          <div class="gb-tagline">Shared memory</div>
          <ul>
            <li><span class="gb-check">&#10003;</span><span>Everything in Pro, plus:</span></li>
            <li><span class="gb-check">&#10003;</span><span><span style="color:#ececf1;font-weight:500;">1,000 unlocks</span> / month</span></li>
            <li><span class="gb-check">&#10003;</span><span>Shared team registry</span></li>
          </ul>
          <a href="${API_BASE}/login?tier=team" class="gb-tier-cta">[ Get Team ]</a>
        </div>
        <div class="gb-tier">
          <h3>Scale</h3>
          <div class="gb-price-tag">$195<span> / mo</span></div>
          <div class="gb-tagline">Enterprise memory</div>
          <ul>
            <li><span class="gb-check">&#10003;</span><span>Everything in Team, plus:</span></li>
            <li><span class="gb-check">&#10003;</span><span><span style="color:#ececf1;font-weight:500;">4,000 unlocks</span> / month</span></li>
            <li><span class="gb-check">&#10003;</span><span>Private registry</span></li>
            <li><span class="gb-check">&#10003;</span><span>Usage-based beyond quota</span></li>
          </ul>
          <a href="${API_BASE}/login?tier=scale" class="gb-tier-cta">[ Get Scale ]</a>
        </div>
      </div>
      <div data-reveal="" style="margin:40px auto 0;max-width:760px;text-align:center;">
        <p style="margin:0;font-size:16px;line-height:1.7;color:#c9c9d1;text-wrap:pretty;">We never charge for your own work. Only for the collective memory you draw from.</p>
        <p style="margin:12px 0 0;font-size:15px;line-height:1.7;color:#9b9ba4;text-wrap:pretty;">Beyond your quota, pay as you go — like your API bill, but for skills that actually work.</p>
      </div>
    </div>
  </section>

  <section id="social" style="padding:150px 32px 0;">
    <div style="max-width:1120px;margin:0 auto;">
      <div data-reveal="" style="text-align:center;display:flex;flex-direction:column;align-items:center;">
        <span style="font-family:'Geist Mono',monospace;font-size:12px;color:#7ce38b;border:1px solid rgba(124,227,139,.25);background:rgba(124,227,139,.06);border-radius:999px;padding:5px 14px;">Word of mouth</span>
        <h2 style="margin:20px 0 0;font-size:clamp(30px,3.6vw,42px);font-weight:600;letter-spacing:-0.025em;line-height:1.15;text-wrap:balance;">You already wrote your best skill. You just don't know it yet.</h2>
      </div>
      <div style="margin-top:56px;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px;align-items:start;">
        <div data-reveal="" style="background:#101014;border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:24px;display:flex;flex-direction:column;gap:16px;">
          <div style="display:flex;align-items:center;gap:10px;">
            <img src="/ghost-logo.svg" alt="" style="width:28px;height:auto;">
            <span><span style="display:block;font-size:14px;font-weight:600;">Ghost Memory</span><span style="display:block;font-family:'Geist Mono',monospace;font-size:12px;color:#62626c;">@ghostmemory</span></span>
          </div>
          <p style="margin:0;font-size:14.5px;line-height:1.7;color:#c9c9d1;text-wrap:pretty;">Your coding agent has goldfish memory.<br>Monday you teach it something. Thursday it makes the same mistake.<br><br>I built Ghost Memory: it reads your session history, pulls out what you already taught it, and feeds it back automatically.<br><br><span style="font-family:'Geist Mono',monospace;font-size:13px;color:#7ce38b;">uv tool install git+https://github.com/mathischarlesgauthier/ghost-memory</span> — runs on your existing history.</p>
        </div>
        <div data-reveal="" style="background:#101014;border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:24px;display:flex;flex-direction:column;gap:16px;">
          <div style="display:flex;align-items:center;gap:10px;">
            <img src="/ghost-logo.svg" alt="" style="width:28px;height:auto;">
            <span><span style="display:block;font-size:14px;font-weight:600;">Ghost Memory</span><span style="display:block;font-family:'Geist Mono',monospace;font-size:12px;color:#62626c;">@ghostmemory</span></span>
          </div>
          <p style="margin:0;font-size:14.5px;line-height:1.7;color:#c9c9d1;text-wrap:pretty;">I pointed it at my own 412 Claude Code sessions.<br><br>47 skill candidates. 312 failure loops. 89 times I had to correct it by hand.<br><br>Six months of scars, sitting there, unused.</p>
          <div style="font-family:'Geist Mono',monospace;font-size:12.5px;line-height:1.9;background:#0d0d10;border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:12px 16px;">
            <div><span style="color:#62626c;">$ </span><span style="color:#ececf1;">ghost scan</span></div>
            <div style="color:#7ce38b;">47 skill candidates found</div>
            <div style="color:#62626c;">312 failure loops · 89 corrections</div>
          </div>
        </div>
        <div data-reveal="" style="background:#101014;border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:24px;display:flex;flex-direction:column;gap:16px;">
          <div style="display:flex;align-items:center;gap:10px;">
            <img src="/ghost-logo.svg" alt="" style="width:28px;height:auto;">
            <span><span style="display:block;font-size:14px;font-weight:600;">Ghost Memory</span><span style="display:block;font-family:'Geist Mono',monospace;font-size:12px;color:#62626c;">@ghostmemory</span></span>
          </div>
          <p style="margin:0;font-size:14.5px;line-height:1.7;color:#c9c9d1;text-wrap:pretty;">Nobody writes agent skills because writing one is 2 hours of unpaid work.<br><br>That's why 80% of the 670k public skills are slop.<br><br>So we stopped asking people to write them. We extract them from what you already did.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="objections" style="padding:150px 32px 0;">
    <div style="max-width:720px;margin:0 auto;">
      <div data-reveal="" style="text-align:center;display:flex;flex-direction:column;align-items:center;">
        <span style="font-family:'Geist Mono',monospace;font-size:12px;color:#7ce38b;border:1px solid rgba(124,227,139,.25);background:rgba(124,227,139,.06);border-radius:999px;padding:5px 14px;">Objections</span>
        <h2 style="margin:20px 0 0;font-size:clamp(30px,3.6vw,42px);font-weight:600;letter-spacing:-0.025em;text-wrap:balance;">You're skeptical. Good.</h2>
      </div>
      <div data-reveal="" style="margin-top:48px;display:flex;flex-direction:column;gap:10px;">
        <details class="gb-faq" open>
          <summary><span>&quot;I already have a CLAUDE.md.&quot;</span><span class="gb-faq-mark"></span></summary>
          <div class="gb-faq-a">It's 400 lines, nobody maintains it, and the model ignores half of it. Ghost Memory writes it for you — and only injects what's relevant, when it's relevant.</div>
        </details>
        <details class="gb-faq">
          <summary><span>&quot;There are already 670,000 free skills.&quot;</span><span class="gb-faq-mark"></span></summary>
          <div class="gb-faq-a">Right. None of them know your codebase. Yours does.</div>
        </details>
        <details class="gb-faq">
          <summary><span>&quot;It reads my code?!&quot;</span><span class="gb-faq-mark"></span></summary>
          <div class="gb-faq-a">Local by default. Nothing leaves your machine. You publish skill by skill, with the diff in front of you, after a mandatory secret scan.</div>
        </details>
        <details class="gb-faq">
          <summary><span>&quot;Another tool to configure.&quot;</span><span class="gb-faq-mark"></span></summary>
          <div class="gb-faq-a">One command. Zero config. And it runs on the history you already have — you see the result in 90 seconds.</div>
        </details>
      </div>
    </div>
  </section>

  <section id="lift" style="padding:150px 32px 0;">
    <div style="max-width:1000px;margin:0 auto;">

      <div data-reveal="" style="text-align:center;display:flex;flex-direction:column;align-items:center;">
        <span style="font-family:'Geist Mono',monospace;font-size:12px;color:#7ce38b;border:1px solid rgba(124,227,139,.25);background:rgba(124,227,139,.06);border-radius:999px;padding:5px 14px;">Measurement</span>
        <h2 style="margin:20px 0 0;font-size:clamp(30px,3.6vw,42px);font-weight:600;letter-spacing:-0.025em;text-wrap:balance;">Lift is the only number that matters.</h2>
        <p style="margin:18px 0 0;font-size:16px;line-height:1.7;color:#9b9ba4;max-width:600px;text-wrap:pretty;">How much a skill actually improves a task — measured by rerunning it, not guessed from a download count.</p>
      </div>

      <div class="gb-lift-anim" data-reveal="" style="margin-top:56px;background:#0d0d10;border:1px solid rgba(255,255,255,.09);border-radius:16px;padding:26px 30px 32px;">
        <div style="display:flex;justify-content:center;margin-bottom:6px;"><span class="gb-illus">ILLUSTRATIVE EXAMPLE</span></div>
        <div class="gb-lift-grid">
          <div class="gb-lift-col gb-lift-without">
            <div class="gb-lift-cap">WITHOUT THE SKILL</div>
            <div class="gb-lift-n">14 <span>steps</span></div>
            <div class="gb-lift-bars">
              <div class="gb-lift-bar" style="--i:0"><i style="background:#55555f"></i></div>
              <div class="gb-lift-bar" style="--i:1"><i style="background:#55555f"></i></div>
              <div class="gb-lift-bar" style="--i:2"><i style="background:#55555f"></i></div>
              <div class="gb-lift-bar" style="--i:3"><i style="background:#55555f"></i></div>
              <div class="gb-lift-bar" style="--i:4"><i style="background:#e05c5c"></i></div>
              <div class="gb-lift-bar" style="--i:5"><i style="background:#55555f"></i></div>
              <div class="gb-lift-bar" style="--i:6"><i style="background:#55555f"></i></div>
              <div class="gb-lift-bar" style="--i:7"><i style="background:#55555f"></i></div>
              <div class="gb-lift-bar" style="--i:8"><i style="background:#55555f"></i></div>
              <div class="gb-lift-bar" style="--i:9"><i style="background:#e05c5c"></i></div>
              <div class="gb-lift-bar" style="--i:10"><i style="background:#55555f"></i></div>
              <div class="gb-lift-bar" style="--i:11"><i style="background:#55555f"></i></div>
              <div class="gb-lift-bar" style="--i:12"><i style="background:#55555f"></i></div>
              <div class="gb-lift-bar" style="--i:13"><i style="background:#55555f"></i></div>
            </div>
            <div class="gb-lift-status" style="color:#e05c5c;">✗ failed</div>
          </div>

          <div style="text-align:center;">
            <div class="gb-lift-pct">−57%</div>
            <div class="gb-lift-pct-sub">fewer steps · this example</div>
          </div>

          <div class="gb-lift-col gb-lift-with">
            <div class="gb-lift-cap">WITH THE SKILL</div>
            <div class="gb-lift-n">6 <span>steps</span></div>
            <div class="gb-lift-bars">
              <div class="gb-lift-bar" style="--i:0"><i style="background:#7ce38b"></i></div>
              <div class="gb-lift-bar" style="--i:1"><i style="background:#7ce38b"></i></div>
              <div class="gb-lift-bar" style="--i:2"><i style="background:#7ce38b"></i></div>
              <div class="gb-lift-bar" style="--i:3"><i style="background:#7ce38b"></i></div>
              <div class="gb-lift-bar" style="--i:4"><i style="background:#7ce38b"></i></div>
              <div class="gb-lift-bar" style="--i:5"><i style="background:#7ce38b"></i></div>
            </div>
            <div class="gb-lift-status" style="color:#7ce38b;">✓ committed</div>
          </div>
        </div>
      </div>

      <div data-reveal="" style="margin-top:56px;display:flex;justify-content:center;"><span class="gb-illus">ILLUSTRATIVE</span></div>
      <div data-reveal="" style="margin-top:20px;display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;">
        <div class="gb-card" style="background:#0d0d10;border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:22px 24px;">
          <div style="font-family:'Geist Mono',monospace;font-size:14px;color:#ececf1;font-weight:500;line-height:1.4;">Alembic migration on a ledger table</div>
          <div style="margin-top:12px;font-size:13.5px;color:#9b9ba4;line-height:1.55;">7 failed attempts learned once <span style="color:#7ce38b;">→</span> applied instantly</div>
        </div>
        <div class="gb-card" style="background:#0d0d10;border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:22px 24px;">
          <div style="font-family:'Geist Mono',monospace;font-size:14px;color:#ececf1;font-weight:500;line-height:1.4;">TypeScript compile loop (edit → edit → tsc)</div>
          <div style="margin-top:12px;font-size:13.5px;color:#9b9ba4;line-height:1.55;">the fix it kept rediscovering, remembered</div>
        </div>
        <div class="gb-card" style="background:#0d0d10;border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:22px 24px;">
          <div style="font-family:'Geist Mono',monospace;font-size:14px;color:#ececf1;font-weight:500;line-height:1.4;">API status-code guessing</div>
          <div style="margin-top:12px;font-size:13.5px;color:#9b9ba4;line-height:1.55;">stops guessing, checks the contract</div>
        </div>
      </div>

      <div data-reveal="" style="margin-top:60px;max-width:780px;margin-left:auto;margin-right:auto;text-align:center;">
        <p style="margin:0;font-size:17px;line-height:1.8;color:#9b9ba4;text-wrap:pretty;">670,000 skills out there, ranked by download count — a number you can buy.</p>
        <p style="margin:12px 0 0;font-size:17px;line-height:1.8;color:#c9c9d1;font-weight:500;text-wrap:pretty;">We rank by what a skill does to real code.</p>
        <p style="margin:26px 0 0;font-family:'Geist Mono',monospace;font-size:clamp(20px,2.6vw,30px);color:#7ce38b;">We don't count. We measure.</p>
      </div>

      <p style="margin:34px auto 0;max-width:620px;text-align:center;font-size:13px;line-height:1.7;color:#62626c;text-wrap:pretty;">Every real number on this site comes from replaying your own past tasks. Until yours are measured, the examples above are just that — examples.</p>

    </div>
  </section>

  <section style="padding:150px 32px 0;">
    <div data-reveal="" style="max-width:960px;margin:0 auto;background:#0d0d10;border:1px solid rgba(255,255,255,.09);border-radius:16px;padding:64px 32px;display:flex;flex-direction:column;align-items:center;text-align:center;box-shadow:0 0 120px rgba(124,227,139,.05);position:relative;overflow:hidden;">
      <div style="position:absolute;top:-160px;left:50%;transform:translateX(-50%);width:600px;height:360px;max-width:100%;background:radial-gradient(closest-side,rgba(124,227,139,.08),transparent);pointer-events:none;"></div>
      <img src="/ghost-logo.svg" alt="" style="width:56px;height:auto;animation:gbFloat 5s ease-in-out infinite;filter:drop-shadow(0 8px 24px rgba(0,0,0,.6));position:relative;">
      <h2 style="margin:22px 0 0;font-size:clamp(28px,3.4vw,40px);font-weight:600;letter-spacing:-0.025em;line-height:1.15;max-width:600px;text-wrap:balance;position:relative;">Six months of debugging. None of it saved.<br><span style="color:#7ce38b;">Until now.</span></h2>
      <p style="margin:18px 0 0;font-size:15px;color:#9b9ba4;max-width:480px;line-height:1.65;position:relative;">Turns your coding history into skills your agent actually uses.</p>
      <div style="margin-top:30px;display:flex;align-items:center;gap:14px;max-width:100%;background:#101014;border:1px solid rgba(255,255,255,.09);border-radius:8px;padding:12px 14px 12px 18px;font-family:'Geist Mono',monospace;font-size:15px;position:relative;">
        <span style="color:#62626c;user-select:none;">$</span>
        <span class="gb-cmd" style="color:#ececf1;white-space:nowrap;">uv tool install git+https://github.com/mathischarlesgauthier/ghost-memory</span>
        <button data-label="copy" onclick="ghostCopy(this)" class="gb-copy" style="margin-left:8px;flex-shrink:0;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:5px;color:#9b9ba4;font-family:'Geist Mono',monospace;font-size:12px;padding:5px 11px;cursor:pointer;">copy</button>
      </div>
    </div>
  </section>

  <footer style="margin-top:150px;border-top:1px solid rgba(255,255,255,.07);">
    <div style="max-width:1120px;margin:0 auto;padding:40px 32px;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:24px;">
      <div style="display:flex;flex-direction:column;gap:12px;max-width:760px;">
        <p style="margin:0;font-size:13.5px;line-height:1.7;color:#62626c;text-wrap:pretty;">Telemetry is off by default. When enabled, we receive command names and error classes. Never your code, your paths, or your prompts.</p>
        <p style="margin:0;font-size:13px;line-height:1.7;color:#4d4d55;text-wrap:pretty;">Operated by Ghost World Society, a company incorporated in Delaware, USA. © 2026 Ghost World Society. All rights reserved.</p>
      </div>
      <a href="${GITHUB}" style="font-family:'Geist Mono',monospace;font-size:13px;color:#9b9ba4;">GitHub ↗</a>
    </div>
  </footer>

</div>
`;
