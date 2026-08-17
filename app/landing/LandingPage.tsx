"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { audience, discoveries, faqs, profiles, program, transformations, truths, type ProfileKey } from "./content";

const A = "/assets/gpt/final/";
const story = [
  ["story-01-build.webp", "Você sabe construir.", "Isso nunca foi o problema."],
  ["story-02-deploy.webp", "Depois do deploy,", "o produto fica pronto e a página vai pro ar."],
  ["story-03-silence.webp", "Então vem o silêncio.", "Ou o cliente pergunta o preço e some quando você responde."],
  ["story-04-refactor.webp", "Aí você volta pro código.", "Refatora, adiciona feature, melhora a arquitetura — e conserta a parte que já funcionava."],
  ["story-05-offer.webp", "O que faltava era a oferta.", "Promessa, público, preço e experiência. Em 2 noites, você monta a sua."],
] as const;

function TrackLink({ children, source, className = "cta" }: { children: React.ReactNode; source: string; className?: string }) {
  const checkout = process.env.NEXT_PUBLIC_CHECKOUT_URL || "#inscricao";
  return <a className={className} href={checkout} data-source={source}><span>{children}</span><b aria-hidden="true">↗</b></a>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow"><span aria-hidden="true" />{children}</p>;
}

export function LandingPage() {
  const [profile, setProfile] = useState<ProfileKey>("conscienciosidade");
  const [activeScene, setActiveScene] = useState(0);
  const [showMobile, setShowMobile] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const profileCopy = useMemo(() => profiles[profile], [profile]);

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("perfil") as ProfileKey | null;
    const profileTimer = requested && requested in profiles ? window.setTimeout(() => setProfile(requested), 0) : undefined;

    const onScroll = () => setShowMobile(window.scrollY > (heroRef.current?.offsetHeight || window.innerHeight) * 0.7);
    const steps = document.querySelectorAll<HTMLElement>("[data-scene]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveScene(Number((entry.target as HTMLElement).dataset.scene));
      });
    }, { rootMargin: "-35% 0px -45%", threshold: 0 });
    steps.forEach((step) => observer.observe(step));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { if (profileTimer) window.clearTimeout(profileTimer); observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  const eventSchema = {
    "@context": "https://schema.org", "@type": "EducationEvent",
    name: "Workshop Código que Vende", eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    description: "Duas noites ao vivo para transformar conhecimento técnico em uma oferta com público, promessa, preço e plano de venda.",
    performer: { "@type": "Person", name: "Matheus Gomes" },
    offers: { "@type": "Offer", price: "47", priceCurrency: "BRL", availability: "https://schema.org/InStock" },
  };

  return <main id="top">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />

    <header className="header">
      <a className="brand" href="#top"><span>&lt;/&gt;</span><strong>CÓDIGO QUE VENDE</strong></a>
      <nav aria-label="Navegação principal"><a href="#programa">Programa</a><a href="#matheus">Matheus</a><a href="#faq">FAQ</a></nav>
      <TrackLink source="header" className="cta small">GARANTIR VAGA · R$ 47</TrackLink>
    </header>

    <section className="hero" ref={heroRef}>
      <picture className="hero-picture">
        <source media="(max-width: 720px)" srcSet={`${A}hero-mobile.webp`} />
        <img src={`${A}hero-desktop.webp`} alt="Matheus Gomes em um estúdio escuro com elementos abstratos de software e oferta" fetchPriority="high" />
      </picture>
      <div className="hero-shade" />
      <div className="container hero-content">
        <p className="live"><i /> WORKSHOP AO VIVO · 2 NOITES · 120 MIN CADA</p>
        <h1>{profileCopy.headline}</h1>
        <p className="hero-sub">{profileCopy.subheadline}</p>
        <TrackLink source={`hero-${profile}`}>{profileCopy.cta}</TrackLink>
        <div className="hero-badges">
          <span>13 empresas construídas e vendidas</span><span>M&amp;A concluído em 2023</span><span>Replay por 48h</span><span>Garantia de 7 dias</span>
        </div>
      </div>
      <a className="scroll-cue" href="#virada">SCROLL <span>↓</span></a>
    </section>

    <section className="proof-bar"><div className="container"><strong>O código entrega.</strong><p>{profileCopy.proof}</p></div></section>

    <section className="section transformation" id="virada"><div className="container">
      <Eyebrow>A VIRADA</Eyebrow><div className="section-head"><h2>O problema não é a sua capacidade de construir. <em>É o que acontece depois.</em></h2><p>Você sai do workshop com as peças que faltavam entre o deploy e a primeira venda.</p></div>
      <div className="transform-grid">{transformations.map(([before, after], i) => <article key={before}><span>0{i + 1}</span><div><small>VOCÊ SAI DE</small><p>{before}</p></div><b>→</b><div><small>VOCÊ VAI PRA</small><p>{after}</p></div></article>)}</div>
    </div></section>

    <section className="story" aria-label="Do código à oferta">
      <div className="story-stage" aria-hidden="true">
        {story.map(([image], index) => <img key={image} className={index === activeScene ? "active" : ""} src={`${A}${image}`} alt="" loading={index ? "lazy" : "eager"} />)}
        <div className="story-vignette" />
      </div>
      <div className="story-steps container">{story.map(([, title, text], index) => <article data-scene={index} key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{text}</p>{index === 4 && <div className="lever-pills"><b>PROMESSA</b><b>PÚBLICO</b><b>PREÇO</b><b>EXPERIÊNCIA</b></div>}</article>)}</div>
    </section>

    <section className="section discover"><div className="container">
      <Eyebrow>O QUE VOCÊ VAI DESCOBRIR</Eyebrow><div className="section-head"><h2>Venda tratada do jeito que dev aprende: <em>estrutura, diagnóstico e execução.</em></h2><p>Sem depender de audiência. Sem virar personagem. Sem esconder o preço atrás de uma call.</p></div>
      <div className="discover-grid">{discoveries.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>

    <section className="section lots" id="lotes"><div className="container">
      <div className="section-head light"><h2>O preço sobe. <em>O conteúdo não.</em></h2><p>O Lote 1 existe pra quem reconhece rápido o problema que está travando a venda.</p></div>
      <div className="lot-grid"><article className="current"><p><i /> ABERTO AGORA</p><span>LOTE 1</span><strong>R$ 47</strong><small>Vagas limitadas</small></article><article><p>PRÓXIMO</p><span>LOTE 2</span><strong>R$ 67</strong><small>Quando o Lote 1 esgotar</small></article><article><p>FINAL</p><span>LOTE 3</span><strong>R$ 97</strong><small>Últimas 48h antes do evento</small></article></div>
      <TrackLink source="lotes">GARANTIR MINHA VAGA NO LOTE 1</TrackLink>
    </div></section>

    <section className="section expert" id="matheus"><div className="container expert-layout">
      <div className="expert-photo"><img src={`${A}expert-authority.webp`} alt="Retrato editorial de Matheus Gomes em ambiente tecnológico" loading="lazy" /><span>13 empresas<br />vendidas</span></div>
      <div><Eyebrow>QUEM CONDUZ</Eyebrow><h2>Matheus Gomes fala código e venda <em>com a mesma fluência.</em></h2><p>Matheus é programador desde a adolescência. Construiu um grupo de 13 empresas e vendeu todas em 2023, num processo de M&amp;A que fechou um ciclo de mais de uma década.</p><p>No caminho, vendeu apps, sistemas e serviços pra todo tipo de cliente. A lição que ficou não foi técnica: em todas as vendas, do primeiro contrato ao exit final, o que decidiu o jogo foi a oferta, nunca o código.</p><p>Hoje ele ensina exatamente isso, do jeito que dev entende: com processo.</p></div>
    </div></section>

    <section className="section truths"><div className="container"><Eyebrow>QUATRO VERDADES INCÔMODAS</Eyebrow><div className="truth-list">{truths.map(([title, text], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className="section method"><div className="method-bg"><img src={`${A}expert-method.webp`} alt="Matheus Gomes analisando um sistema abstrato de quatro módulos" loading="lazy" /></div><div className="container method-content"><div><Eyebrow>O MÉTODO</Eyebrow><h2>Quatro alavancas.<br /><em>Uma oferta.</em></h2><p>Quando uma quebra, todo o sistema perde força.</p></div><div className="lever-grid"><article><span>01</span><h3>Promessa</h3><p>O resultado que o cliente entende e deseja.</p></article><article><span>02</span><h3>Público</h3><p>Quem tem o problema e valoriza a solução.</p></article><article><span>03</span><h3>Preço</h3><p>Valor ancorado no impacto, não nas suas horas.</p></article><article><span>04</span><h3>Experiência</h3><p>O caminho sem atrito entre interesse e pagamento.</p></article></div></div></section>

    <section className="section operation"><div className="container"><Eyebrow>COMO FUNCIONA</Eyebrow><div className="section-head"><h2>Intensivo, ao vivo e aplicado <em>à sua oferta.</em></h2><p>São 2 noites online, de 120 minutos cada. Você entra no grupo do WhatsApp, recebe o material e participa com espaço pra perguntas. Perdeu uma parte? O replay fica disponível por 48 horas.</p></div><div className="operation-grid"><article><span>01</span><h3>Entre ao vivo</h3><p>Duas noites, quatro blocos por noite e perguntas no fechamento.</p></article><article><span>02</span><h3>Trabalhe na sua oferta</h3><p>Na segunda noite, você preenche o exercício guiado — não assiste só teoria.</p></article><article><span>03</span><h3>Saia com direção</h3><p>Oferta esboçada e plano de 30 dias pra buscar a primeira venda.</p></article></div></div></section>

    <section className="section program" id="programa"><div className="container"><Eyebrow>PROGRAMA COMPLETO</Eyebrow><h2>Duas noites. <em>Do diagnóstico à construção.</em></h2><div className="night-grid">{program.map((night) => <article key={night.night}><header><span>{night.night}</span><h3>{night.title}</h3><b>120 MIN</b></header><div>{night.blocks.map(([time, title, text], i) => <section key={title}><span>{String(i + 1).padStart(2, "0")}</span><div><small>{time}</small><h4>{title}</h4><p>{text}</p></div></section>)}</div></article>)}</div></div></section>

    <section className="section cost"><div className="container cost-layout"><div><Eyebrow>FAZ A CONTA COMIGO</Eyebrow><h2>Quanto custa continuar polindo <em>o que ninguém compra?</em></h2></div><div><p>Quantos meses o seu produto está pronto e parado? Quantas horas de refactor você investiu depois do lançamento? Agora a pergunta que dói: quantas horas você investiu na oferta dele?</p><p>A IA está deixando todo mundo capaz de construir. Em 2026, código virou commodity. O que sobrou de diferencial é exatamente o que este workshop ensina.</p><strong>Duas noites. R$ 47. O custo de continuar no ciclo é maior.</strong><TrackLink source="custo">QUERO SAIR DO CICLO · GARANTIR VAGA</TrackLink></div></div></section>

    <section className="section audience"><div className="container"><Eyebrow>É PRA VOCÊ?</Eyebrow><div className="section-head"><h2>Se você sabe construir, <em>mas ainda não sabe vender.</em></h2><p>Não importa se o código veio de anos de estudo ou de uma conversa com IA. O gargalo agora é transformar capacidade em oferta.</p></div><div className="audience-grid">{audience.map((item, i) => <article key={item}><span>0{i + 1}</span><p>{item}</p></article>)}</div></div></section>

    <section className="section difference"><div className="container difference-layout"><div><Eyebrow>A TERCEIRA FIGURA</Eyebrow><h2>Nem guru sem terminal. Nem dev que só vendeu curso.</h2></div><div><p>Quem ensina venda pra dev, em geral, é o guru de marketing que nunca abriu um terminal ou o dev que nunca vendeu nada além de curso.</p><p>Matheus é a terceira figura: o programador que construiu 13 empresas e vendeu todas. Que fala Lambda, WebSocket e fila com a mesma fluência com que fala proposta, margem e contrato.</p><blockquote>“Seu stack não importa pra venda.”</blockquote><p>Neste workshop você aprende o processo comercial de quem sentou na mesa de M&amp;A e ouviu zero perguntas sobre código.</p></div></div></section>

    <section className="section guarantee"><div className="container guarantee-layout"><div className="guarantee-seal"><strong>7</strong><span>DIAS</span></div><div><Eyebrow>RISCO ZERO</Eyebrow><h2>Você entra protegido <em>por uma garantia simples.</em></h2><p>{profileCopy.guarantee}</p></div></div></section>

    <section className="section faq" id="faq"><div className="container faq-layout"><div><Eyebrow>FAQ</Eyebrow><h2>Sem dúvida escondida <em>atrás de uma call.</em></h2></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="closing" id="inscricao"><picture><source media="(max-width: 720px)" srcSet={`${A}expert-final-mobile.webp`} /><img src={`${A}expert-final-desktop.webp`} alt="Matheus Gomes em um ambiente gráfico que converge para uma oferta clara" loading="lazy" /></picture><div className="closing-shade" /><div className="container"><Eyebrow>LOTE 1 · R$ 47</Eyebrow><h2>O código já está pronto.<br /><em>Agora construa o que vende.</em></h2><p>2 noites ao vivo. Replay 48h. Garantia de 7 dias. Você sai com a sua oferta esboçada.</p><TrackLink source="final">GARANTIR MINHA VAGA AGORA · LOTE 1 · R$ 47</TrackLink></div></section>

    <footer><div className="container"><a className="brand" href="#top"><span>&lt;/&gt;</span><strong>CÓDIGO QUE VENDE</strong></a><p>Workshop online com Matheus Gomes · © 2026</p></div></footer>

    <div className={`mobile-cta${showMobile ? " visible" : ""}`}><span>LOTE 1<strong>R$ 47</strong></span><TrackLink source="mobile" className="cta small">GARANTIR VAGA</TrackLink></div>
  </main>;
}
