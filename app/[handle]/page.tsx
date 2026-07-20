import type { Metadata } from "next";
import { API_BASE, type Author, profileHtml } from "../skills/render";

export const dynamic = "force-static";
export const dynamicParams = false;

async function getAuthor(bareHandle: string): Promise<Author | null> {
  try {
    const r = await fetch(
      `${API_BASE}/registry/authors/${encodeURIComponent(bareHandle)}`,
      { cache: "force-cache" }
    );
    if (!r.ok) return null;
    return (await r.json()) as Author;
  } catch {
    return null;
  }
}

// Profils publics à /@handle. Un dossier `[handle]` à la racine + generateStaticParams
// ne renvoyant QUE des valeurs préfixées `@` construit out/@handle.html sans capturer
// les routes statiques (/skills, /docs, …) qui gardent la priorité.
export async function generateStaticParams(): Promise<{ handle: string }[]> {
  try {
    const r = await fetch(`${API_BASE}/registry/skills`, { cache: "force-cache" });
    if (!r.ok) return [];
    const d = await r.json();
    const handles = [
      ...new Set(
        ((d.skills ?? []) as { author: string | null }[])
          .map((s) => s.author)
          .filter((h): h is string => Boolean(h))
      ),
    ];
    return handles.map((h) => ({ handle: `@${h}` }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const bare = decodeURIComponent(handle).replace(/^@/, "");
  const title = `@${bare} — Ghost Skills`;
  const description = `Skills published by @${bare} to the Ghost Skills collective memory — ranked by measured lift.`;
  return {
    title,
    description,
    alternates: { canonical: `/@${bare}` },
    openGraph: {
      title,
      description,
      url: `/@${bare}`,
      images: ["/ghost-logo.png"],
      type: "profile",
    },
    twitter: { card: "summary", title, description, images: ["/ghost-logo.png"] },
  };
}

export default async function Profile({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const bare = decodeURIComponent(handle).replace(/^@/, "");
  const author = await getAuthor(bare);
  if (!author) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html:
            "<p style='color:#9cb4e2;padding:80px 28px;text-align:center;font-family:monospace'>Author not found.</p>",
        }}
      />
    );
  }
  return <div dangerouslySetInnerHTML={{ __html: profileHtml(author) }} />;
}
