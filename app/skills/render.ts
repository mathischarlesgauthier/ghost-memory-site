// Rendu HTML v7 de l'annuaire public. Données réelles du backend (build-time).
import { API_BASE, esc, footer, GITHUB, nav } from "../chrome";

export { API_BASE };

export type SkillCard = {
  slug: string;
  description: string;
  author: string | null;
  mean_lift: number | null;
  n_lift_measures: number;
  installs: number;
  stack: string;
  tags: string[];
  source: string;
  license: string;
  status: string;
  seed: boolean;
};
export type SkillDetail = SkillCard & { teaser: string };
export type Author = {
  handle: string;
  n_skills: number;
  total_installs: number;
  avg_lift: number | null;
  skills: SkillCard[];
};

function liftBadge(c: SkillCard): string {
  if (c.mean_lift === null || c.mean_lift === undefined) {
    return `<span class="gs-sk-badge gs-sk-unverified" title="No measured lift yet">unverified</span>`;
  }
  const pct = Math.round(c.mean_lift * 100);
  return `<span class="gs-sk-badge gs-sk-lift">${pct > 0 ? "+" : ""}${pct}% lift · n=${c.n_lift_measures}</span>`;
}

function installs(n: number): string {
  return `${n} install${n === 1 ? "" : "s"}`;
}

function repoLabel(url: string): string {
  return esc(url.replace(/^https?:\/\/(www\.)?github\.com\//, "").replace(/^https?:\/\//, ""));
}

function card(c: SkillCard): string {
  const tags = c.tags.map((t) => `<span class="gs-sk-tag">${esc(t)}</span>`).join("");
  const text = `${c.slug} ${c.description} ${c.tags.join(" ")} ${c.stack}`.toLowerCase();
  return `<article class="gs-sk-card" data-stack="${esc(c.stack)}" data-tags="${esc(
    c.tags.join(",")
  )}" data-text="${esc(text)}">
    <div class="gs-sk-card-head">
      <a href="/skills/${esc(c.slug)}" class="gs-sk-title">${esc(c.slug)}</a>
      ${liftBadge(c)}
    </div>
    <p class="gs-sk-desc">${esc(c.description) || "<span style='color:#5d6f9c'>no description</span>"}</p>
    <div class="gs-sk-metarow">
      <span class="gs-sk-stack">${esc(c.stack) || "—"}</span>
      <span>${installs(c.installs)}</span>
      <span>by <a href="/@${esc(c.author || "")}" class="gs-sk-author">@${esc(c.author || "?")}</a></span>
    </div>
    <div class="gs-sk-tags">${tags}</div>
  </article>`;
}

function chip(value: string, attr: string): string {
  return `<button type="button" class="gs-sk-chip" data-filter="${attr}" data-value="${esc(value)}">${esc(value)}</button>`;
}

export function directoryHtml(skills: SkillCard[]): string {
  const stacks = [...new Set(skills.map((s) => s.stack).filter(Boolean))].sort();
  const tags = [...new Set(skills.flatMap((s) => s.tags))].sort();
  const measured = skills.filter((s) => s.mean_lift !== null).length;

  const list = skills.length
    ? skills.map(card).join("")
    : `<p style="color:#5d6f9c;font-family:'IBM Plex Mono',monospace;font-size:14px;">The collective memory is still filling up — contributions seed it.</p>`;

  return `
<div style="min-height:100vh;display:flex;flex-direction:column;background:#05070d;overflow-x:hidden;">
  ${nav("skills")}
  <main style="flex:1;max-width:1160px;width:100%;margin:0 auto;padding:56px 28px 0;box-sizing:border-box;">
    <div style="display:flex;align-items:center;gap:10px;font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.14em;color:#8ba0cc;">
      <span style="width:7px;height:7px;background:#8fb8ff;"></span><span>THE COLLECTIVE MEMORY</span>
    </div>
    <h1 style="margin:16px 0 0;font-size:clamp(30px,4.4vw,50px);font-weight:500;letter-spacing:-0.03em;line-height:1.1;color:#e9f0ff;text-wrap:balance;">The public <em style="font-family:'Instrument Serif',serif;font-style:italic;font-weight:400;color:#a9c9ff;">registry</em>.</h1>
    <p style="margin:16px 0 0;max-width:640px;font-size:16px;line-height:1.7;color:#9cb4e2;text-wrap:pretty;">Every skill in the collective memory — ranked by <strong style="color:#dfe9ff;">measured lift</strong>, never by installs. ${skills.length} skills · ${measured} measured. The body of each skill unlocks with Pro, from the <code style="font-family:'IBM Plex Mono',monospace;font-size:.85em;color:#cfe0ff;">ghost</code> CLI.</p>

    <div id="gs-skills" style="margin-top:36px;">
      <div class="gs-sk-filters">
        <input id="gs-sk-search" type="text" placeholder="search skills, tags, stacks…" autocomplete="off" spellcheck="false" class="gs-sk-search">
        <div class="gs-sk-chips">
          <button type="button" class="gs-sk-chip gs-sk-chip-on" data-filter="all" data-value="">all</button>
          ${stacks.map((s) => chip(s, "stack")).join("")}
          ${tags.slice(0, 18).map((t) => chip(t, "tag")).join("")}
        </div>
      </div>
      <div id="gs-sk-list" class="gs-sk-list">${list}</div>
      <p id="gs-sk-empty" hidden style="color:#5d6f9c;font-family:'IBM Plex Mono',monospace;font-size:13px;margin-top:8px;">No skill matches these filters.</p>
    </div>
  </main>
  ${footer()}
</div>`;
}

export function skillPageHtml(d: SkillDetail): string {
  const tags = d.tags.map((t) => `<span class="gs-sk-tag">${esc(t)}</span>`).join("");
  const teaser = d.teaser
    ? `<div class="gs-sk-teaser"><div class="gs-sk-teaser-lines">${esc(d.teaser)}</div><div class="gs-sk-teaser-fade"></div></div>`
    : "";
  const statusLine =
    d.mean_lift === null
      ? `<span class="gs-sk-badge gs-sk-unverified">unverified — no measured lift yet</span>`
      : liftBadge(d);
  return `
<div style="min-height:100vh;display:flex;flex-direction:column;background:#05070d;overflow-x:hidden;">
  ${nav("skills")}
  <main style="flex:1;max-width:840px;width:100%;margin:0 auto;padding:44px 28px 0;box-sizing:border-box;">
    <a href="/skills" style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#8ba0cc;">← all skills</a>
    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:22px;">
      <h1 style="margin:0;font-size:clamp(26px,3.6vw,40px);font-weight:500;letter-spacing:-0.025em;color:#e9f0ff;">${esc(d.slug)}</h1>
      ${statusLine}
    </div>
    <p style="margin:16px 0 0;font-size:17px;line-height:1.6;color:#b7c7ea;text-wrap:pretty;">${esc(d.description)}</p>
    <div class="gs-sk-tags" style="margin-top:16px;">${tags}</div>

    <div style="display:flex;gap:26px;flex-wrap:wrap;margin-top:24px;font-family:'IBM Plex Mono',monospace;font-size:12.5px;color:#8ba0cc;">
      <span>stack · <span style="color:#cfe0ff;">${esc(d.stack) || "—"}</span></span>
      <span>${installs(d.installs)}</span>
      <span>by <a href="/@${esc(d.author || "")}" class="gs-sk-author">@${esc(d.author || "?")}</a></span>
      <span>source · <a href="${esc(d.source)}" target="_blank" rel="noopener" class="gs-sk-author">${repoLabel(d.source) || "—"}</a> · ${esc(d.license) || "—"}</span>
    </div>

    <h2 style="margin:40px 0 0;font-family:'IBM Plex Mono',monospace;font-size:13px;letter-spacing:.08em;color:#dfe9ff;">PITFALLS — preview</h2>
    ${teaser}

    <div class="gs-sk-lock">
      <div class="gs-sk-lock-badge">🔒 full procedure &amp; every pitfall</div>
      <p style="margin:12px 0 0;font-size:15px;line-height:1.7;color:#9cb4e2;">The complete skill — the procedure and every pitfall with the failure that proves it — unlocks with a paid plan and installs straight into your agent via the CLI.</p>
      <div style="margin-top:18px;display:flex;gap:12px;flex-wrap:wrap;">
        <a href="/#pricing" style="font-family:'IBM Plex Mono',monospace;font-size:12.5px;font-weight:600;letter-spacing:.06em;background:#f2f6ff;color:#0a1330;border:1px solid #f2f6ff;border-radius:3px;padding:12px 22px;" class="gsh3">UNLOCK WITH PRO</a>
        <a href="/docs" style="font-family:'IBM Plex Mono',monospace;font-size:12.5px;font-weight:600;letter-spacing:.06em;background:rgba(6,12,30,.65);color:#e8efff;border:1px solid rgba(170,200,255,.35);border-radius:3px;padding:12px 22px;" class="gsh4">READ THE DOC</a>
      </div>
      <p style="margin:14px 0 0;font-family:'IBM Plex Mono',monospace;font-size:11.5px;color:#5d6f9c;">On a paid plan: <span style="color:#8fb8ff;">ghost retrieve</span> finds it, and it installs into <span style="color:#8fb8ff;">~/.claude/skills</span>.</p>
    </div>
  </main>
  ${footer()}
</div>`;
}

export function profileHtml(a: Author): string {
  const avg =
    a.avg_lift === null
      ? `<span class="gs-sk-badge gs-sk-unverified">no measured lift yet</span>`
      : `<span class="gs-sk-badge gs-sk-lift">avg ${Math.round(a.avg_lift * 100)}% measured lift</span>`;
  const list = a.skills.length
    ? a.skills.map(card).join("")
    : `<p style="color:#5d6f9c;">No public skills yet.</p>`;
  return `
<div style="min-height:100vh;display:flex;flex-direction:column;background:#05070d;overflow-x:hidden;">
  ${nav("skills")}
  <main style="flex:1;max-width:1160px;width:100%;margin:0 auto;padding:52px 28px 0;box-sizing:border-box;">
    <div style="display:flex;align-items:center;gap:10px;font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.14em;color:#8ba0cc;">
      <span style="width:7px;height:7px;background:#8fb8ff;"></span><span>CONTRIBUTOR</span>
    </div>
    <h1 style="margin:14px 0 0;font-size:clamp(28px,4vw,46px);font-weight:500;letter-spacing:-0.03em;color:#e9f0ff;">@${esc(a.handle)}</h1>
    <div style="display:flex;gap:22px;flex-wrap:wrap;align-items:center;margin-top:18px;font-family:'IBM Plex Mono',monospace;font-size:13px;color:#9cb4e2;">
      <span><strong style="color:#e9f0ff;">${a.n_skills}</strong> public skill${a.n_skills === 1 ? "" : "s"}</span>
      <span><strong style="color:#e9f0ff;">${a.total_installs}</strong> total installs</span>
      ${avg}
    </div>
    <div class="gs-sk-list" style="margin-top:40px;">${list}</div>
  </main>
  ${footer()}
</div>`;
}

export { GITHUB };
