import type { Metadata } from "next";
import { DOCS_HTML } from "./content";

export const metadata: Metadata = {
  title: "Docs — Ghost Skills",
  description:
    "Developer documentation for Ghost Skills: install, the workflow, every command, how lift is measured, privacy, and the collective-memory network.",
  robots: { index: true, follow: true },
};

export default function Docs() {
  return <div dangerouslySetInnerHTML={{ __html: DOCS_HTML }} />;
}
