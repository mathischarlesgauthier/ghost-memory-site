// Post-build : la page est du HTML statique server-rendered ; seul le bouton
// copier a besoin de JS (inline). On retire tout le runtime React/Next ET le
// payload d'hydratation RSC → « zéro JS sauf le bouton copier », < 100 kb.
import { readdirSync, readFileSync, writeFileSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = new URL("../out/", import.meta.url).pathname;

function htmlFiles(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...htmlFiles(p));
    else if (name.endsWith(".html")) out.push(p);
  }
  return out;
}

let removed = 0;
for (const file of htmlFiles(OUT)) {
  let html = readFileSync(file, "utf8");
  html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, (m) => {
    // On garde UNIQUEMENT le script qui définit ghostCopy et n'est pas le
    // payload d'hydratation RSC (qui contient __next_f).
    if (m.includes("function ghostCopy") && !m.includes("__next_f")) return m;
    removed++;
    return "";
  });
  html = html.replace(/<script\b[^>]*\/>/g, "");
  html = html.replace(/<link\b[^>]*rel="preload"[^>]*as="script"[^>]*>/g, "");
  writeFileSync(file, html);
}

rmSync(join(OUT, "_next", "static", "chunks"), { recursive: true, force: true });
// Manifestes JS de Next, inutiles sans runtime.
for (const dir of readdirSync(join(OUT, "_next", "static"))) {
  const p = join(OUT, "_next", "static", dir);
  if (statSync(p).isDirectory()) {
    for (const f of readdirSync(p)) {
      if (f.endsWith(".js")) rmSync(join(p, f));
    }
  }
}
console.log(`strip-runtime: ${removed} script(s) retiré(s)`);
