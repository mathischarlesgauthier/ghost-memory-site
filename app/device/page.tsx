import type { Metadata } from "next";
import { DEVICE_HTML } from "./content";

export const metadata: Metadata = {
  title: "Authorize a device — Ghost Skills",
  description:
    "Enter the code from your terminal to connect the Ghost CLI to your account.",
  robots: { index: false, follow: false },
};

export default function Device() {
  return <div dangerouslySetInnerHTML={{ __html: DEVICE_HTML }} />;
}
