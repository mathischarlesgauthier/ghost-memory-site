// Chrome partagé (nav + footer) v7, réutilisé par les pages de l'annuaire pour
// garder EXACTEMENT le design du site vitrine. HTML statique (compatible avec le
// pattern dangerouslySetInnerHTML + strip-runtime).
export const GITHUB = "https://github.com/mathischarlesgauthier/ghost-memory";
export const API_BASE = "https://ghost-backend-production-f062.up.railway.app";

export function esc(s: unknown): string {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function nav(active = ""): string {
  const item = (href: string, label: string, key: string) => {
    const on = active === key;
    return `<a href="${href}" style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.08em;color:${
      on ? "#f2f6ff" : "#a8bce4"
    };white-space:nowrap;${
      on ? "border-bottom:1px solid #8fb8ff;padding-bottom:2px;" : ""
    }">${label}</a>`;
  };
  return `
  <header style="position:relative;z-index:5;border-bottom:1px solid rgba(160,190,255,.08);">
    <div style="display:flex;align-items:center;gap:16px;max-width:1360px;margin:0 auto;padding:18px 28px;box-sizing:border-box;">
      <a href="/" style="display:flex;align-items:center;gap:9px;white-space:nowrap;">
        <img src="/ghost-logo.png" alt="Ghost Skills" style="width:24px;height:auto;display:block;filter:drop-shadow(0 3px 8px rgba(0,0,20,.5));">
        <span style="font-family:'IBM Plex Mono',monospace;font-size:13.5px;font-weight:600;letter-spacing:.02em;color:#f2f6ff;">Ghost Skills</span>
      </a>
      <nav class="gs-nav-links" style="display:flex;gap:18px;flex:1;justify-content:center;flex-wrap:wrap;">
        ${item("/skills", "SKILLS", "skills")}
        ${item("/#features", "WHY US", "why")}
        ${item("/#pricing", "PRICING", "pricing")}
        ${item("/earn", "EARN", "earn")}
      </nav>
      <div style="display:flex;align-items:center;gap:8px;white-space:nowrap;">
        <a href="/docs" style="font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.06em;border:1px solid rgba(180,205,255,.35);border-radius:3px;padding:7px 12px;color:#c9dcff;" class="gsh1">READ THE DOC</a>
        <a href="${GITHUB}" target="_blank" rel="noopener" style="font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.06em;border:1px solid rgba(180,205,255,.35);border-radius:3px;padding:7px 12px;color:#e8efff;background:rgba(10,20,50,.4);" class="gsh1">GITHUB ↗</a>
      </div>
    </div>
  </header>`;
}

export function footer(): string {
  return `
  <footer style="background:#04060b;border-top:1px solid rgba(160,190,255,.1);margin-top:90px;">
    <div style="max-width:1240px;margin:0 auto;padding:40px 36px;box-sizing:border-box;display:flex;justify-content:space-between;align-items:center;gap:30px;flex-wrap:wrap;">
      <span style="display:flex;align-items:center;gap:10px;">
        <img src="/ghost-logo.png" alt="Ghost Skills" style="width:22px;height:auto;">
        <span style="font-family:'IBM Plex Mono',monospace;font-size:12.5px;color:#5d6f9c;">© 2026 Ghost World Society. All rights reserved.</span>
      </span>
      <div style="display:flex;gap:26px;flex-wrap:wrap;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.08em;">
        <a href="/skills" style="color:#8ba0cc;">SKILLS</a>
        <a href="/docs" style="color:#8ba0cc;">DOCS</a>
        <a href="/#pricing" style="color:#8ba0cc;">PRICING</a>
        <a href="${GITHUB}" target="_blank" rel="noopener" style="color:#8ba0cc;">GITHUB ↗</a>
      </div>
    </div>
  </footer>`;
}
