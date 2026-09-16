import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Emmanuel Bailly — Ingénieur R&D",
  description:
    "Portfolio d'Emmanuel Bailly, étudiant en bio-ingénierie des tissus et des implants. Projets R&D, code, CAO, fabrication.",
  metadataBase: new URL("https://portfolio-emmanuel.onrender.com"),
  openGraph: {
    title: "Emmanuel Bailly — Ingénieur R&D",
    description:
      "À la croisée du vivant, du code et de la mécanique. Étudiant en bioingénierie, ingénierie tissulaire, biomédical.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className="min-h-screen bg-ink-950 text-chrome-100 antialiased">
        <I18nProvider>
          <Header />
          <main className="relative">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
