import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const socialImage = `${origin}/og.png`;

  return {
    title: "Autor Publicado em 1 Dia | Alessandro Moreira",
    description: "Workshop ao vivo para transformar sua ideia em um livro estruturado e avançar até a publicação digital com orientação prática.",
    openGraph: {
      title: "Autor Publicado em 1 Dia | Alessandro Moreira",
      description: "Seu livro não precisa continuar preso na sua cabeça.",
      type: "website",
      locale: "pt_BR",
      url: origin,
      images: [{ url: socialImage, width: 1200, height: 630, alt: "Workshop Autor Publicado em 1 Dia com Alessandro Moreira" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Autor Publicado em 1 Dia | Alessandro Moreira",
      description: "Seu livro não precisa continuar preso na sua cabeça.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
