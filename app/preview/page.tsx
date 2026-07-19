import type { Metadata } from "next";
import { CONTENT_HTML } from "../content";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function Preview() {
  return <div dangerouslySetInnerHTML={{ __html: CONTENT_HTML }} />;
}
