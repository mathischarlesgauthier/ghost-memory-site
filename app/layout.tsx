import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ghost-memory.com"),
  title: "Ghost Memory — fix it once, never twice",
  description:
    "Your coding agent forgets everything between sessions. Ghost Memory reads your history, extracts what you already taught it, and feeds it back at the right moment. Runs on your existing history. Nothing leaves your machine.",
  icons: { icon: "/ghost-logo.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

// Le SEUL JavaScript de la page : le bouton copier.
const COPY_SCRIPT = `
function ghostCopy(btn){
  var restore=btn.getAttribute('data-label')||btn.textContent;
  navigator.clipboard.writeText('uv tool install git+https://github.com/mathischarlesgauthier/ghost-memory').then(function(){
    btn.textContent='copied';
    setTimeout(function(){btn.textContent=restore;},1600);
  });
}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <script dangerouslySetInnerHTML={{ __html: COPY_SCRIPT }} />
      </body>
    </html>
  );
}
