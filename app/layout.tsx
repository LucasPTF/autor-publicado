import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://treinos-lucrativos-jose-carlos.vercel.app"),
  title: "Treinos Lucrativos em 24h | José Carlos",
  description: "Workshop ao vivo para Personal Trainers transformarem conhecimento técnico em uma oferta clara, apresentável e lucrativa.",
  openGraph: {
    title: "Treinos Lucrativos em 24h | José Carlos",
    description: "Transforme conhecimento técnico em uma oferta além da agenda.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Treinos Lucrativos em 24h — Workshop ao vivo com José Carlos" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Treinos Lucrativos em 24h | José Carlos",
    description: "Transforme conhecimento técnico em uma oferta além da agenda.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
