// Documentation développeur — design system v7 « Ghost Skills ».
const GITHUB = "https://github.com/mathischarlesgauthier/ghost-memory";
const INSTALL = "uv tool install git+https://github.com/mathischarlesgauthier/ghost-memory";

export const DOCS_HTML = `
<div style="min-height:100vh;background:#05070d;">

  <header style="position:sticky;top:0;z-index:50;background:rgba(5,7,13,.82);backdrop-filter:blur(12px);border-bottom:1px solid rgba(160,190,255,.1);">
    <div style="display:flex;align-items:center;gap:16px;max-width:1180px;margin:0 auto;padding:16px 28px;box-sizing:border-box;">
      <a href="/" style="display:flex;align-items:center;gap:9px;">
        <img src="/ghost-logo.png" alt="Ghost Skills" style="width:22px;height:auto;">
        <span style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:600;color:#f2f6ff;">Ghost Skills</span>
        <span style="font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.12em;color:#5d6f9c;border-left:1px solid rgba(160,190,255,.2);padding-left:12px;">DOCS</span>
      </a>
      <div style="flex:1;"></div>
      <a href="/" style="font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.06em;color:#a8bce4;">← SITE</a>
      <a href="${GITHUB}" target="_blank" rel="noopener" class="gsh1" style="font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.06em;border:1px solid rgba(180,205,255,.35);border-radius:3px;padding:7px 12px;color:#e8efff;">GITHUB ↗</a>
    </div>
  </header>

  <div style="position:relative;background:linear-gradient(180deg,#050d24 0%,#0a2258 120%);border-bottom:1px solid rgba(160,190,255,.12);overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(70% 60% at 50% 120%,rgba(140,190,255,.25),transparent 70%);pointer-events:none;"></div>
    <div style="position:relative;max-width:1180px;margin:0 auto;padding:70px 28px 60px;box-sizing:border-box;">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.14em;color:#9cb8e8;">DEVELOPER DOCUMENTATION</div>
      <h1 style="margin:16px 0 0;font-size:clamp(36px,5vw,60px);font-weight:500;letter-spacing:-0.035em;line-height:1.05;color:#e9f0ff;">The collective memory, <em style="font-family:'Instrument Serif',serif;font-style:italic;font-weight:400;color:#a9c9ff;">documented</em>.</h1>
      <p style="margin:20px 0 0;max-width:660px;font-size:16.5px;line-height:1.7;color:#b7c7ea;">Everything a developer needs to run Ghost Skills: install, the workflow, every command, how the measurement works, privacy, and the network. The package and CLI are <code class="inl">ghost</code> (installed from <code class="inl">ghost-memory</code>).</p>
    </div>
  </div>

  <div class="doc-wrap">
    <aside class="doc-side">
      <div class="grp">START</div>
      <a href="#install">Install &amp; first run</a>
      <a href="#workflow">The workflow</a>
      <div class="grp">REFERENCE</div>
      <a href="#commands">Command reference</a>
      <a href="#how">How it works</a>
      <a href="#lift">Measuring lift</a>
      <div class="grp">TRUST</div>
      <a href="#privacy">Privacy &amp; security</a>
      <a href="#network">The network</a>
      <a href="#faq">FAQ</a>
    </aside>

    <main class="doc-main">

      <section id="install" class="doc-sec" style="margin-top:0;">
        <div class="doc-eyebrow"><span class="dot"></span><span>GETTING STARTED</span></div>
        <h2 class="doc-h2">Install &amp; first run</h2>
        <p class="doc-p">Ghost Skills is a Python CLI. Not on PyPI yet — install from GitHub. It reads the Claude Code history you already have; nothing leaves your machine during ingest or scan.</p>
        <div class="doc-code"><span class="m"># with uv (recommended)</span>
${INSTALL}

<span class="m"># or with pip</span>
pip install git+https://github.com/mathischarlesgauthier/ghost-memory</div>
        <h3 class="doc-h3">$ ghost init</h3>
        <p class="doc-p">One guided command sets everything up and never crashes on a fresh machine. It checks your <code class="inl">PATH</code>, stores your Anthropic API key (opt-in, <code class="inl">chmod 600</code>, validated by a free metadata ping), detects Claude Code and your history, then runs a first scan and shows your candidates.</p>
        <div class="doc-code"><span class="c">$ ghost init</span>
<span class="o">✓</span> ghost is on your PATH.
<span class="o">✓</span> API key validated and saved (chmod 600).
<span class="o">✓</span> Claude Code history: 29 session(s).
First scan… <span class="o">✓</span> N candidate(s) found.</div>
        <div class="doc-note">Every step that's missing prints a fix, never a stack trace. Run <code class="inl">ghost doctor</code> anytime for a full health check.</div>
      </section>

      <section id="workflow" class="doc-sec">
        <div class="doc-eyebrow"><span class="dot"></span><span>THE WORKFLOW</span></div>
        <h2 class="doc-h2">Three commands. That's the whole thing.</h2>
        <p class="doc-p">Ghost Skills turns the failures you already lived through into skills your agent reuses. The loop is three commands — the rest is inspection and control.</p>
        <div class="doc-code"><span class="c">$ ghost run</span>      <span class="m"># ingest history, scan for scars, distill the new candidates</span>
<span class="c">$ ghost skills</span>   <span class="m"># triage what was distilled — cost, duplicates, status</span>
<span class="c">$ ghost deploy</span>   <span class="m"># push kept skills into ~/.claude/skills/ (Claude Code loads them)</span></div>
        <p class="doc-p">No hooks are installed. <code class="inl">ghost deploy</code> writes plain <code class="inl">SKILL.md</code> files that Claude Code discovers natively — nothing is silent.</p>
      </section>

      <section id="commands" class="doc-sec">
        <div class="doc-eyebrow"><span class="dot"></span><span>REFERENCE</span></div>
        <h2 class="doc-h2">Command reference</h2>
        <p class="doc-p">Every command accepts <code class="inl">--db</code> (default <code class="inl">~/.ghost/ghost.db</code>). Commands that take an identifier accept a skill id, a candidate id, or a slug — Ghost resolves it and tells you how.</p>
        <div class="doc-cmdlist">
          <div class="doc-cmdrow"><div class="n">ghost init</div><div class="d">Guided onboarding: PATH, API key, Claude Code detection, first scan. Never crashes on a virgin machine.</div></div>
          <div class="doc-cmdrow"><div class="n">ghost doctor</div><div class="d">Installation diagnostic. Each ✗ says exactly what to do.</div></div>
          <div class="doc-cmdrow"><div class="n">ghost ingest</div><div class="d">Ingests <code class="inl">~/.claude/projects/**/*.jsonl</code> into SQLite. Idempotent, streaming. <code class="inl">--rebuild</code> re-ingests (refuses if files vanished from disk, so no session is lost silently).</div></div>
          <div class="doc-cmdrow"><div class="n">ghost scan</div><div class="d">Detects scars: FAILURE_LOOP (failure loops), HUMAN_OVERRIDE (your corrections), REPEATED_SEQUENCE (repeated sequences). Triage status survives re-scans.</div></div>
          <div class="doc-cmdrow"><div class="n">ghost show &lt;id&gt;</div><div class="d">Dumps a candidate's raw evidence: signature, score, occurrences, raw events with their <code class="inl">src_file:src_line</code>.</div></div>
          <div class="doc-cmdrow"><div class="n">ghost distill &lt;id&gt;</div><div class="d">Candidate → <code class="inl">SKILL.md</code>. One LLM call, a Pitfalls section where each pitfall cites the failure that proves it, plus a self-critique. Verdict SKILL or SKIP. Refuses to create a duplicate — <code class="inl">--force</code> regenerates and disables the old one.</div></div>
          <div class="doc-cmdrow"><div class="n">ghost keep / reject &lt;id&gt;</div><div class="d">Approve (deployable) or reject (survives re-scans, never re-proposed) a candidate.</div></div>
          <div class="doc-cmdrow"><div class="n">ghost skills</div><div class="d">Lists distilled skills: verdict, cost, status, deployment. Flags duplicates (⚠DOUBLON) and disabled skills.</div></div>
          <div class="doc-cmdrow"><div class="n">ghost deploy</div><div class="d">Pushes kept candidates' skills to <code class="inl">~/.claude/skills/</code> (global) or the project's <code class="inl">.claude/skills/</code>. One skill per candidate (the newest). <code class="inl">--dry-run</code> shows without writing.</div></div>
          <div class="doc-cmdrow"><div class="n">ghost run</div><div class="d">The full loop: ingest → scan → distill new candidates under a spend cap (<code class="inl">--budget</code>, default $2; <code class="inl">--top</code>, default 10). No auto-deploy — triage stays human.</div></div>
          <div class="doc-cmdrow"><div class="n">ghost bench &lt;skill&gt;</div><div class="d">Measures lift on synthetic micro-benchmarks — self-contained tasks with a deterministic grader. The baseline without the skill really succeeds, so a lift means something.</div></div>
          <div class="doc-cmdrow"><div class="n">ghost validate &lt;skill&gt;</div><div class="d">Replays real tasks from your history with/without the skill (when short, self-contained cases exist). Runs cut by budget/timeout are a separate category, never counted as failures.</div></div>
          <div class="doc-cmdrow"><div class="n">ghost why</div><div class="d">Which skills were injectable at the last prompt, and why (triggered by their description).</div></div>
          <div class="doc-cmdrow"><div class="n">ghost disable / enable &lt;id&gt;</div><div class="d">Remove a deployed skill (never injected again) / reactivate it.</div></div>
          <div class="doc-cmdrow"><div class="n">ghost login / upgrade &lt;tier&gt;</div><div class="d">Connect to the network (device flow → Ghost token, never your Anthropic key) / open Stripe Checkout for a paid tier.</div></div>
          <div class="doc-cmdrow"><div class="n">ghost telemetry {status,on,off,preview,send}</div><div class="d">Off by default. <code class="inl">preview</code> prints the exact payload that would be sent. Only aggregate counts — never code, paths, or prompts.</div></div>
        </div>
      </section>

      <section id="how" class="doc-sec">
        <div class="doc-eyebrow"><span class="dot"></span><span>CONCEPTS</span></div>
        <h2 class="doc-h2">How it works</h2>
        <p class="doc-p">Two behaviors that look like bugs — the <strong style="color:#dfe9ff;">SKIP</strong> and <strong style="color:#dfe9ff;">"no measurable lift"</strong> — are exactly what keeps the tool honest.</p>
        <h3 class="doc-h3">1 · Scars</h3>
        <p class="doc-p"><code class="inl">ghost scan</code> reads your ingested history and finds three shapes of scar: failure loops (the agent hit the same error several times before converging — the convergence is the knowledge), human overrides (you corrected it — expensive signal), and repeated sequences (a pattern to capture once). Every candidate keeps a stable link to the raw events, so you can always trace back to the proof.</p>
        <h3 class="doc-h3">2 · Distillation</h3>
        <p class="doc-p"><code class="inl">ghost distill</code> sends the redacted trace to an LLM that condenses it into a <code class="inl">SKILL.md</code>: when to use it, the procedure, and a Pitfalls section where <em style="font-family:'Instrument Serif',serif;color:#a9c9ff;">every pitfall cites the failure that proves it</em>. Nothing invented — if the trace proves nothing non-obvious, nothing is written.</p>
        <h3 class="doc-h3">3 · SKIP is a feature</h3>
        <p class="doc-p">Many candidates return SKIP: what the agent already did well is generic and worthless. A catalog that kept everything would drown you in noise. An honest SKIP beats a hollow skill — the triage is the value.</p>
        <h3 class="doc-h3">4 · Lift, measured</h3>
        <p class="doc-p">A skill only matters if it <em style="font-family:'Instrument Serif',serif;color:#a9c9ff;">changes</em> what your agent produces. Ghost measures it instead of assuming it — see below.</p>
      </section>

      <section id="lift" class="doc-sec">
        <div class="doc-eyebrow"><span class="dot"></span><span>MEASUREMENT</span></div>
        <h2 class="doc-h2">Measuring lift</h2>
        <p class="doc-p">The success criterion is a <strong style="color:#dfe9ff;">resolved task</strong> (a grader passes), not "a commit was produced". Runs cut by budget or timeout are their own category — never failures. If the with/without distributions overlap, the verdict is <strong style="color:#dfe9ff;">"no measurable lift"</strong> — a result, not a bug. A skill that always showed positive lift would be broken.</p>
        <div class="doc-code"><span class="c">$ ghost bench edit-file-modified-since-read --yes</span>
╭─ NO MEASURABLE LIFT  <span class="m">(synthetic)</span>
│  success without 3/3 → with 3/3
│  n=1 bench · 6 runs · $0.72
   turns          without 8 → with 9   <span class="m">(+12%, overlapping)</span></div>
        <div class="doc-note">Why synthetic benches and not only replay? A history may contain no short, self-contained, replayable task (real missions mix network, external tools, prod access). Without a baseline that works, a lift number means nothing. Synthetic benches give an honest baseline — and are labeled as such.</div>
      </section>

      <section id="privacy" class="doc-sec">
        <div class="doc-eyebrow"><span class="dot"></span><span>TRUST</span></div>
        <h2 class="doc-h2">Privacy &amp; security</h2>
        <p class="doc-p">Everything lives in <code class="inl">~/.ghost/</code> (dir <code class="inl">0700</code>, db <code class="inl">0600</code>). <code class="inl">ingest</code>, <code class="inl">scan</code>, <code class="inl">show</code>, <code class="inl">skills</code>, <code class="inl">deploy</code> touch <strong style="color:#dfe9ff;">nothing</strong> on the network. Only <code class="inl">distill</code>/<code class="inl">validate</code>/<code class="inl">bench</code> call the Anthropic API, with your key.</p>
        <h3 class="doc-h3">Redaction before any send — fail closed</h3>
        <p class="doc-p">Before a trace leaves for distillation it passes a fail-closed redactor: when in doubt, mask. Only counts are logged, never values. Over-redaction is accepted by contract; under-redaction is a bug.</p>
        <div class="doc-code"><span class="m"># what you have in your trace</span>
export DATABASE_KEY=sk-live-abc123  <span class="m"># in /Users/you/app.py</span>

<span class="m"># what actually leaves</span>
export DATABASE_KEY=&lt;redacted:env_secret&gt;  <span class="m"># in ~/app.py</span>

<span class="m"># what is logged (counts only)</span>
redactions {env_secret: 1, home_path: 1}</div>
        <h3 class="doc-h3">Telemetry — off by default</h3>
        <p class="doc-p">Opt-in only, HTTPS required, strict allowlist. Even enabled, it sends only aggregate command names and error classes — never your code, paths, prompts, or skill contents. <code class="inl">ghost telemetry preview</code> prints the exact payload before anything is sent.</p>
      </section>

      <section id="network" class="doc-sec">
        <div class="doc-eyebrow"><span class="dot"></span><span>THE NETWORK</span></div>
        <h2 class="doc-h2">The collective memory</h2>
        <p class="doc-p">Your own skills are free forever, on your own key. The paid product is access to the <em style="font-family:'Instrument Serif',serif;color:#a9c9ff;">collective</em> memory — ranked by measured lift, never by download count. It's metered in <strong style="color:#dfe9ff;">unlocks</strong>: the first time a distinct community skill enters your library in the billing period. Re-using a skill you already unlocked never re-counts.</p>
        <div class="doc-code"><span class="c">$ ghost login</span>            <span class="m"># device flow → Ghost token (not your Anthropic key)</span>
<span class="c">$ ghost upgrade pro</span>      <span class="m"># opens Stripe Checkout for the tier</span></div>
        <p class="doc-p">Tiers: <strong style="color:#dfe9ff;">Free</strong> $0 (5 lifetime unlocks to try) · <strong style="color:#dfe9ff;">Pro</strong> $29/mo (200 unlocks) · <strong style="color:#dfe9ff;">Team</strong> $95/mo (1,000) · <strong style="color:#dfe9ff;">Scale</strong> $195/mo (4,000, private registry) — then usage-based overage. Hitting the quota is a clear message, never a crash: your local retrieve and already-unlocked skills keep working.</p>
      </section>

      <section id="faq" class="doc-sec">
        <div class="doc-eyebrow"><span class="dot"></span><span>FAQ</span></div>
        <h2 class="doc-h2">FAQ</h2>
        <h3 class="doc-h3">ghost: command not found</h3>
        <p class="doc-p">Installed but not on your PATH (often <code class="inl">~/.local/bin</code>). Run <code class="inl">uv tool update-shell</code> and reopen your terminal. <code class="inl">ghost init</code> and <code class="inl">ghost doctor</code> both detect and explain this.</p>
        <h3 class="doc-h3">ghost scan finds no candidates</h3>
        <p class="doc-p">Almost always the history: empty base (run <code class="inl">ghost ingest</code>), no Claude Code history yet, or a history too smooth to have scars. That last one is normal, not a bug.</p>
        <h3 class="doc-h3">distill says SKIP / bench says "no lift"</h3>
        <p class="doc-p">Both are honest results. SKIP means what the agent already did well is generic. "No lift" means that, on a baseline that actually works, the skill doesn't measurably change the outcome — proof the measurement doesn't cheat.</p>
        <h3 class="doc-h3">Does my code go over the network?</h3>
        <p class="doc-p">Not by default — ingest and scan are fully local. Distillation sends <strong style="color:#dfe9ff;">redacted</strong> traces to the Anthropic API with your key. Telemetry is off by default and never sends code.</p>
      </section>

      <div style="margin-top:80px;padding-top:32px;border-top:1px solid rgba(160,190,255,.1);display:flex;gap:14px;flex-wrap:wrap;">
        <a href="/" class="gsh17" style="font-family:'IBM Plex Mono',monospace;font-size:12.5px;font-weight:600;letter-spacing:.06em;background:#f2f6ff;color:#0a1330;border:1px solid #f2f6ff;border-radius:3px;padding:12px 22px;">← BACK TO SITE</a>
        <a href="${GITHUB}" target="_blank" rel="noopener" class="gsh4" style="font-family:'IBM Plex Mono',monospace;font-size:12.5px;font-weight:600;letter-spacing:.06em;background:rgba(6,12,30,.65);color:#e8efff;border:1px solid rgba(170,200,255,.35);border-radius:3px;padding:12px 22px;">GITHUB ↗</a>
      </div>

    </main>
  </div>
</div>
`;
