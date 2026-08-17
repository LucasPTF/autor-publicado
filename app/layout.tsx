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
    title: "Workshop Código que Vende | Matheus Gomes",
    description: "Em 2 noites ao vivo, transforme sua capacidade técnica em uma oferta com público, promessa, preço e plano de 30 dias para a primeira venda.",
    openGraph: {
      title: "Workshop Código que Vende",
      description: "Ninguém compra produto. Compram oferta. Em 2 noites ao vivo, você monta a sua.",
      type: "website", locale: "pt_BR", url: origin,
      images: [{ url: "/og.png", width: 1200, height: 628, alt: "Workshop Código que Vende com Matheus Gomes" }],
    },
    twitter: { card: "summary_large_image", title: "Workshop Código que Vende", description: "Em 2 noites ao vivo, você monta a sua oferta.", images: ["/og.png"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><head><link rel="preload" as="image" href="/assets/gpt/final/hero-desktop.webp" media="(min-width: 721px)" /><link rel="preload" as="image" href="/assets/gpt/final/hero-mobile.webp" media="(max-width: 720px)" /></head><body>{children}</body></html>;
}
