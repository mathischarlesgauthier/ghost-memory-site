import type { Metadata } from "next";
import { API_BASE, skillPageHtml, type SkillDetail } from "../render";

export const dynamic = "force-static";
export const dynamicParams = false;

async function getSkill(slug: string): Promise<SkillDetail | null> {
  try {
    const r = await fetch(`${API_BASE}/registry/skills/${encodeURIComponent(slug)}`, {
      cache: "force-cache",
    });
    if (!r.ok) return null;
    return (await r.json()) as SkillDetail;
  } catch {
    return null;
  }
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  try {
    const r = await fetch(`${API_BASE}/registry/skills`, { cache: "force-cache" });
    if (!r.ok) return [];
    const d = await r.json();
    return ((d.skills ?? []) as { slug: string }[]).map((s) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = await getSkill(slug);
  if (!d) return { title: "Skill — Ghost Skills" };
  const title = `${d.slug} — Ghost Skills`;
  const description =
    d.description || "A skill in the Ghost Skills collective memory.";
  return {
    title,
    description,
    alternates: { canonical: `/skills/${d.slug}` },
    openGraph: {
      title,
      description,
      url: `/skills/${d.slug}`,
      images: ["/ghost-logo.png"],
      type: "article",
    },
    twitter: { card: "summary", title, description, images: ["/ghost-logo.png"] },
  };
}

export default async function SkillPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = await getSkill(slug);
  if (!d) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html:
            "<p style='color:#9cb4e2;padding:80px 28px;text-align:center;font-family:monospace'>Skill not found.</p>",
        }}
      />
    );
  }
  return <div dangerouslySetInnerHTML={{ __html: skillPageHtml(d) }} />;
}
