// Page /device — atterrissage du device flow (`ghost login`). Même design system
// v7 que le reste du site. La logique (auto-format du code, POST vers
// /auth/device/verify, tous les états) vit dans le script <head> de layout.tsx
// (le seul JS qui survit au strip-runtime), activé par la présence du formulaire.
const GITHUB = "https://github.com/mathischarlesgauthier/ghost-memory";
const DOCS = "/docs";

export const DEVICE_HTML = `
<div style="min-height:100vh;display:flex;flex-direction:column;background:#05070d;overflow-x:hidden;">

  <header style="position:relative;z-index:5;border-bottom:1px solid rgba(160,190,255,.08);">
    <div style="display:flex;align-items:center;gap:16px;max-width:1360px;margin:0 auto;padding:18px 28px;box-sizing:border-box;">
      <a href="/" style="display:flex;align-items:center;gap:9px;white-space:nowrap;">
        <img src="/ghost-logo.png" alt="Ghost Skills" style="width:24px;height:auto;display:block;filter:drop-shadow(0 3px 8px rgba(0,0,20,.5));">
        <span style="font-family:'IBM Plex Mono',monospace;font-size:13.5px;font-weight:600;letter-spacing:.02em;color:#f2f6ff;">Ghost Skills</span>
      </a>
      <nav class="gs-nav-links" style="display:flex;gap:18px;flex:1;justify-content:center;flex-wrap:wrap;">
        <a href="/#features" style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.08em;color:#a8bce4;white-space:nowrap;">WHY US</a>
        <a href="/skills" style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.08em;color:#a8bce4;white-space:nowrap;">SKILLS</a>
        <a href="/#pricing" style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.08em;color:#a8bce4;white-space:nowrap;">PRICING</a>
        <a href="/earn" style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.08em;color:#a8bce4;white-space:nowrap;">EARN</a>
      </nav>
      <div style="display:flex;align-items:center;gap:8px;white-space:nowrap;">
        <a href="${DOCS}" style="font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.06em;border:1px solid rgba(180,205,255,.35);border-radius:3px;padding:7px 12px;color:#c9dcff;" class="gsh1">READ THE DOC</a>
        <a href="${GITHUB}" target="_blank" rel="noopener" style="font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.06em;border:1px solid rgba(180,205,255,.35);border-radius:3px;padding:7px 12px;color:#e8efff;background:rgba(10,20,50,.4);" class="gsh1">GITHUB ↗</a>
      </div>
    </div>
  </header>

  <main style="position:relative;flex:1;display:flex;align-items:center;justify-content:center;padding:64px 28px 90px;box-sizing:border-box;overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(70% 55% at 50% 0%,rgba(60,110,220,.14),transparent 70%);pointer-events:none;"></div>
    <div style="position:absolute;inset:0;background-image:radial-gradient(rgba(150,190,255,.14) 1px,transparent 1px);background-size:20px 20px;mask-image:radial-gradient(60% 55% at 50% 42%,black,transparent 78%);-webkit-mask-image:radial-gradient(60% 55% at 50% 42%,black,transparent 78%);pointer-events:none;"></div>

    <div style="position:relative;width:100%;max-width:520px;">

      <div id="gs-device-card" style="background:#080b14;border:1px solid rgba(160,190,255,.16);border-radius:8px;padding:40px 38px 34px;box-sizing:border-box;box-shadow:0 34px 100px rgba(0,0,0,.6), 0 0 140px rgba(60,110,220,.06);">
        <div style="display:flex;align-items:center;gap:10px;font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.14em;color:#8ba0cc;">
          <span style="width:7px;height:7px;background:#8fb8ff;"></span><span>CONNECT THE CLI</span>
        </div>
        <h1 style="margin:16px 0 0;font-size:clamp(28px,4vw,38px);font-weight:500;letter-spacing:-0.025em;line-height:1.12;color:#e9f0ff;text-wrap:balance;">Authorize this <em style="font-family:'Instrument Serif',serif;font-style:italic;font-weight:400;color:#a9c9ff;">device</em>.</h1>
        <p style="margin:16px 0 0;font-size:15.5px;line-height:1.7;color:#9cb4e2;text-wrap:pretty;">Run <code style="font-family:'IBM Plex Mono',monospace;font-size:.85em;background:rgba(150,185,255,.12);border:1px solid rgba(150,185,255,.14);border-radius:3px;padding:2px 7px;color:#cfe0ff;">ghost login</code> in your terminal, then enter the code it shows you here.</p>

        <form id="gs-device-form" novalidate style="margin:28px 0 0;">
          <label for="gs-device-code" style="display:block;font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.12em;color:#5d6f9c;">YOUR CODE</label>
          <input id="gs-device-code" name="user_code" type="text" inputmode="text" autocomplete="one-time-code"
                 autocapitalize="characters" spellcheck="false" placeholder="XXXX-XXXX" maxlength="9"
                 aria-describedby="gs-device-status gs-device-hint" class="gs-dev-input" style="margin-top:10px;">
          <button id="gs-device-submit" type="submit" class="gs-dev-btn" style="margin-top:16px;">Authorize this device</button>
        </form>

        <div id="gs-device-status" role="status" aria-live="polite" class="gs-dev-status"></div>

        <p id="gs-device-hint" style="margin:18px 0 0;font-family:'IBM Plex Mono',monospace;font-size:11.5px;line-height:1.7;color:#5d6f9c;">The code looks like <span style="color:#8ba0cc;">K7Q2-9FMX</span> and expires 10 minutes after you run <span style="color:#8ba0cc;">ghost login</span>. Didn't start this? You can safely close this page.</p>
      </div>

      <div id="gs-device-success" hidden style="background:#080b14;border:1px solid rgba(120,200,150,.28);border-radius:8px;padding:44px 38px;box-sizing:border-box;text-align:center;box-shadow:0 34px 100px rgba(0,0,0,.6), 0 0 140px rgba(50,180,110,.07);">
        <svg width="58" height="58" viewBox="0 0 58 58" aria-hidden="true" style="display:block;margin:0 auto;">
          <circle cx="29" cy="29" r="26" fill="none" stroke="#6fd39a" stroke-width="2" style="opacity:.5;"></circle>
          <path d="M18 30 L26 38 L41 21" fill="none" stroke="#8fe6b4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <h2 style="margin:22px 0 0;font-size:clamp(23px,3vw,29px);font-weight:500;letter-spacing:-0.02em;color:#e9f0ff;">Device authorized.</h2>
        <p style="margin:12px 0 0;font-size:15.5px;line-height:1.7;color:#9cb4e2;">Return to your terminal — <span style="color:#cfe0ff;">ghost login</span> will finish on its own. You can close this tab.</p>
      </div>

      <p style="margin:26px 0 0;text-align:center;font-family:'IBM Plex Mono',monospace;font-size:11.5px;line-height:1.8;color:#5d6f9c;">
        Don't have Ghost yet? <a href="${DOCS}" style="color:#8fb8ff;border-bottom:1px solid rgba(143,184,255,.4);">Install it in 90 seconds ↗</a>
      </p>

      <noscript>
        <p style="margin:20px 0 0;text-align:center;font-family:'IBM Plex Mono',monospace;font-size:12px;color:#e0a0a0;">This page needs JavaScript to authorize your device. Enable it and reload, or re-run <span style="color:#cfe0ff;">ghost login</span>.</p>
      </noscript>

    </div>
  </main>

  <footer style="background:#04060b;border-top:1px solid rgba(160,190,255,.1);">
    <div style="max-width:1240px;margin:0 auto;padding:40px 36px;box-sizing:border-box;display:flex;justify-content:space-between;align-items:center;gap:30px;flex-wrap:wrap;">
      <span style="display:flex;align-items:center;gap:10px;">
        <img src="/ghost-logo.png" alt="Ghost Skills" style="width:22px;height:auto;">
        <span style="font-family:'IBM Plex Mono',monospace;font-size:12.5px;color:#5d6f9c;">© 2026 Ghost World Society. All rights reserved.</span>
      </span>
      <div style="display:flex;gap:26px;flex-wrap:wrap;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.08em;">
        <a href="/docs" style="color:#8ba0cc;">DOCS</a>
        <a href="/#pricing" style="color:#8ba0cc;">PRICING</a>
        <a href="${GITHUB}" target="_blank" rel="noopener" style="color:#8ba0cc;">GITHUB ↗</a>
      </div>
    </div>
  </footer>

</div>
`;
