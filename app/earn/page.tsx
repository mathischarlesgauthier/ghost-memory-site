import type { Metadata } from "next";
import { EARN_HTML } from "./content";

export const metadata: Metadata = {
  title: "Earn — Ghost Skills",
  description:
    "On a paid plan you don't just use the collective memory — you earn from it. Ghost Skills shares 50% of subscription revenue with contributors, paid for measured lift, not uploads.",
  robots: { index: true, follow: true },
};

export default function Earn() {
  return <div dangerouslySetInnerHTML={{ __html: EARN_HTML }} />;
}
