import type { Metadata } from "next";
import "./globals.css";

const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL || "localhost:3000";
const deploymentOrigin = deploymentHost.startsWith("localhost") ? `http://${deploymentHost}` : `https://${deploymentHost}`;

export const metadata: Metadata = {
  metadataBase: new URL(deploymentOrigin),
  title: "Vendedor Memorável — Aula ao vivo com Walter Cincinatto",
  description: "Entenda os 3 Passos Antes da Venda e instale a base comercial que vem antes da técnica.",
  openGraph: {
    title: "Vendedor Memorável — Aula ao vivo",
    description: "Os 3 Passos Antes da Venda com Walter Cincinatto.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og.png", width: 1693, height: 947, alt: "Vendedor Memorável — Os 3 Passos Antes da Venda" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vendedor Memorável — Aula ao vivo",
    description: "Os 3 Passos Antes da Venda com Walter Cincinatto.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
