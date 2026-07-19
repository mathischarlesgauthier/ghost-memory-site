import type { Metadata } from "next";
import { CONTENT_HTML } from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function Home() {
  return <div dangerouslySetInnerHTML={{ __html: CONTENT_HTML }} />;
}
