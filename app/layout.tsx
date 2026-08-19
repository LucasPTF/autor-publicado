import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "Ativação SD — Sistema Destrave | Milla Souza",
    description:
      "Conheça uma rota de Tráfego Livre com Robô de Leads e IA Funcionária para começar sem depender de anúncios ou conteúdo em massa.",
    openGraph: {
      title: "Ativação SD — Sistema Destrave",
      description: "Uma nova rota para quem já tentou vender no digital e cansou de pagar para testar.",
      type: "website",
      locale: "pt_BR",
      url: origin,
      images: [{ url: "/milla/og.png", width: 1733, height: 908, alt: "Ativação SD com Milla Souza" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ativação SD — Sistema Destrave",
      description: "Tráfego Livre, Robô de Leads e IA Funcionária.",
      images: ["/milla/og.png"],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preload" as="image" href="/milla/milla-hero.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
