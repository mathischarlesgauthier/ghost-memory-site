import type { Metadata } from "next";
import { API_BASE, directoryHtml, type SkillCard } from "./render";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Skills — the public registry | Ghost Skills",
  description:
    "Every skill in the Ghost Skills collective memory — ranked by measured lift, never by installs.",
  alternates: { canonical: "/skills" },
  openGraph: {
    title: "Ghost Skills — the public registry",
    description:
      "Every skill in the collective memory, ranked by measured lift, never by installs.",
    url: "/skills",
    images: ["/ghost-logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ghost Skills — the public registry",
    description: "Ranked by measured lift, never by installs.",
    images: ["/ghost-logo.png"],
  },
};

async function getSkills(): Promise<SkillCard[]> {
  try {
    const r = await fetch(`${API_BASE}/registry/skills`, { cache: "force-cache" });
    if (!r.ok) return [];
    const d = await r.json();
    return (d.skills ?? []) as SkillCard[];
  } catch {
    return [];
  }
}

export default async function Skills() {
  const skills = await getSkills();
  return <div dangerouslySetInnerHTML={{ __html: directoryHtml(skills) }} />;
}
