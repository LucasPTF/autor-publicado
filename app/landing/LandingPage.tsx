"use client";

import { useEffect, useState } from "react";
import { comparisons, deliverables, discoveries, faqs, routeSteps } from "./content";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow"><span aria-hidden="true" />{children}</p>;
}

function Cta({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <a className={`cta ${className}`} href="#oferta">{children}<span aria-hidden="true">→</span></a>;
}

export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowMobileCta(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Treinos Lucrativos em 24h — início">
          <span className="brand-mark">TL</span>
          <span>Treinos Lucrativos<small>em 24h</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#descobrir">O que você vai descobrir</a><a href="#metodo">O método</a><a href="#quem-conduz">Quem conduz</a><a href="#faq">FAQ</a>
        </nav>
        <Cta className="header-cta">Garantir minha vaga</Cta>
        <button className="menu-button" type="button" aria-label="Abrir menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><span /><span /></button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <button type="button" className="menu-close" aria-label="Fechar menu" onClick={() => setMenuOpen(false)}>×</button>
        <nav aria-label="Navegação móvel">
          <a href="#descobrir" onClick={() => setMenuOpen(false)}>O que você vai descobrir</a>
          <a href="#metodo" onClick={() => setMenuOpen(false)}>O método</a>
          <a href="#oferta" onClick={() => setMenuOpen(false)}>Oferta</a>
          <a href="#quem-conduz" onClick={() => setMenuOpen(false)}>Quem conduz</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>Perguntas frequentes</a>
        </nav>
        <Cta>Garantir minha vaga</Cta>
      </div>

      <section className="hero" id="inicio">
        <div className="hero-glow" aria-hidden="true" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="overline">Treinos lucrativos em 24h</p>
            <h1>Você trabalha o dia inteiro.<br /><em>Mas um cancelamento ainda tira dinheiro do seu bolso.</em></h1>
            <div className="hero-text">
              <p>Você estudou, ganhou experiência e correu atrás de alunos.</p>
              <p>O erro não foi falta de esforço.</p><p>Foi aprender a vender apenas sua presença.</p>
              <p>Neste workshop, você começa a organizar uma nova oferta com mais controle e menos dependência da agenda.</p>
            </div>
            <Cta>Quero sair da dependência da agenda</Cta>
            <div className="hero-tags"><span>Workshop ao vivo</span><i /><span>Oferta em até 24 horas</span><i /><span>Para Personal Trainers</span></div>
          </div>
          <div className="hero-visual" aria-label="Rota dos Quatro Passos">
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            <div className="program-card">
              <div className="program-card-head"><div className="mini-brand"><span>TL</span><b>Treinos Lucrativos em 24h</b></div><small>Workshop ao vivo</small></div>
              <p>Rota dos Quatro Passos</p>
              <ol>{routeSteps.map(([number, title]) => <li key={number}><span>{number}</span>{title}<b aria-hidden="true">›</b></li>)}</ol>
              <div className="card-signature">Conhecimento técnico<br /><strong>transformado em oferta</strong></div>
            </div>
            <div className="floating-note note-top"><b>24h</b><span>para estruturar<br />sua nova oferta</span></div>
            <div className="floating-note note-bottom"><b>4</b><span>passos simples<br />e aplicáveis</span></div>
          </div>
        </div>
      </section>

      <section className="offer-strip"><div className="shell"><p><strong>1º lote por R$29,90</strong> · Workshop ao vivo para transformar seu conhecimento técnico em uma oferta que o aluno consiga entender e valorizar.</p><Cta>Garantir minha vaga</Cta></div></section>

      <section className="section before-after"><div className="shell">
        <Eyebrow>Antes e depois</Eyebrow>
        <h2>Hoje, cada cancelamento abre um buraco no seu mês.<br /><em>Depois, você começa a construir uma oferta além da agenda.</em></h2>
        <div className="comparison-grid">{comparisons.map(([label, text], index) => <article key={text} className={index % 2 ? "after" : ""}><span>{label}</span><p>{text}</p></article>)}</div>
      </div></section>

      <section className="section light-section" id="descobrir"><div className="shell">
        <Eyebrow>O que você vai descobrir</Eyebrow><h2>Como transformar conhecimento técnico em uma oferta apresentável</h2>
        <div className="discovery-grid">{discoveries.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>

      <section className="section method" id="metodo">
        <div className="shell method-intro">
          <div><Eyebrow>Diferencial único</Eyebrow><h2>A Rota dos<br /><em>Quatro Passos</em></h2></div>
          <div className="method-copy"><p>Sua formação ensinou você a prescrever treinos. Não a vender programas.</p><p>Mais alunos também significam mais horários ocupados. Seu conhecimento já existe. O que falta é organizá-lo — sem abandonar o presencial.</p><p>Você não recebe apenas ideias soltas. Aprende uma sequência prática para transformar conhecimento técnico em uma oferta que o cliente consegue entender e valorizar.</p></div>
        </div>
        <div className="shell steps-grid">{routeSteps.map(([number, title, text]) => <article key={number}><span>Passo {number}</span><div className="step-number">{number}</div><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="shell route-line"><span>Oferta</span><i>→</i><span>Apresentação</span><i>→</i><span>Venda com clareza</span></div>
      </section>

      <section className="section audience"><div className="shell">
        <Eyebrow>Para quem é</Eyebrow><h2>Para Personal Trainers que querem parar de depender apenas da agenda</h2>
        <div className="audience-grid">
          <article className="positive"><h3>É para você se…</h3><ul><li>Trabalha muito e ainda sente insegurança financeira.</li><li>Sabe entregar resultado, mas não sabe transformar isso em um programa.</li><li>Quer começar uma nova oferta sem abandonar seus alunos presenciais.</li></ul></article>
          <article><h3>Talvez não seja se…</h3><ul><li>Você procura dinheiro sem aplicar o que aprender.</li><li>Não está disposto a apresentar e divulgar sua oferta.</li><li>Espera uma garantia de venda sem considerar público, aplicação e divulgação.</li></ul></article>
        </div>
      </div></section>

      <section className="section pricing" id="oferta"><div className="shell">
        <div className="pricing-heading"><div><Eyebrow>Oferta · 1º lote aberto</Eyebrow><h2>Entre agora por <em>R$29,90</em></h2></div><p>A mudança de lote acontece por data ou número real de vagas.</p></div>
        <div className="price-grid">
          <article className="price-card featured"><span>1º lote · sua vaga</span><h3>1º Lote</h3><strong>R$29,90</strong><h4>Workshop ao vivo + bônus</h4><p>O menor valor disponível para começar a estruturar uma oferta além da agenda.</p><Cta>Quero participar do workshop</Cta></article>
          <article className="price-card"><span>Próximo valor</span><h3>2º Lote</h3><strong>R$89,70</strong><h4>Quando o 1º lote fechar</h4><p>O mesmo workshop por um valor mais alto.</p></article>
          <article className="price-card"><span>Último valor</span><h3>3º Lote</h3><strong>R$179,40</strong><h4>Último valor de entrada</h4><p>A diferença está no momento da sua decisão.</p></article>
        </div><p className="pricing-note">Workshop ao vivo · Rota dos Quatro Passos · bônus inclusos</p>
      </div></section>

      <section className="section mentor" id="quem-conduz"><div className="shell mentor-grid">
        <div className="mentor-photo"><img src="/jose-carlos-apresentacao.png" alt="José Carlos, criador do Treinos Lucrativos em 24h" /><div className="mentor-badge"><strong>José Carlos</strong><span>Treinos Lucrativos em 24h</span><small>Mais de 36 anos de experiência</small></div></div>
        <div className="mentor-copy"><Eyebrow>Quem conduz</Eyebrow><h2>Apresentamos<br /><em>José Carlos</em></h2><p>Antes de ensinar Personal Trainers a vender programas, José Carlos também viveu preso à agenda.</p><p>Recém-casado e com um filho a caminho, trabalhava em várias academias. Acordava às 4h30, dormia às 23h e, mesmo trabalhando o dia inteiro, o dinheiro mal cobria as contas.</p><p>A virada começou quando percebeu que o cliente não pagava apenas pela hora ao seu lado. Pagava pelo resultado que ele sabia entregar.</p><p>Hoje, José Carlos soma mais de 36 anos de experiência e declara ter certificado 1.348 Personal Trainers, além de ministrar milhares de cursos e palestras.</p><div className="mentor-stats"><span><b>36+</b> anos no mercado</span><span><b>1.348</b> Personal Trainers certificados</span><span><b>1</b> missão: tirar profissionais da dependência da agenda</span></div></div>
      </div></section>

      <section className="section deliverables"><div className="shell">
        <div className="deliverables-intro"><div><Eyebrow>O que você recebe</Eyebrow><h2>Workshop Treinos<br /><em>Lucrativos em 24h</em></h2></div><div><p>Um encontro online e ao vivo para Personal Trainers que querem estruturar uma nova oferta sem criar tudo do zero. José Carlos mostra o processo enquanto você começa a aplicar.</p><p><strong>Fase 1 — Escolher e personalizar</strong><br />Selecione um programa adequado ao objetivo do cliente e adapte sua apresentação.</p><p><strong>Fase 2 — Apresentar e divulgar</strong><br />Organize o valor da oferta e comece a apresentá-la para sua base e nas redes sociais.</p></div></div>
        <div className="deliverables-grid">{deliverables.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <p className="limit-copy">Porque o corpo tem limite. <strong>E sua agenda também.</strong></p>
      </div></section>

      <section className="section guarantee"><div className="shell guarantee-card"><div className="guarantee-seal"><span>7</span><small>dias</small></div><div><Eyebrow>Garantia</Eyebrow><h2>Sem complicação</h2><h3>Garantia de 7 dias</h3><p>Você tem sete dias para avaliar sua compra. Caso perceba que o workshop não é para você, poderá solicitar a devolução total dentro desse prazo.</p><strong>Sem letras miúdas. Sem complicação.</strong></div></div></section>

      <section className="section faq-section" id="faq"><div className="shell faq-layout">
        <div><Eyebrow>Perguntas frequentes</Eyebrow><h2>Antes de garantir sua vaga no workshop</h2><p>Ainda ficou alguma dúvida? Confira as respostas sobre formato, acesso e conteúdo.</p></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => { const isOpen = openFaq === index; return <article className={isOpen ? "open" : ""} key={question}><button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? null : index)}><span>{question}</span><i aria-hidden="true">+</i></button><div className="faq-answer"><p>{answer}</p></div></article>; })}</div>
      </div></section>

      <section className="final-cta"><div className="shell">
        <Eyebrow>Última chamada</Eyebrow><h2>Você já sabe criar treino.</h2><p className="route-caption">Escolher <i>›</i> Personalizar <i>›</i> Apresentar <i>›</i> Vender</p>
        <p>O que ainda falta é transformar esse conhecimento em algo que possa ser apresentado sem colocar outra hora na agenda.<br /><br />Por R$29,90, esse pode ser o primeiro programa que deixa de existir apenas na sua cabeça.</p>
        <Cta>Quero garantir minha vaga agora</Cta><div className="trust-row"><span>Aula ao vivo</span><i /><span>Grupo VIP e materiais inclusos</span><i /><span>Garantia de 7 dias</span></div>
      </div></section>

      <footer><div className="shell footer-grid"><div><a className="brand" href="#inicio"><span className="brand-mark">TL</span><span>Treinos Lucrativos<small>em 24h</small></span></a><p>Workshop Treinos Lucrativos em 24h. Conteúdo educativo para Personal Trainers com José Carlos. Resultados dependem da oferta, do público, da aplicação e da divulgação.</p></div><span>© 2026 Treinos Lucrativos em 24h · José Carlos</span></div></footer>
      <div className={`mobile-sticky ${showMobileCta ? "visible" : ""}`}><span>1º lote · <strong>R$29,90</strong></span><Cta>Quero garantir minha vaga</Cta></div>
    </main>
  );
}
